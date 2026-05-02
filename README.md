# SkiNet 🛍️

A full-stack e-commerce application built with .NET 10 and Angular 21, featuring real-time notifications, Stripe payments, Redis cart, and a full admin panel.

🌐 **Live Demo:** [skinet-rasmus.azurewebsites.net](https://skinet-rasmus.azurewebsites.net)

> **Demo credentials**
> | Role | Email | Password |
> |------|-------|----------|
> | Admin | admin@test.com | Pa$$w0rd |
> | User | _(register a free account)_ | — |
>
> Note: The admin demo account has no saved name - the Full Name field in checkout will need to be filled in manually.

---

![Homepage](screenshots/homepage.png)

---

## Features

### Visitor

- Browse and filter products by brand, type, and sort order
- Add and remove items from the cart
- Apply voucher/coupon codes
- Register or log in

### Logged-in User

- Full checkout flow: address, shipping method, payment, and order confirmation
- Pay securely via Stripe
- View order history and individual order summaries
- Saved delivery address for future checkouts

### Admin

- View and filter all customer orders by status (Pending, PaymentReceived, PaymentMismatch, Refunded)
- View individual order details
- Issue refunds directly from the admin panel
- Create, edit, and remove products via API

---

## Tech Stack

| Layer        | Technology                                     |
| ------------ | ---------------------------------------------- |
| Backend      | .NET 10, ASP.NET Core, EF Core                 |
| Frontend     | Angular 21, Tailwind CSS, Angular Material     |
| Database     | Azure SQL                                      |
| Cache / Cart | Redis                                          |
| Payments     | Stripe (Checkout + Webhooks)                   |
| Real-time    | SignalR                                        |
| Auth         | ASP.NET Core Identity (cookie-based)           |
| Hosting      | Azure App Service (API + Angular static files) |
| CI/CD        | GitHub Actions                                 |

---

## Architecture

The Angular app is compiled to static files and served from the `wwwroot` folder of the ASP.NET Core application, meaning both frontend and backend are hosted within the same Azure App Service. The API handles all data access via EF Core against Azure SQL, uses Redis for cart persistence, and communicates with Stripe for payment processing and webhook handling. SignalR is used to push real-time order status notifications to the client.

---

## Screenshots

### Shop

![Shop](screenshots/shop.png)

### Filters

![Filters](screenshots/filters.png)

### Cart

![Cart](screenshots/cart.png)

### Checkout flow

![Checkout - Address](screenshots/checkout-address.png)
![Checkout - Shipping](screenshots/checkout-shipping.png)
![Checkout - Payment](screenshots/checkout-payment.png)
![Checkout - Confirmation](screenshots/checkout-confirmation.png)

### Order success

![Order success](screenshots/checkout-success.png)

### Order summary

![Order summary](screenshots/order-summary.png)

### Admin panel

![Admin](screenshots/admin.png)

---

## Running Locally

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js 24+](https://nodejs.org/)
- [Angular CLI 21](https://angular.dev/tools/cli) (`npm install -g @angular/cli@21`)
- [Docker](https://www.docker.com/) (for Redis)
- A [Stripe](https://stripe.com) account (test keys)

### 1. Clone the repo

```bash
git clone https://github.com/Jun1oru/skinet.git
cd skinet
```

### 2. Start Redis

```bash
cd skinet
docker compose up -d
```

### 3. Configure the API

Create `API/appsettings.Development.json` and fill in your values:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Your SQL Server connection string",
    "Redis": "localhost"
  },
  "StripeSettings": {
    "PublishableKey": "your_stripe_publishable_key",
    "SecretKey": "your_stripe_secret_key",
    "WhSecret": "your_stripe_webhook_secret"
  }
}
```

### 4. Run the API

```bash
cd API
dotnet watch
```

The API will apply migrations and seed the database automatically on first run.

### 5. Run the Angular app

```bash
cd client
npm install
ng serve
```

Visit `https://localhost:4200`

### 6. Connect stripe cli command

```bash
cd skinet
stripe listen --forward-to https://localhost:5001/api/payments/webhook -e payment_intent.succeeded
```

---

## CI/CD

Pushes to `main` automatically build and deploy the application to Azure App Service via GitHub Actions. The Angular app is built first and its output is placed in `API/wwwroot` before the .NET app is published, so a single App Service hosts the complete application.

---

## Challenges & Notes

**Coupon integration** was implemented as an independent challenge before reviewing the course solution. Stripe's API had breaking changes that required additional debugging beyond the provided solution - the final implementation handles coupon validation, application, and removal across both the cart and Stripe PaymentIntent.

**Azure SQL cold-start** - the free-tier Azure SQL instance suspends after inactivity. The app handles this with retry logic on both EF Core queries (`EnableRetryOnFailure`) and database migrations at startup, so deployments recover automatically without manual intervention.

---

## Known Limitations & What I'd Improve

- **Catalog and Customer Service** sections of the admin panel are not yet implemented
- **Admin seeded account** has no saved first/last name - the checkout Full Name field defaults to empty for this account
- **Azure free tier** - the SQL instance has a monthly vCore second limit; once exhausted the database goes offline until the next billing cycle
- Add product management UI for admins (currently API-only)
- Add unit and integration test coverage

---

## License

This project was built following the [Udemy course](https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/) by Neil Cummings, with independent additions and modifications.
