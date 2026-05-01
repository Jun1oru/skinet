using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services;

public class CouponService : ICouponService
{
    public CouponService(IConfiguration config)
    {
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
    }

    public async Task<AppCoupon?> GetCouponFromPromoCode(string code)
    {
        var promotionCodeService = new PromotionCodeService();

        var options = new PromotionCodeListOptions
        {
            Code = code,
            Expand = ["data.promotion.coupon"]
        };

        var promotionCodes = await promotionCodeService.ListAsync(options);

        var promotionCode = promotionCodes.FirstOrDefault();

        if (promotionCode != null && promotionCode.Promotion.Coupon != null)
        {
            return new AppCoupon
            {
                Name = promotionCode.Promotion.Coupon.Name,
                AmountOff = promotionCode.Promotion.Coupon.AmountOff / 100,
                PercentOff = promotionCode.Promotion.Coupon.PercentOff,
                PromotionCode = promotionCode.Code,
                CouponId = promotionCode.Promotion.CouponId
            };
        }

        return null;
    }
}
