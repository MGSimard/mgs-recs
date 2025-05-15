import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/frontend-languages/")({
  component: PageFrontendLanguages,
  loader: () => ({ title: "Frontend Languages" }),
});

function PageFrontendLanguages() {
  return (
    <>
      <Section title="HTML5" id="html">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="CSS3" id="css">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="JavaScript (ES6+)" id="javascript">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="TypeScript" id="typescript">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
