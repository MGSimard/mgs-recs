import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/learning/")({
  component: PageLearning,
  loader: () => ({ title: "Learning" }),
});

function PageLearning() {
  return (
    <>
      <Section
        title="freeCodeCamp"
        id="freecodecamp"
        links={[{ label: "freeCodeCamp", href: "https://www.freecodecamp.org/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Codevolution"
        id="codevolution"
        links={[{ label: "Codevolution (Youtube)", href: "https://www.youtube.com/codevolution/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Theo"
        id="theo"
        links={[{ label: "t3dotgg (Youtube)", href: "https://www.youtube.com/@t3dotgg" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Jack Herrington"
        id="jack-herrington"
        links={[{ label: "Jack Herrington (Youtube)", href: "https://www.youtube.com/@jherr/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
