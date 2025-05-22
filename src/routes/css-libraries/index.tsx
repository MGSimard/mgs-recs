import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoPostCSS, LogoTailwindCSS } from "@/_components/Icons";

export const Route = createFileRoute("/css-libraries/")({
  component: PageCSSLibraries,
  loader: () => ({ title: "CSS Libraries" }),
});

function PageCSSLibraries() {
  return (
    <>
      <Section
        id="tailwind-css"
        className="bg-[oklch(0.7484_0.1551_233.2517)]"
        logo={<LogoTailwindCSS />}
        title="Tailwind CSS"
        links={[{ label: "Tailwind CSS", href: "https://tailwindcss.com/" }]}
        docsLinks={[{ label: "Tailwind CSS", href: "https://tailwindcss.com/docs/" }]}
        subTitle="Utility-first, responsive, and customizable"
        description="A modern utility-first CSS framework that revolutionizes web development by providing atomic classes for rapid UI construction. Tailwind CSS v4.0 introduced a CSS-first approach, allowing seamless integration of custom CSS alongside utility classes. Features include responsive design, dark mode support, CSS variables, wide-gamut P3 colors, container queries, and logical properties for RTL support. The framework optimizes for production by automatically removing unused CSS, typically resulting in bundles under 10kB. While not covering every CSS feature, Tailwind's design system can be easily extended with custom CSS when needed."
        features={[
          "Utility-first atomic classes",
          "CSS-first: seamless custom CSS integration (v4)",
          "Responsive design utilities",
          "Dark mode support",
          "Wide-gamut P3 color palette",
          "CSS variables and theming",
          "Container queries",
          "Logical properties for RTL/LTR",
          "Automatic unused CSS purging",
        ]}
        issues={["Results in polluted HTML", "Results in non-contextual HTML identifiers"]}></Section>

      <Section
        id="postcss"
        className="bg-[oklch(0.5924_0.2056_34.55)]"
        logo={<LogoPostCSS />}
        title="PostCSS"
        links={[{ label: "PostCSS", href: "https://postcss.org/" }]}
        docsLinks={[{ label: "PostCSS", href: "https://postcss.org/docs/" }]}
        subTitle="Transform CSS with JavaScript plugins"
        description="PostCSS is a powerful tool for transforming CSS with JavaScript, enabling a vast ecosystem of plugins to automate, enhance, and future-proof your stylesheets. Widely adopted by industry leaders, it supports features like autoprefixing, modern CSS polyfills, linting, and modular CSS. PostCSS is highly extensible, letting you customize your CSS workflow to fit any project, from simple enhancements to complex build pipelines."
        features={[
          "Plugin ecosystem",
          "Autoprefixing",
          "Modern CSS polyfills",
          "CSS linting",
          "Custom transformations",
          "Modular CSS support",
          "CSS minification",
          "Build tool integration",
          "Source maps",
        ]}
        issues={[]}></Section>
    </>
  );
}
