import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoHeroicons, LogoLucide, LogoSvgl } from "@/_components/Icons";

export const Route = createFileRoute("/icon-libraries/")({
  component: PageIconLibraries,
  loader: () => ({ title: "Icon Libraries" }),
});

function PageIconLibraries() {
  return (
    <>
      <Section
        id="heroicons"
        className="bg-[oklch(0.61_0.2189_292.72)]"
        logo={<LogoHeroicons />}
        title="Heroicons"
        links={[{ label: "Heroicons", href: "https://heroicons.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="lucide"
        className="bg-[oklch(0.69_0.1776_22.95)]"
        logo={<LogoLucide />}
        title="Lucide"
        links={[{ label: "Lucide", href: "https://lucide.dev/" }]}
        docsLinks={[{ label: "Lucide", href: "https://lucide.dev/guide/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="svgl"
        className="bg-[radial-gradient(circle_at_top,oklch(0.38_0_0),oklch(0.25_0_0))]"
        logo={<LogoSvgl />}
        title="svgl"
        links={[{ label: "svgl", href: "https://svgl.app/" }]}
        docsLinks={[{ label: "svgl", href: "https://svgl.app/api/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>
    </>
  );
}
