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
        subTitle="Most recommended for both new & seasoned React devs."
        description="This combination utilizes Vite for its modern build tooling, which employs native ES modules during development for a highly efficient workflow and optimized bundling for production. When paired with TanStack Router's type-safe routing capabilities, it provides a contemporary development experience. This Vite and TanStack Router setup can be scaffolded using `create-tsrouter-app`, offering a modern alternative to the older `create-react-app` (CRA) by focusing on an improved developer experience and performant application builds."
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
        subTitle="Full-stack development, no strings attached."
        description="TanStack Start is a full-stack framework integrating Vite and various TanStack libraries. It provides comprehensive tools for client and server development. True to its 'no strings attached' philosophy, it avoids proprietary platform lock-in features, offering developers greater freedom in choosing their hosting and infrastructure, unlike Next.js and Vercel."
        features={[""]}></Section>

      <Section
        id="nextjs"
        className="bg-black"
        logo={<LogoNextjs />}
        title="Next.js"
        links={[{ label: "Next.js", href: "https://nextjs.org/" }]}
        docsLinks={[{ label: "Next.js", href: "https://nextjs.org/docs" }]}
        subTitle="The most popular full-stack framework."
        description="Next.js is a React framework for building full-stack web applications, primarily using its App Router paradigm. This supports server-side rendering with Server Components, static site generation, and client-side rendering. It simplifies page creation with a file-system based router. A key feature is Server Actions, which enable server-side code execution directly within React components, streamlining data mutations and API interactions. For data fetching, the App Router allows direct `async/await` in Server Components and utilizes Route Handlers for creating API endpoints, facilitating seamless integration with any data source or library. Its notable ecosystem makes it suitable for a variety of project scales."
        features={[""]}></Section>

      <Section
        id="payload"
        className="bg-[linear-gradient(45deg,oklch(0.23_0.0561_246.8),oklch(0_0_0))]"
        logo={<LogoPayload />}
        title="Payload"
        links={[{ label: "Payload", href: "https://payloadcms.com/" }]}
        docsLinks={[{ label: "Payload", href: "https://payloadcms.com/docs" }]}
        subTitle="Headless CMS & app framework built on Next.js."
        description="Payload is a headless CMS and application framework built with TypeScript. It features a customizable admin interface and provides tools for backend services, access control, and content APIs. It can be integrated with various front-end frameworks, including Next.js."
        features={[""]}></Section>

      <Section
        id="fumadocs"
        className="bg-[radial-gradient(circle,oklch(0.28_0.0807_260.94),oklch(0_0_0))]"
        logo={<LogoFumaDocs />}
        title="Fumadocs"
        links={[{ label: "Fumadocs", href: "https://fumadocs.dev/" }]}
        docsLinks={[{ label: "Fumadocs", href: "https://fumadocs.dev/docs/" }]}
        subTitle="Next.js-based documentation generator."
        description="Fumadocs is a documentation generator built on Next.js that uses MDX. It is designed to simplify the creation of documentation websites, focusing on readability and navigation, allowing developers to concentrate on content creation."
        features={[""]}></Section>
    </>
  );
}
