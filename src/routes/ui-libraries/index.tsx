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
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="ant-design"
        className="bg-[conic-gradient(from_45deg_at_center,oklch(0.74_0.1514_30.35)_0deg,oklch(0.66_0.2083_19.36)_45deg,oklch(0.62_0.2403_25.85)_90deg,transparent_90deg),linear-gradient(oklch(0.78_0.143253_228.8872),oklch(0.62_0.1683_258.71))]"
        logo={<LogoAntDesign />}
        title="Ant Design"
        links={[{ label: "Ant Design", href: "https://ant.design/" }]}
        docsLinks={[{ label: "Ant Design", href: "https://ant.design/docs/react/introduce/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="mantine"
        className="bg-[oklch(0.67_0.1575_248.32)]"
        logo={<LogoMantine />}
        title="Mantine"
        links={[{ label: "Mantine", href: "https://mantine.dev/" }]}
        docsLinks={[{ label: "Mantine", href: "https://mantine.dev/getting-started/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>
    </>
  );
}
