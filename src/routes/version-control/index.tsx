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
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="github"
        className="bg-[oklch(0.55_0.1474_146.26)]"
        logo={<LogoGitHub />}
        title="GitHub"
        links={[{ label: "GitHub", href: "https://github.com/" }]}
        docsLinks={[{ label: "GitHub", href: "https://docs.github.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
