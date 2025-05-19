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
        description="This combination utilizes Vite for its modern build tooling and TanStack Router's type-safe routing capabilities, it provides an unmatched React development experience. This Vite and TanStack Router setup can be scaffolded using `create-tsrouter-app`, offering a modern alternative to the older `create-react-app` (CRA) by focusing on an improved developer experience and performant application builds. Note that any one of these apps can easily be upgraded to a full-stack framework with TanStack Start (even if all you want is server-side rendering which improves SEO, amongst other things)."
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
        description="TanStack Start is a full-stack framework integrating Vite and various TanStack libraries. It provides comprehensive tools for client and server development. While Next.js has a tendency to take fundamental features away from the developer, pretending like their abstractions are always preferable, TanStack Start on the other hand allows you to retain fine control of everything. Two examples are image preloading for CSS backgrounds and local font implementation, which are miserable at best in Next.js compared to the traditional methods. You'll also find that TanStack Start projects integrate seamlessly with all other TanStack libraries."
        features={[""]}></Section>

      <Section
        id="nextjs"
        className="bg-black"
        logo={<LogoNextjs />}
        title="Next.js"
        links={[{ label: "Next.js", href: "https://nextjs.org/" }]}
        docsLinks={[{ label: "Next.js", href: "https://nextjs.org/docs" }]}
        subTitle="The most popular full-stack framework."
        description="Next.js is a full-stack React framework maintained by Vercel. It supports server-side rendering with Server Components, static site generation, client-side rendering, and advanced features like Incremental Static Regeneration. Next.js simplifies routing structures through a file-system based router. A key feature is Server Actions, which enable server-side code execution directly within React components, streamlining data mutations and API interactions. While there is a common misconception that using Next.js requires vendor lock-in to Vercel hosting, Next.js can in fact be self-hosted or deployed to a variety of platforms, giving developers flexibility in their deployment choices. Vercel as a platform does provide additional QoL features, but those are not inherently tied to Next.js."
        features={[""]}></Section>

      <Section
        id="payload"
        className="bg-[linear-gradient(45deg,oklch(0.23_0.0561_246.8),oklch(0_0_0))]"
        logo={<LogoPayload />}
        title="Payload"
        links={[{ label: "Payload", href: "https://payloadcms.com/" }]}
        docsLinks={[{ label: "Payload", href: "https://payloadcms.com/docs" }]}
        subTitle="Headless CMS & app framework built on Next.js."
        description="Payload is a flexible headless CMS and application framework designed for developers. It offers a highly customizable admin interface, robust tools for backend services, granular access control for content and operations, and extensible APIs. This allows for deep integration with various front-end frameworks, such as Next.js, to build tailored content-driven applications. If you're used to platforms like WordPress, you'll find Payload a much more powerful, performant and hands-on alternative."
        features={[""]}></Section>

      <Section
        id="fumadocs"
        className="bg-[radial-gradient(circle,oklch(0.28_0.0807_260.94),oklch(0_0_0))]"
        logo={<LogoFumaDocs />}
        title="Fumadocs"
        links={[{ label: "Fumadocs", href: "https://fumadocs.dev/" }]}
        docsLinks={[{ label: "Fumadocs", href: "https://fumadocs.dev/docs/" }]}
        subTitle="Next.js-based documentation generator."
        description="Fumadocs is a documentation generator using MDX, built on Next.js. It is designed to simplify the creation of documentation websites, focusing on readability and navigation, allowing developers to concentrate on writing content rather than code."
        features={[""]}></Section>
    </>
  );
}
