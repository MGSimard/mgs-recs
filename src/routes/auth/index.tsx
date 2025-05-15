import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/auth/")({
  component: PageAuth,
  loader: () => ({ title: "Auth" }),
});

function PageAuth() {
  return (
    <>
      <Section title="Better Auth" id="better-auth">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Clerk" id="clerk">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
