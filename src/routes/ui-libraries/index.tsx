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
        subTitle="Radix-based, Tailwind-friendly."
        description="shadcn/ui targets developers who want full control over their UI design while maintaining accessibility and composability. Built on top of Radix UI primitives, it provides unstyled, accessible React components that are easy to customize with Tailwind CSS. What sets shadcn/ui apart is its focus on headless components, allowing you to bring your own styles and design system, and its commitment to accessibility and developer ergonomics. It is fully compatible with the latest Tailwind CSS v4 and supports React Server Components, making it a strong choice for projects using the latest React and Tailwind tooling."
        features={[]}></Section>

      <Section
        id="mantine"
        className="bg-[oklch(0.67_0.1575_248.32)]"
        logo={<LogoMantine />}
        title="Mantine"
        links={[{ label: "Mantine", href: "https://mantine.dev/" }]}
        docsLinks={[{ label: "Mantine", href: "https://mantine.dev/getting-started/" }]}
        subTitle="UI components, hooks, and regular CSS."
        description="Mantine is for developers who want flexibility, performance, and a modern React experience. It offers customizable components, powerful hooks, and uses regular CSS/PostCSS for styling. As a middle-ground between Ant Design's opinionated system and shadcn/ui's headless approach, Mantine balances ready-to-use, themeable components with deep customization. Its rich hooks and utilities make it a versatile choice for teams seeking both productivity and control."
        features={[]}></Section>

      <Section
        id="ant-design"
        className="bg-[conic-gradient(from_45deg_at_center,oklch(0.74_0.1514_30.35)_0deg,oklch(0.66_0.2083_19.36)_45deg,oklch(0.62_0.2403_25.85)_90deg,transparent_90deg),linear-gradient(oklch(0.78_0.143253_228.8872),oklch(0.62_0.1683_258.71))]"
        logo={<LogoAntDesign />}
        title="Ant Design"
        links={[{ label: "Ant Design", href: "https://ant.design/" }]}
        docsLinks={[{ label: "Ant Design", href: "https://ant.design/docs/react/introduce/" }]}
        subTitle="Enterprise React UI framework."
        description="Ant Design is designed for enterprise-level applications, targeting teams and organizations that require a robust, scalable, and consistent design system. It stands out with its comprehensive suite of high-quality, polished React components, a strong design language inspired by Ant Financial, and extensive internationalization support. Ant Design's ecosystem includes design resources, icons, and tools for rapid development, making it a go-to choice for large-scale business apps that demand reliability, consistency, and a professional look and feel. While it offers some theming options, Ant Design is less focused on deep customization and more on enforcing a unified, opinionated design system across applications."
        features={[]}></Section>
    </>
  );
}
