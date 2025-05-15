import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/learning/")({
  component: PageLearning,
  loader: () => ({ title: "Learning" }),
});

function PageLearning() {
  return (
    <>
      <Section title="freeCodeCamp" id="freecodecamp">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Codevolution" id="codevolution">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Theo" id="theo">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Jack Herrington" id="jack-herrington">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
