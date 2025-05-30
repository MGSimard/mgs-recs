import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoFumaDocs, LogoNextjs, LogoPayload, LogoTanStackStart, LogoViteTanStack } from "@/_components/Icons";

export const Route = createFileRoute("/frameworks/")({
  component: PageFrameworks,
  loader: () => ({ title: "Frameworks" }),
  head: () => ({ meta: [{ title: "MGS RECS - Frameworks" }] }),
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
        description="This combination utilizes Vite for its modern build tooling and TanStack Router's type-safe routing capabilities, it provides an unmatched React development experience. This Vite and TanStack Router setup can be scaffolded through create-tsrouter-app, offering a modern alternative to the older create-react-app (CRA) by focusing on an improved developer experience and performant application builds. This setup can easily be upgraded to a full-stack framework with TanStack Start (even if all you want is server-side rendering which improves SEO, amongst other things)."
        features={[
          "100% type-safe file-based routing",
          "Lightning-fast HMR",
          "Parallel route loaders",
          "First-class search param APIs & schemas",
          "Optimized production builds",
          "Modern CSS & asset support",
          "Automatic prefetching & suspense support",
        ]}
        issues={[]}></Section>

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
        description="TanStack Start is a full-stack framework integrating Vite and various TanStack libraries. It provides comprehensive tools for client and server development. While Next.js has a tendency to take fundamental features away from the developer, pretending like their abstractions are always preferable, TanStack Start on the other hand allows you to retain fine control of everything. Two examples are image preloading for CSS backgrounds and local font implementation, which are miserable at best in Next.js compared to the traditional methods. You'll also find that TanStack Start projects integrate seamlessly with all other TanStack libraries."
        features={[
          "Enterprise-grade, type-safe routing",
          "Full-stack SSR & streaming",
          "Server functions & RPCs",
          "Client-side first, 100% server capable",
          "Deploy anywhere",
          "Bundling & optimized builds",
          "Integrated with TanStack ecosystem",
          "Streaming data & real-time ready",
          "Modern DX: File-based routing, hot reload & more",
        ]}
        issues={["Beta, expect potential issues and changes"]}></Section>

      <Section
        id="nextjs"
        className="bg-black"
        logo={<LogoNextjs />}
        title="Next.js"
        links={[{ label: "Next.js", href: "https://nextjs.org/" }]}
        docsLinks={[{ label: "Next.js", href: "https://nextjs.org/docs" }]}
        subTitle="The most popular full-stack framework."
        description="Next.js is a full-stack React framework maintained by Vercel. It supports server-side rendering with Server Components, static site generation, client-side rendering, and advanced features like Incremental Static Regeneration. Next.js simplifies routing structures through a file-system based router. A key feature is Server Actions, which enable server-side code execution directly within React components, streamlining data mutations and API interactions. While there is a common misconception that using Next.js requires vendor lock-in to Vercel hosting, Next.js can in fact be self-hosted or deployed to a variety of platforms, giving developers flexibility in their deployment choices. Vercel as a platform does provide additional QoL features, but those are not inherently tied to Next.js."
        features={[
          "File-based routing & nested layouts",
          "React Server Components",
          "Server Actions",
          "Dynamic HTML streaming",
          "Flexible data fetching",
          "Incremental Static Regeneration (ISR)",
          "Built-in optimizations (images, fonts, scripts)",
          "API routes & middleware",
          "Production-grade tooling (Turbopack, SWC)",
        ]}
        issues={[
          "Ecosystem changes regularly",
          "Can't reliably preload images used as CSS backgrounds",
          "Local font setup is untraditional",
        ]}></Section>

      <Section
        id="payload"
        className="bg-[linear-gradient(45deg,oklch(0.23_0.0561_246.8),oklch(0_0_0))]"
        logo={<LogoPayload />}
        title="Payload"
        links={[{ label: "Payload", href: "https://payloadcms.com/" }]}
        docsLinks={[{ label: "Payload", href: "https://payloadcms.com/docs" }]}
        subTitle="Headless CMS & app framework built on Next.js."
        description="Payload is a flexible headless CMS and application framework designed for developers, built entirely on Next.js. It offers a highly customizable admin interface, robust tools for backend services, granular access control, and extensible APIs. While the full app framework and admin panel are exclusive to Next.js, you can fetch and manage content from any frontend via Payload's APIs, or use its Local API in scripts and backend services. If you're used to platforms like WordPress, you'll find Payload a much more powerful, performant, and hands-on alternative."
        features={[
          "Code-first, TypeScript-native config",
          "Powerful admin panel out of the box",
          "Built-in authentication & access control",
          "Local API for direct server access",
          "Multi-tenancy & localization",
          "Custom components & extensibility",
          "Versioning, drafts & file uploads",
          "Next.js native & serverless ready",
          "Open source & no vendor lock-in",
        ]}
        issues={[]}></Section>

      <Section
        id="fumadocs"
        className="bg-[radial-gradient(circle,oklch(0.28_0.0807_260.94),oklch(0_0_0))]"
        logo={<LogoFumaDocs />}
        title="Fumadocs"
        links={[{ label: "Fumadocs", href: "https://fumadocs.dev/" }]}
        docsLinks={[{ label: "Fumadocs", href: "https://fumadocs.dev/docs/" }]}
        subTitle="Next.js-based documentation generator."
        description="Fumadocs is a documentation generator using MDX, built on Next.js. It is designed to simplify the creation of documentation websites, focusing on readability and navigation, allowing developers to concentrate on writing content rather than code."
        features={[
          "Next.js-first, React Server Component support",
          "Source agnostic content (MDX, collections, CMS)",
          "Beautiful, customizable UI",
          "Full-text search integration (Orama, Algolia)",
          "Automation & type-safe data validation",
          "Syntax highlighting & interactive examples",
          "Accessibility & UX first",
          "CLI for instant project setup",
          "Open source & actively maintained",
        ]}
        issues={[]}></Section>
    </>
  );
}
