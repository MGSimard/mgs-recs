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
        links={[{ label: "Visual Studio Code", href: "https://code.visualstudio.com/" }]}
        docsLinks={[{ label: "Visual Studio Code", href: "https://code.visualstudio.com/docs" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Cursor"
        id="cursor"
        links={[{ label: "Cursor", href: "https://www.cursor.com/" }]}
        docsLinks={[{ label: "Cursor", href: "https://docs.cursor.com/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Phoenix Code"
        id="phoenix-code"
        links={[{ label: "Phoenix Code", href: "https://phcode.dev/" }]}
        docsLinks={[{ label: "Phoenix Code", href: "https://docs.phcode.dev/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
