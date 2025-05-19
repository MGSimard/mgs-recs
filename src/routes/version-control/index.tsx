import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoGit, LogoGitHub } from "@/_components/Icons";

export const Route = createFileRoute("/version-control/")({
  component: PageVersionControl,
  loader: () => ({ title: "Version Control" }),
});

function PageVersionControl() {
  return (
    <>
      <Section
        id="git"
        className="bg-[oklch(0.6154_0.1859_31.32)]"
        logo={<LogoGit />}
        title="Git"
        links={[{ label: "Git", href: "https://git-scm.com/" }]}
        docsLinks={[{ label: "Git", href: "https://git-scm.com/doc/" }]}
        subTitle="The foundation of modern code management."
        description="Git is a distributed version control system that tracks changes in source code, enabling multiple developers to collaborate efficiently and safely. It is the backbone of modern software development workflows, allowing teams to manage code history, experiment with new features, and coordinate contributions across projects of any size. Mastery of Git is essential for effective collaboration and maintaining code quality in both open source and commercial projects. If you are moving beyond the absolute basics of web development, learning Git and version control should be a top priority, as it is a fundamental skill for any developer working on real-world projects."
        features={[""]}></Section>

      <Section
        id="github"
        className="bg-[oklch(0.55_0.1474_146.26)]"
        logo={<LogoGitHub />}
        title="GitHub"
        links={[{ label: "GitHub", href: "https://github.com/" }]}
        docsLinks={[{ label: "GitHub", href: "https://docs.github.com/" }]}
        subTitle="Central hub for code and collaboration."
        description="GitHub is a web-based platform for hosting and managing Git repositories, widely used for both open source and private projects. It provides tools for version control, collaboration, code review, and issue tracking, making it easy for individuals and teams to contribute, discuss, and manage software development. With features like pull requests, actions for CI/CD, and extensive integrations, GitHub has become the central hub for modern software development workflows."
        features={[""]}></Section>
    </>
  );
}
