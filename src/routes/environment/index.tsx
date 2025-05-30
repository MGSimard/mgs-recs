import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoESLint, LogoNodejs, LogoPnpm, LogoPrettier } from "@/_components/Icons";

export const Route = createFileRoute("/environment/")({
  component: PageEnvironment,
  loader: () => ({ title: "Environment" }),
  head: () => ({ meta: [{ title: "MGS RECS - Environment" }] }),
});

function PageEnvironment() {
  return (
    <>
      <Section
        id="nodejs"
        className="bg-[radial-gradient(circle_at_center,oklch(0.3105_0.0524_151.99),oklch(0.1822_0.0221_263.79))]"
        logo={<LogoNodejs />}
        title="Node.js"
        links={[{ label: "Node.js", href: "https://nodejs.org/" }]}
        docsLinks={[{ label: "Node.js", href: "https://nodejs.org/docs/latest/api/" }]}
        subTitle="JavaScript runtime environment"
        description="Node.js is a free, open source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It enables developers to run JavaScript on the server, powering web apps, APIs, command-line tools, and more. Node.js is known for its asynchronous, event-driven architecture, making it ideal for real-time and data-intensive applications."
        features={[
          "Asynchronous and event-driven architecture for high concurrency",
          "Single-threaded but highly scalable via event loop",
          "Built on the fast V8 JavaScript engine",
          "Rich ecosystem with npm (over 1 million packages)",
          "Cross-platform support (Windows, macOS, Linux)",
          "Ideal for real-time applications (e.g., chat, gaming, collaboration)",
          "Strong community and corporate backing",
          "Native support for JSON and modern ECMAScript features",
          "Excellent for building RESTful APIs and microservices",
          "Supports WebSockets and real-time communication",
        ]}
        issues={["Does not natively support TypeScript, needs build step or ts-node"]}></Section>

      <Section
        id="pnpm"
        className="bg-[linear-gradient(oklch(0.8002_0.167375_77.0488)50%,oklch(0.4239_0_0)50%)]"
        logo={<LogoPnpm />}
        title="pnpm"
        links={[{ label: "pnpm", href: "https://pnpm.io/" }]}
        docsLinks={[{ label: "pnpm", href: "https://pnpm.io/motivation/" }]}
        subTitle="Fast, disk space efficient package manager"
        description="pnpm is a performant npm alternative that saves disk space and boosts install speed by using a content-addressable store and hard links. It supports monorepos, strict dependency isolation, and efficient workflows for modern JavaScript projects."
        features={[
          "Up to 2x faster than npm for installs",
          "Saves disk space by sharing dependencies across projects",
          "Uses hard links and a global content-addressable store",
          "Built-in support for monorepos",
          "Strict dependency isolation with non-flat node_modules",
          "Works on Windows, macOS, and Linux",
          "Supports advanced features like patching, hooks, and side-effects cache",
        ]}
        issues={[]}></Section>

      <Section
        id="prettier"
        className="bg-[linear-gradient(oklch(0.711_0.0882_196.3)25%,oklch(0.8226_0.1501_80.4)25%,oklch(0.8226_0.1501_80.4)50%,oklch(0.6616_0.1741_23.11)50%,oklch(0.6616_0.1741_23.11)75%,oklch(0.6938_0.1053_326.64)75%)]"
        logo={<LogoPrettier />}
        title="Prettier"
        links={[{ label: "Prettier", href: "https://prettier.io/" }]}
        docsLinks={[{ label: "Prettier Docs", href: "https://prettier.io/docs/" }]}
        subTitle="Opinionated code formatter for consistent style"
        description="Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules. It supports many languages, integrates with most editors, and eliminates debates over code style."
        features={[
          "Supports JavaScript, TypeScript, CSS, HTML, Markdown, and more",
          "Integrates with all major editors and CI workflows",
          "Formats code on save for instant feedback",
          "Removes original styling and enforces consistency",
          "Reduces time spent on code reviews and style debates",
          "Minimal configuration and few options",
          "Widely adopted in the JavaScript ecosystem",
        ]}
        issues={[
          "Can't prevent line breaks on larger imports without additional ignore lines (i.e. icon libraries)",
        ]}></Section>

      <Section
        id="eslint"
        className="bg-[radial-gradient(circle_at_center,oklch(0.638_0.1614_280.81)1rem,oklch(0.4379_0.2059_281.84)1rem)]"
        logo={<LogoESLint />}
        title="ESLint"
        links={[{ label: "ESLint", href: "https://eslint.org/" }]}
        docsLinks={[{ label: "ESLint", href: "https://eslint.org/docs/latest/" }]}
        subTitle="Pluggable JavaScript linter"
        description="ESLint is an open source, configurable static analysis tool for JavaScript and JSX. It helps developers find and fix problems in their code, from potential bugs to style issues, by running a set of rules on the codebase. ESLint integrates with most editors and CI pipelines, supports custom rules and plugins, and can automatically fix many issues."
        features={[
          "Statically analyzes code to quickly find problems",
          "Highly configurable with support for custom rules and plugins",
          "Automatically fixes many issues with --fix flag or editor integration",
          "Supports JavaScript, JSX, and extensions via plugins (e.g., TypeScript, React)",
          "Integrates with all major editors and CI workflows",
          "Shareable configurations for enforcing style guides (e.g., Airbnb)",
          "Extensive ecosystem and strong community adoption",
          "Helps maintain code quality and consistency across teams",
        ]}
        issues={[]}></Section>
    </>
  );
}
