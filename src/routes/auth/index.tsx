import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/auth/")({
  component: PageAuth,
  loader: () => ({ title: "Auth" }),
});

function PageAuth() {
  return (
    <>
      <Section
        title="Better Auth"
        id="better-auth"
        links={[{ label: "Better Auth", href: "https://www.better-auth.com/" }]}
        docsLinks={[{ label: "Better Auth", href: "https://better-auth.com/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Clerk"
        id="clerk"
        links={[{ label: "Clerk", href: "https://clerk.com/" }]}
        docsLinks={[{ label: "Clerk", href: "https://clerk.com/docs" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
