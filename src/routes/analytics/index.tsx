import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoBetterAuth, LogoClerk } from "@/_components/Icons";

export const Route = createFileRoute("/analytics/")({
  component: PageAnalytics,
  loader: () => ({ title: "Analytics" }),
});

function PageAnalytics() {
  return (
    <>
      <Section
        id="posthog"
        className=""
        logo=""
        title="PostHog"
        links={[{ label: "PostHog", href: "https://www.posthog.com/" }]}
        docsLinks={[{ label: "PostHog", href: "https://posthog.com/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="plausible"
        className=""
        logo=""
        title="Plausible"
        links={[{ label: "Plausible", href: "https://plausible.io/" }]}
        docsLinks={[{ label: "Plausible", href: "https://plausible.io/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="google-analytics"
        className=""
        logo=""
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
