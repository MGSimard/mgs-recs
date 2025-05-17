import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCanva, LogoExcalidraw, LogoFigma, LogoPureRef } from "@/_components/Icons";

export const Route = createFileRoute("/design/")({
  component: PageDesign,
  loader: () => ({ title: "Design" }),
});

function PageDesign() {
  return (
    <>
      <Section
        id="excalidraw"
        className="bg-[oklch(0.57_0.1752_280.83)]"
        logo={<LogoExcalidraw />}
        title="Excalidraw"
        links={[{ label: "Excalidraw", href: "https://excalidraw.com/" }]}
        docsLinks={[{ label: "Excalidraw", href: "https://docs.excalidraw.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="figma"
        className="bg-[linear-gradient(135deg,oklch(0.65_0.234_26.69),oklch(0.71_0.1863_41.33),oklch(0.59_0.2445_291.73),oklch(0.73_0.158874_236.3575),oklch(0.74_0.1823_152.99))]"
        logo={<LogoFigma />}
        title="Figma"
        links={[{ label: "Figma", href: "https://www.figma.com/" }]}
        docsLinks={[{ label: "Figma", href: "https://help.figma.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="canva"
        className="bg-[linear-gradient(135deg,oklch(0.75_0.126756_200.0078),oklch(0.51_0.2695_280.38),oklch(0.52_0.2552_295.58))]"
        logo={<LogoCanva />}
        title="Canva"
        links={[{ label: "Canva", href: "https://www.canva.com/" }]}
        docsLinks={[{ label: "Canva", href: "https://www.canva.com/help/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="pureref"
        className="bg-[oklch(0.24_0_0)]"
        logo={<LogoPureRef />}
        title="PureRef"
        links={[{ label: "PureRef", href: "https://www.pureref.com/" }]}
        docsLinks={[{ label: "PureRef", href: "https://www.pureref.com/handbook/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
