import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoBetterAuth, LogoClerk, LogoGoogleAnalytics, LogoPlausible, LogoPostHog } from "@/_components/Icons";

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
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="plausible"
        className="bg-[linear-gradient(135deg,oklch(0.72_0.1327_276.82),oklch(0.48_0.2295_278.48))]"
        logo={<LogoPlausible />}
        title="Plausible"
        links={[{ label: "Plausible", href: "https://plausible.io/" }]}
        docsLinks={[{ label: "Plausible", href: "https://plausible.io/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
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
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
