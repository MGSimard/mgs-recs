import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/ci-cd/")({
  component: PageCICD,
  loader: () => ({ title: "CI/CD" }),
});

function PageCICD() {
  return (
    <>
      <Section
        title="GitHub Actions"
        id="github-actions"
        links={[{ label: "GitHub Actions", href: "https://github.com/features/actions" }]}
        docsLinks={[{ label: "GitHub Actions", href: "https://docs.github.com/en/actions" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="CodeRabbit"
        id="coderabbit"
        links={[{ label: "CodeRabbit", href: "https://coderabbit.ai/" }]}
        docsLinks={[{ label: "CodeRabbit", href: "https://docs.coderabbit.ai/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
