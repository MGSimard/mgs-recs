import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/ui-libraries/")({
  component: PageUILibraries,
  loader: async () => ({ title: "UI Libraries" }),
});

function PageUILibraries() {
  return (
    <>
      <Section
        title="shadcn/ui"
        id="shadcn-ui"
        links={[{ label: "shadcn/ui", href: "https://ui.shadcn.com/" }]}
        docsLinks={[{ label: "shadcn/ui", href: "https://ui.shadcn.com/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Ant Design"
        id="ant-design"
        links={[{ label: "Ant Design", href: "https://ant.design/" }]}
        docsLinks={[{ label: "Ant Design", href: "https://ant.design/docs/react/introduce/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Mantine"
        id="mantine"
        links={[{ label: "Mantine", href: "https://mantine.dev/" }]}
        docsLinks={[{ label: "Mantine", href: "https://mantine.dev/getting-started/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
