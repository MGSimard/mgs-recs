import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCheckSiteMeta, LogoLighthouse, LogoReactScan, LogoSentry } from "@/_components/Icons";

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
        subTitle="Error and performance monitoring for every stack."
        description="Sentry is a full-stack application monitoring platform used by millions of developers to identify, debug, and resolve errors and performance issues across web, mobile, backend, and distributed systems. It provides error monitoring, distributed tracing, session replay, profiling, code coverage, uptime and cron monitoring, and release health tracking, all in one place. Sentry automatically captures unhandled exceptions, groups similar errors, and connects issues to the relevant code and commit authors. With support for over 100 platforms and frameworks, Sentry integrates with popular developer tools like GitHub, GitLab, Slack, and Jira. Its tracing and performance monitoring features help pinpoint bottlenecks from frontend to backend, while session replay and user feedback provide visual context for debugging. Sentry can be set up with just a few lines of code and supports both cloud and self-hosted deployments, making it suitable for teams of any size who want to improve code quality and fix problems faster."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="react-scan"
        className="bg-[oklch(0.6_0.1849_285.85)]"
        logo={<LogoReactScan />}
        title="React Scan"
        links={[{ label: "React Scan", href: "https://react-scan.com/" }]}
        docsLinks={[{ label: "React Scan", href: "https://github.com/aidenybai/react-scan#readme/" }]}
        subTitle="Free React performance diagnostics."
        description="React Scan is an open source tool that automatically detects and highlights performance issues in your React app, such as unnecessary renders, without requiring any code changes. It visually identifies which components need optimization and can be integrated via script tag, npm, CLI, or browser extension. React Scan works with frameworks like Next.js, Vite, Remix, and more, and is designed to provide actionable insights for developers directly in their workflow. Unlike traditional tools that require manual setup or lack actionable visual cues, React Scan makes it easy to spot and fix slow components, helping you keep your React apps fast and efficient."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="check-site-meta"
        className="bg-[oklch(0.5366_0.0477_262.77)]"
        logo={<LogoCheckSiteMeta />}
        title="check-site-meta"
        links={[{ label: "check-site-meta", href: "https://github.com/alfonsusac/check-site-meta/" }]}
        subTitle="Local metadata and link preview checker."
        description="check-site-meta is a command-line tool for inspecting website metadata and generating link previews without requiring deployment. It runs a local Node.js backend to bypass CORS restrictions and caching issues, providing accurate retrieval of OpenGraph and Twitter metadata from any URL, including localhost. The tool supports previewing how your site will appear on X (Twitter), Discord, Google, and Facebook, and can also check sitemaps and robots.txt. To use, run pnpx check-site-meta or npx check-site-meta in your terminal."
        features={[""]}
        issues={[]}></Section>

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
        subTitle="Website audits built into Chrome."
        description="Lighthouse is an open source tool for auditing web pages, built directly into Chrome DevTools. It analyzes performance, accessibility, SEO, best practices, and progressive web app features, providing detailed reports and suggestions for improvement. You can run Lighthouse on any page from the Chrome browser without installing anything extra, making it a standard choice for web diagnostics and optimization."
        features={[""]}
        issues={[]}></Section>
    </>
  );
}
