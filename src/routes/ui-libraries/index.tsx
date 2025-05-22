import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoAntDesign, LogoMantine, LogoShadcn } from "@/_components/Icons";

export const Route = createFileRoute("/ui-libraries/")({
  component: PageUILibraries,
  loader: async () => ({ title: "UI Libraries" }),
});

function PageUILibraries() {
  return (
    <>
      <Section
        id="shadcn-ui"
        className="bg-black"
        logo={<LogoShadcn />}
        title="shadcn/ui"
        links={[{ label: "shadcn/ui", href: "https://ui.shadcn.com/" }]}
        docsLinks={[{ label: "shadcn/ui", href: "https://ui.shadcn.com/docs/" }]}
        subTitle="Radix-based, built with Tailwind CSS."
        description="shadcn/ui is for developers who want full control over UI design and accessibility. Built on Radix UI primitives, it provides unstyled, accessible React components meant to be customized with Tailwind CSS. Customization is encouraged, and you may need to adjust semantic tags for best accessibility. The library is fully compatible with Tailwind CSS v4 and React Server Components, making it ideal for modern, flexible React projects."
        features={[
          "Open Code",
          "Composable Components",
          "Code Distribution System",
          "Beautiful Defaults",
          "Framework Agnostic",
          "Easy Theming",
          "React 19 compatible",
          "SSR support",
          "Next.js support",
        ]}
        issues={[
          "Components may sometimes be over-nested",
          "Requires semantic adjustments",
          "Reliant on Tailwind CSS",
        ]}></Section>

      <Section
        id="mantine"
        className="bg-[oklch(0.67_0.1575_248.32)]"
        logo={<LogoMantine />}
        title="Mantine"
        links={[{ label: "Mantine", href: "https://mantine.dev/" }]}
        docsLinks={[{ label: "Mantine", href: "https://mantine.dev/getting-started/" }]}
        subTitle="UI components, hooks, and regular CSS."
        description="Mantine is for developers who want flexibility, performance, and a modern React experience. It offers customizable components, powerful hooks, and uses regular CSS/PostCSS for styling. As a middle-ground between Ant Design's opinionated system and shadcn/ui's headless approach, Mantine balances ready-to-use, themeable components with deep customization. Its rich hooks and utilities make it a versatile choice for teams seeking both productivity and control."
        features={[
          "Rich component library",
          "Customizable themes",
          "Powerful hooks",
          "Regular CSS/PostCSS support",
          "SSR and Next.js support",
          "Accessibility focused",
          "Responsive design utilities",
          "Dark mode built-in",
        ]}
        issues={["Implementation & customization is less intuitive"]}></Section>

      <Section
        id="ant-design"
        className="bg-[conic-gradient(from_45deg_at_center,oklch(0.74_0.1514_30.35)_0deg,oklch(0.66_0.2083_19.36)_45deg,oklch(0.62_0.2403_25.85)_90deg,transparent_90deg),linear-gradient(oklch(0.78_0.143253_228.8872),oklch(0.62_0.1683_258.71))]"
        logo={<LogoAntDesign />}
        title="Ant Design"
        links={[{ label: "Ant Design", href: "https://ant.design/" }]}
        docsLinks={[{ label: "Ant Design", href: "https://ant.design/docs/react/introduce/" }]}
        subTitle="Enterprise React UI framework."
        description="Ant Design is designed for enterprise-level applications, targeting teams and organizations that require a robust, scalable, and consistent design system. It stands out with its comprehensive suite of high-quality, polished React components, a strong design language inspired by Ant Financial, and extensive internationalization support. Ant Design 5.0 introduced a new CSS-in-JS theming system, making theme customization more dynamic and flexible than before, addressing long-standing complaints about limited theming. However, theming and deep customization are still less open than in some other libraries, as Ant Design prioritizes a unified, opinionated design system across applications."
        features={[
          "Comprehensive component library",
          "Enterprise-focused design system",
          "Flexible theme customization",
          "Accessibility & internationalization",
          "Rich ecosystem and extensions",
          "Cross-framework",
          "First-class Figma support",
        ]}
        issues={[
          "Undocumented breaking changes",
          "Less understood by AI",
          "Design can be lacking",
          "Poor documentation",
          "Extreme over-nesting in some cases",
        ]}></Section>
    </>
  );
}
