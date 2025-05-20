import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoGoogleAnalytics, LogoPlausible, LogoPostHog } from "@/_components/Icons";

export const Route = createFileRoute("/analytics/")({
  component: PageAnalytics,
  loader: () => ({ title: "Analytics" }),
});

function PageAnalytics() {
  return (
    <>
      <Section
        id="posthog"
        className="bg-[linear-gradient(to_right,oklch(0.52_0.2678_265.34)_0%_25%,oklch(0.65_0.2135_37.99)_25%_50%,oklch(0.83_0.1607_83.7)_50%_75%,oklch(0_0_0)_75%_100%)]"
        logo={<LogoPostHog />}
        title="PostHog"
        links={[{ label: "PostHog", href: "https://www.posthog.com/" }]}
        docsLinks={[{ label: "PostHog", href: "https://posthog.com/docs/" }]}
        subTitle="Best option for both free and paid users."
        description="PostHog is an open source analytics suite for product and web analytics. Unlike Plausible, which is only free for the first 30 days, PostHog provides a recurring free tier of 1 million events, 5,000 session recordings, and more every month, even on paid plans. Data can be collected via a web snippet or developer-friendly APIs, with libraries for most major languages and frameworks. PostHog supports both cloud and self-hosted deployments and offers full SQL access to your data. To avoid analytics being blocked by adblockers like uBlock Origin, you need to reverse-proxy requests through your own domain, which applies to both PostHog and Plausible. PostHog also includes features such as session replay, feature flags, A/B testing, and error tracking, all integrated into a single platform. Compared to Plausible, PostHog offers broader integrations, including support for mobile and backend event capture, data warehouse imports and exports, and connections to tools like Stripe, Hubspot, S3, Zapier, and Sentry, as well as more advanced API capabilities. For GDPR compliance, PostHog offers EU-based hosting, options for cookieless tracking, and tools to help you manage user consent and data deletion. You are responsible for obtaining unambiguous consent if you collect personal data, and PostHog provides documentation and features to support secure, compliant analytics deployments. For self-hosting, you can run PostHog on Hetzner or any other VPS provider."
        features={[""]}></Section>

      <Section
        id="plausible"
        className="bg-[linear-gradient(135deg,oklch(0.72_0.1327_276.82),oklch(0.48_0.2295_278.48))]"
        logo={<LogoPlausible />}
        title="Plausible"
        links={[{ label: "Plausible", href: "https://plausible.io/" }]}
        docsLinks={[{ label: "Plausible", href: "https://plausible.io/docs/" }]}
        subTitle="Simple, privacy-first web analytics as a GA4 alternative."
        description="Plausible is an open source, privacy-focused web analytics tool that provides simple, essential website metrics on a single dashboard without using cookies or collecting personal data. It is fully compliant with GDPR, CCPA, and PECR, and all data is processed and stored in the EU on European-owned infrastructure. The lightweight tracking script minimizes impact on site speed and reduces your site's carbon footprint. Plausible supports goal and event tracking, funnels, UTM campaign analysis, and integrations with tools like WordPress and Google Search Console. You can invite team members, share dashboards, and choose between managed hosting or self-hosting. For self-hosting, you can run Plausible on Hetzner or any other VPS provider. Pricing is based on monthly pageviews, with plans that scale as your traffic grows, and a free 30-day trial is available."
        features={[""]}></Section>

      <Section
        id="google-analytics"
        className="bg-[linear-gradient(to_right,oklch(0.67_0.1684_54.3),oklch(0.8_0.1673_75.99))]"
        logo={<LogoGoogleAnalytics />}
        title="Google Analytics"
        links={[{ label: "Google Analytics", href: "https://developers.google.com/analytics/" }]}
        docsLinks={[
          { label: "Google Analytics", href: "https://developers.google.com/analytics/devguides/collection/ga4" },
        ]}
        subTitle="The default, but not the favorite."
        description="Google Analytics is the most widely used analytics platform and is deeply integrated into the web and advertising ecosystem, offering advanced reporting, machine learning insights, and seamless connections to other Google products like Ads and Search Console. Despite its powerful features and global infrastructure, the developer and user experience is notoriously poor: the interface is complex, slow, and often confusing, and cookie consent requirements are tightly coupled with its use for advertising and personalization. While its dominance and integrations are significant, especially for organizations that rely on Google's ad stack or need cross-platform attribution, it is hard to recommend for most use cases due to its frustrating day-to-day experience."
        features={[""]}></Section>
    </>
  );
}
