import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoFumaDocs, LogoNextjs, LogoPayload, LogoTanStackStart, LogoViteTanStack } from "@/_components/Icons";

export const Route = createFileRoute("/frameworks/")({
  component: PageFrameworks,
  loader: () => ({ title: "Frameworks" }),
});

function PageFrameworks() {
  return (
    <>
      <Section
        id="vite-tanstack-router"
        className="bg-[linear-gradient(135deg,oklch(0.78_0.1341_230.13),oklch(0.63_0.2788_311.44))]"
        logo={<LogoViteTanStack />}
        title="Vite + Tanstack Router"
        links={[
          {
            label: "Vite",
            href: "https://vite.dev/",
          },
          {
            label: "TanStack Router",
            href: "https://tanstack.com/router/latest",
          },
        ]}
        docsLinks={[
          { label: "Vite", href: "https://vite.dev/guide/" },
          { label: "Tanstack Router", href: "https://tanstack.com/router/latest/docs/framework/react/overview" },
          {
            label: "create-tsrouter-app",
            href: "https://github.com/TanStack/create-tsrouter-app/tree/main/cli/create-tsrouter-app",
          },
        ]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="tanstack-start"
        className="bg-[linear-gradient(to_right,oklch(0.7_0.123_182.5),oklch(0.71_0.1257_215.22))]"
        logo={<LogoTanStackStart />}
        title="TanStack Start"
        links={[
          { label: "TanStack Start", href: "https://tanstack.com/start/latest" },
          { label: "Vite", href: "https://vite.dev/" },
        ]}
        docsLinks={[
          { label: "TanStack Start", href: "https://tanstack.com/start/latest/docs/overview" },
          { label: "Vite", href: "https://vite.dev/guide/" },
        ]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="nextjs"
        className="bg-black"
        logo={<LogoNextjs />}
        title="Next.js"
        links={[{ label: "Next.js", href: "https://nextjs.org/" }]}
        docsLinks={[{ label: "Next.js", href: "https://nextjs.org/docs" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="payload"
        className="bg-[linear-gradient(45deg,oklch(0.23_0.0561_246.8),oklch(0_0_0))]"
        logo={<LogoPayload />}
        title="Payload"
        links={[{ label: "Payload", href: "https://payloadcms.com/" }]}
        docsLinks={[{ label: "Payload", href: "https://payloadcms.com/docs" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="fumadocs"
        className="bg-[radial-gradient(circle,oklch(0.28_0.0807_260.94),oklch(0_0_0))]"
        logo={<LogoFumaDocs />}
        title="Fumadocs"
        links={[{ label: "Fumadocs", href: "https://fumadocs.dev/" }]}
        docsLinks={[{ label: "Fumadocs", href: "https://fumadocs.dev/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
