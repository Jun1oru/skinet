using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services;

public class PaymentService : IPaymentService
{
    private readonly ICartService cartService;
    private readonly IUnitOfWork unit;

    public PaymentService(IConfiguration config, ICartService cartService,
    IUnitOfWork unit)
    {
        this.cartService = cartService;
        this.unit = unit;
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
    }

    public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId)
    {
        var cart = await cartService.GetCartAsync(cartId)
            ?? throw new Exception("Cart unavailable");

        var shippingPrice = await GetShippingPriceAsync(cart) ?? 0;

        await ValidateCartItemsInCartAsync(cart);

        var subtotal = CalculateSubtotal(cart);

        if (cart.AppCoupon != null)
        {
            subtotal = await ApplyDiscountAsync(cart.AppCoupon, subtotal);
        }

        var total = subtotal + shippingPrice;

        await CreateUpdatePaymentIntentAsync(cart, total);

        await cartService.SetCartAsync(cart);

        return cart;
    }

    public async Task<string> RefundPayment(string paymentIntentId)
    {
        var refundOptions = new RefundCreateOptions
        {
            PaymentIntent = paymentIntentId
        };

        var refundService = new RefundService();
        var result = await refundService.CreateAsync(refundOptions);

        return result.Status;
    }

    private async Task CreateUpdatePaymentIntentAsync(ShoppingCart cart, long amount)
    {
        var service = new PaymentIntentService();

        if (string.IsNullOrEmpty(cart.PaymentIntentId))
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = amount,
                Currency = "usd",
                PaymentMethodTypes = ["card"]
            };
            var intent = await service.CreateAsync(options);
            cart.PaymentIntentId = intent.Id;
            cart.ClientSecret = intent.ClientSecret;
        }
        else
        {
            var options = new PaymentIntentUpdateOptions
            {
                Amount = amount
            };
            await service.UpdateAsync(cart.PaymentIntentId, options);
        }
    }
    private async Task<long> ApplyDiscountAsync(AppCoupon appCoupon, long amount)
    {
        if (appCoupon.CouponId.StartsWith("promo_"))
        {
            var promotionCodeService = new PromotionCodeService();
            var options = new PromotionCodeGetOptions
            {
                Expand = ["promotion.coupon"]
            };

            var promotionCode = await promotionCodeService.GetAsync(appCoupon.CouponId, options);
            var coupon = promotionCode.Promotion.Coupon;

            return CalculateDiscount(coupon, amount);
        }
        else
        {
            var couponService = new Stripe.CouponService();
            var coupon = await couponService.GetAsync(appCoupon.CouponId);

            return CalculateDiscount(coupon, amount);
        }
    }

    private long CalculateDiscount(Coupon coupon, long amount)
    {
        if (coupon.AmountOff.HasValue)
        {
            amount -= coupon.AmountOff.Value;
        }

        if (coupon.PercentOff.HasValue)
        {
            var discount = amount * (coupon.PercentOff.Value / 100);
            amount -= (long)discount;
        }

        return amount;
    }

    private long CalculateSubtotal(ShoppingCart cart)
    {
        return (long)cart.Items.Sum(x => x.Quantity * (x.Price * 100));
    }

    private async Task ValidateCartItemsInCartAsync(ShoppingCart cart)
    {
        foreach (var item in cart.Items)
        {
            var productItem = await unit.Repository<Core.Entities.Product>().GetByIdAsync(item.ProductId)
                ?? throw new Exception("Problem getting product in cart");

            if (item.Price != productItem.Price)
            {
                item.Price = productItem.Price;
            }
        }
    }

    private async Task<long?> GetShippingPriceAsync(ShoppingCart cart)
    {
        if (cart.DeliveryMethodId.HasValue)
        {
            var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId)
                ?? throw new Exception("Problem with delivery method");

            return (long)deliveryMethod.Price * 100;
        }
        return null;
    }
}
