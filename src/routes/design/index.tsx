import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/design/")({
  component: PageDesign,
  loader: () => ({ title: "Design" }),
});

function PageDesign() {
  return (
    <>
      <Section
        title="Excalidraw"
        id="excalidraw"
        links={[{ label: "Excalidraw", href: "https://excalidraw.com/" }]}
        docsLinks={[{ label: "Excalidraw", href: "https://docs.excalidraw.com/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Figma"
        id="figma"
        links={[{ label: "Figma", href: "https://www.figma.com/" }]}
        docsLinks={[{ label: "Figma", href: "https://help.figma.com/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Canva"
        id="canva"
        links={[{ label: "Canva", href: "https://www.canva.com/" }]}
        docsLinks={[{ label: "Canva", href: "https://www.canva.com/help/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="PureRef"
        id="pureref"
        links={[{ label: "PureRef", href: "https://www.pureref.com/" }]}
        docsLinks={[{ label: "PureRef", href: "https://www.pureref.com/handbook/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
