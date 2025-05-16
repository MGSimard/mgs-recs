import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/frameworks/")({
  component: PageFrameworks,
  loader: () => ({ title: "Frameworks" }),
});

function PageFrameworks() {
  return (
    <>
      <Section
        title="Vite + Tanstack Router"
        id="vite-tanstack-router"
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
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="TanStack Start"
        id="tanstack-start"
        links={[
          { label: "TanStack Start", href: "https://tanstack.com/start/latest" },
          { label: "Vite", href: "https://vite.dev/" },
        ]}
        docsLinks={[
          { label: "TanStack Start", href: "https://tanstack.com/start/latest/docs/overview" },
          { label: "Vite", href: "https://vite.dev/guide/" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Next.js"
        id="nextjs"
        links={[{ label: "Next.js", href: "https://nextjs.org/" }]}
        docsLinks={[{ label: "Next.js", href: "https://nextjs.org/docs" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Payload"
        id="payload"
        links={[{ label: "Payload", href: "https://payloadcms.com/" }]}
        docsLinks={[{ label: "Payload", href: "https://payloadcms.com/docs" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Fumadocs"
        id="fumadocs"
        links={[{ label: "Fumadocs", href: "https://fumadocs.dev/" }]}
        docsLinks={[{ label: "Fumadocs", href: "https://fumadocs.dev/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
