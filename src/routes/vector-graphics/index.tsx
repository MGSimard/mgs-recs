import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/vector-graphics/")({
  component: PageVectorGraphics,
  loader: () => ({ title: "Vector Graphics" }),
});

function PageVectorGraphics() {
  return (
    <>
      <Section title="Adobe Illustrator" id="adobe-illustrator">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Inkscape" id="inkscape">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
