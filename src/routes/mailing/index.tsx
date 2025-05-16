import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/mailing/")({
  component: PageMailing,
  loader: () => ({ title: "Mailing" }),
});

function PageMailing() {
  return (
    <>
      <Section
        title="Resend"
        id="resend"
        links={[{ label: "Resend", href: "https://resend.com/" }]}
        docsLinks={[{ label: "Resend", href: "https://resend.com/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
