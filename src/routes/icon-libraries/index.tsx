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
        id="lucide"
        className="bg-[oklch(0.69_0.1776_22.95)]"
        logo={<LogoLucide />}
        title="Lucide"
        links={[{ label: "Lucide", href: "https://lucide.dev/" }]}
        docsLinks={[{ label: "Lucide", href: "https://lucide.dev/guide/" }]}
        subTitle="Standardized, optimized, community-designed icons."
        description="An open source icon library offering 1000+ SVG icons with multiple variants and states. Lucide is community-driven, follows strict design standards, and supports both manual copying of single icons and usage via official packages for every major frontend framework. Features include code optimization for minimal bundle size, accessibility support, and a responsive community for icon requests."
        features={[]}></Section>

      <Section
        id="heroicons"
        className="bg-[oklch(0.61_0.2189_292.72)]"
        logo={<LogoHeroicons />}
        title="Heroicons"
        links={[{ label: "Heroicons", href: "https://heroicons.com/" }]}
        docsLinks={[{ label: "Heroicons", href: "https://github.com/tailwindlabs/heroicons/" }]}
        subTitle="By the makers of Tailwind CSS."
        description="A free, MIT-licensed set of 300+ hand-crafted SVG icons for UI development, made by the makers of Tailwind CSS. Available as basic SVGs and first-party React & Vue libraries, designed for easy styling and seamless integration."
        features={[]}></Section>

      <Section
        id="svgl"
        className="bg-[radial-gradient(circle_at_top,oklch(0.38_0_0),oklch(0.25_0_0))]"
        logo={<LogoSvgl />}
        title="svgl"
        links={[{ label: "svgl", href: "https://svgl.app/" }]}
        docsLinks={[{ label: "svgl", href: "https://svgl.app/api/" }]}
        subTitle="Open source, community-driven company logo directory."
        description="An open source directory of company logos. Contains a sizeable amount of logos, and is updated regularly. Users can also submit logos to the directory for approval."
        features={[]}></Section>
    </>
  );
}
