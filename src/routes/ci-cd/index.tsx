import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCodeRabbit, LogoGitHubActions } from "@/_components/Icons";

export const Route = createFileRoute("/ci-cd/")({
  component: PageCICD,
  loader: () => ({ title: "CI/CD" }),
});

function PageCICD() {
  return (
    <>
      <Section
        id="github-actions"
        className="bg-[oklch(0.55_0.1474_146.26)]"
        logo={<LogoGitHubActions />}
        title="GitHub Actions"
        links={[{ label: "GitHub Actions", href: "https://github.com/features/actions" }]}
        docsLinks={[{ label: "GitHub Actions", href: "https://docs.github.com/en/actions" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="coderabbit"
        className="bg-[oklch(0.68_0.2153_38.76)]"
        logo={<LogoCodeRabbit />}
        title="CodeRabbit"
        links={[{ label: "CodeRabbit", href: "https://coderabbit.ai/" }]}
        docsLinks={[{ label: "CodeRabbit", href: "https://docs.coderabbit.ai/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
