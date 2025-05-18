import { Section } from "@/_components/Section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/diagnostics/")({
  component: PageDiagnostics,
  loader: () => ({ title: "Diagnostics" }),
});

function PageDiagnostics() {
  return (
    <>
      <Section
        id="sentry"
        className=""
        logo=""
        title="Sentry"
        links={[{ label: "Sentry", href: "https://sentry.io/" }]}
        docsLinks={[{ label: "Sentry", href: "https://docs.sentry.io/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="react-scan"
        className=""
        logo=""
        title="React Scan"
        links={[{ label: "React Scan", href: "https://react-scan.com/" }]}
        docsLinks={[{ label: "React Scan", href: "https://github.com/aidenybai/react-scan#readme/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="hey-meta"
        className=""
        logo=""
        title="Hey Meta"
        links={[{ label: "Hey Meta", href: "https://www.heymeta.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="lighthouse"
        className=""
        logo=""
        title="Lighthouse"
        links={[
          {
            label: "Lighthouse",
            href: "https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk",
          },
        ]}
        docsLinks={[{ label: "Lighthouse", href: "https://developer.chrome.com/docs/lighthouse/overview" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
