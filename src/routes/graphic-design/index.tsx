import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/graphic-design/")({
  component: PageGraphicDesign,
  loader: () => ({ title: "Graphic Design" }),
});

function PageGraphicDesign() {
  return (
    <>
      <Section title="GIMP" id="gimp">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Adobe Photoshop" id="adobe-photoshop">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
