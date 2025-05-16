import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/vector-graphics/")({
  component: PageVectorGraphics,
  loader: () => ({ title: "Vector Graphics" }),
});

function PageVectorGraphics() {
  return (
    <>
      <Section
        title="Adobe Illustrator"
        id="adobe-illustrator"
        links={[{ label: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html" }]}
        docsLinks={[
          {
            label: "Adobe Illustrator",
            href: "https://helpx.adobe.com/illustrator/user-guide.html",
          },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Inkscape"
        id="inkscape"
        links={[{ label: "Inkscape", href: "https://inkscape.org/" }]}
        docsLinks={[{ label: "Inkscape", href: "https://inkscape-manuals.readthedocs.io/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
