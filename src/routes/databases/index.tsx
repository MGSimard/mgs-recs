import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/databases/")({
  component: PageDatabases,
  loader: () => ({ title: "Databases" }),
});

function PageDatabases() {
  return (
    <>
      <Section title="PostgreSQL" id="postgresql">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="MySQL" id="mysql">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Redis" id="redis">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Dexie.js" id="dexiejs">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="localStorage" id="localstorage">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
