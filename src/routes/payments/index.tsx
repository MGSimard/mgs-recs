import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoPolar, LogoStripe } from "@/_components/Icons";

export const Route = createFileRoute("/payments/")({
  component: PagePayments,
  loader: () => ({ title: "Payments" }),
});

function PagePayments() {
  return (
    <>
      <Section
        id="polar"
        className="bg-[oklch(0.18_0_0)]"
        logo={<LogoPolar />}
        title="Polar"
        links={[{ label: "Polar", href: "https://polar.sh/" }]}
        docsLinks={[{ label: "Polar", href: "https://docs.polar.sh/" }]}
        subTitle="Open source merchant-of-record platform."
        description="Polar is a modern, open source payment and billing platform built for SaaS and digital products. It supports flexible pricing models, usage-based billing, automated benefits, and a robust entitlements engine for features like license keys, downloads, and Discord or GitHub access. As a global merchant of record, Polar manages tax compliance, invoicing, and payouts, and is easy to integrate via a developer-friendly API, no-code tools, and adapters for popular frameworks. Fees are transparent: 4% + 40¢ per transaction (including Stripe's fees), which is typically more cost-effective than combining Stripe with additional merchant-of-record services."
        features={[
          "Flexible billing for SaaS and digital products",
          "Supports multiple pricing models and discounts",
          "Event ingestion enables usage-based billing",
          "Automated benefits including license keys, downloads, GitHub, and Discord access",
          "Integrated customer management and analytics",
          "Handles global tax compliance as merchant of record",
          "Secure and simple checkouts with customer portal",
          "Open source platform with framework adapters",
          "Fast setup and migration with CLI tools",
        ]}
        issues={[]}></Section>

      <Section
        id="stripe"
        className="bg-[oklch(0.58_0.2346_278.29)]"
        logo={<LogoStripe />}
        title="Stripe"
        links={[{ label: "Stripe", href: "https://stripe.com/" }]}
        docsLinks={[
          { label: "Stripe", href: "https://docs.stripe.com/" },
          { label: "Theo's Stripe Recommendations", href: "https://github.com/t3dotgg/stripe-recommendations/" },
        ]}
        subTitle="Comprehensive payments infrastructure."
        description="Stripe is a leading payments and financial infrastructure platform used by millions of businesses worldwide. It enables you to accept payments online and in person, manage subscriptions, automate revenue operations, and embed financial services with a unified API and prebuilt UI components. Stripe supports 100+ payment methods, 135+ currencies, and offers features like fraud prevention, tax automation, invoicing, and global payouts. While Stripe is powerful, integration can be complex. You are responsible for syncing payment state between Stripe and your own database, handling webhooks, and managing race conditions to avoid mismatches in subscription status. You also need to manage customer and subscription data, environment variables, price IDs, and free trials yourself. Despite these challenges, Stripe remains the industry standard for scalable, secure, and customizable payment solutions. More info on this can be found on the third linked resource at the top of this card."
        features={[
          "Accept payments in 135+ currencies",
          "100+ payment methods",
          "Pre-built Checkout and Payment Links",
          "Customizable UI with Stripe Elements",
          "In-person payments with Stripe Terminal",
          "Recurring billing and subscriptions",
          "Fraud prevention with Stripe Radar",
          "Automated tax calculation and invoicing",
          "Real-time reporting and analytics",
        ]}
        issues={[
          "Split-brain: must sync Stripe & DB via webhooks",
          "250+ event types, inconsistent data/order",
          "Race conditions: possible status mismatches",
          "Manual STRIPE_PRICE_IDs for all tiers/envs",
          "Free trials & usage tracking are your job",
          "Preventing duplicate subs is unintuitive",
          "Webhook data is complex/unreliable",
          "Cash App Pay: high fraud/cancellation risk",
        ]}></Section>
    </>
  );
}
