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
        subTitle="Automated workflows and CI/CD."
        description="GitHub Actions is a CI/CD platform built into GitHub that lets you automate workflows for building, testing, and deploying your code. Workflows can be triggered automatically by events like pushes, pull requests, releases, or run manually as needed. Defined with simple YAML configuration, jobs can run across different environments and automate a wide range of tasks. GitHub Actions integrates seamlessly with your repositories and is completely free for public repos (with some usage limits), making it easy to set up automated pipelines, enforce code quality, and streamline your development process."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="coderabbit"
        className="bg-[oklch(0.68_0.2153_38.76)]"
        logo={<LogoCodeRabbit />}
        title="CodeRabbit"
        links={[{ label: "CodeRabbit", href: "https://coderabbit.ai/" }]}
        docsLinks={[{ label: "CodeRabbit", href: "https://docs.coderabbit.ai/" }]}
        subTitle="AI-driven code quality, from editor to pull request."
        description="CodeRabbit is an AI-powered code review tool that helps developers catch bugs, improve code quality, and ship faster. It provides automated, context-aware code reviews directly on pull requests in platforms like GitHub and GitLab, offering line-by-line feedback, summaries, and actionable suggestions. With the free Visual Studio Code extension, you can get instant AI reviews and one-click fixes for your code right inside your editor, even before opening a pull request. CodeRabbit supports all major languages, integrates with popular project management tools, and prioritizes security with features like zero data retention and SOC2 Type II compliance."
        features={[""]}
        issues={[]}></Section>
    </>
  );
}
