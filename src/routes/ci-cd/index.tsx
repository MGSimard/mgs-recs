import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/ci-cd/")({
  component: PageCICD,
  loader: () => ({ title: "CI/CD" }),
});

function PageCICD() {
  return (
    <>
      <Section title="GitHub Actions" id="github-actions">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="CodeRabbit" id="coderabbit">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
