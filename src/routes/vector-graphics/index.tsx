import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoAdobeIllustrator, LogoInkscape } from "@/_components/Icons";

export const Route = createFileRoute("/vector-graphics/")({
  component: PageVectorGraphics,
  loader: () => ({ title: "Vector Graphics" }),
});

function PageVectorGraphics() {
  return (
    <>
      <Section
        id="adobe-illustrator"
        className="bg-[oklch(0.2_0.0827_29.23)]"
        logo={<LogoAdobeIllustrator />}
        title="Adobe Illustrator"
        links={[{ label: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html" }]}
        docsLinks={[
          {
            label: "Adobe Illustrator",
            href: "https://helpx.adobe.com/illustrator/user-guide.html",
          },
        ]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="inkscape"
        className="bg-[conic-gradient(from_90deg_at_50%_-2rem,oklch(0.5_0.0079_286.11)_0deg,oklch(0.08_0.0325_276.31)_90deg,oklch(0.52_0.0389_272.26)_180deg)]"
        logo={<LogoInkscape />}
        title="Inkscape"
        links={[{ label: "Inkscape", href: "https://inkscape.org/" }]}
        docsLinks={[{ label: "Inkscape", href: "https://inkscape-manuals.readthedocs.io/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>
    </>
  );
}

/*         className="bg-[linear-gradient(to_right,oklch(0.5_0.0079_286.11),oklch(0.08_0.0325_276.31),oklch(0.52_0.0389_272.26))]"
 */
