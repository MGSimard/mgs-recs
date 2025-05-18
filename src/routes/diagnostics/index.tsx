import { LogoHeyMeta, LogoLighthouse, LogoReactScan, LogoSentry } from "@/_components/Icons";
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
        className="bg-[linear-gradient(135deg,oklch(0.39_0.1556_293.06),oklch(0.55_0.2085_322.43))]"
        logo={<LogoSentry />}
        title="Sentry"
        links={[{ label: "Sentry", href: "https://sentry.io/" }]}
        docsLinks={[{ label: "Sentry", href: "https://docs.sentry.io/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="react-scan"
        className="bg-[oklch(0.6_0.1849_285.85)]"
        logo={<LogoReactScan />}
        title="React Scan"
        links={[{ label: "React Scan", href: "https://react-scan.com/" }]}
        docsLinks={[{ label: "React Scan", href: "https://github.com/aidenybai/react-scan#readme/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="hey-meta"
        className="bg-[oklch(0.66_0.2272_28.44)]"
        logo={<LogoHeyMeta />}
        title="Hey Meta"
        links={[{ label: "Hey Meta", href: "https://www.heymeta.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="lighthouse"
        className="bg-[radial-gradient(circle_at_center_calc(50%-0.5rem),oklch(0.95_0.1242_103.05)0.5rem,transparent_2rem),linear-gradient(135deg,oklch(0.5_0.1858_265.53),oklch(0.42_0.2196_264.08))] bg-blend-overlay"
        logo={<LogoLighthouse />}
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
