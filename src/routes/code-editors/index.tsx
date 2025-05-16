import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/code-editors/")({
  component: PageCodeEditors,
  loader: () => ({ title: "Code Editors" }),
});

function PageCodeEditors() {
  return (
    <>
      <Section
        title="Visual Studio Code"
        id="visual-studio-code"
        link="https://code.visualstudio.com/"
        docsLink="https://code.visualstudio.com/docs">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Cursor" id="cursor">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Phoenix Code" id="phoenix-code">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
