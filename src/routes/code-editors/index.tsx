import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCursor, LogoPhoenixCode, LogoVisualStudioCode } from "@/_components/Icons";

export const Route = createFileRoute("/code-editors/")({
  component: PageCodeEditors,
  loader: () => ({ title: "Code Editors" }),
});

function PageCodeEditors() {
  return (
    <>
      <Section
        id="visual-studio-code"
        className="bg-[oklch(0.57_0.170273_251.9613)]"
        logo={<LogoVisualStudioCode />}
        title="Visual Studio Code"
        links={[{ label: "Visual Studio Code", href: "https://code.visualstudio.com/" }]}
        docsLinks={[{ label: "Visual Studio Code", href: "https://code.visualstudio.com/docs" }]}
        subTitle="The industry standard."
        description="Powerful and extensible, Visual Studio Code offers a vast marketplace of extensions, robust debugging tools, and an integrated terminal."
        features={[""]}></Section>

      <Section
        id="cursor"
        className="bg-black"
        logo={<LogoCursor />}
        title="Cursor"
        links={[{ label: "Cursor", href: "https://www.cursor.com/" }]}
        docsLinks={[{ label: "Cursor", href: "https://docs.cursor.com/" }]}
        subTitle="AI-loaded fork of Visual Studio Code."
        description="As a fork of Visual Studio Code, Cursor integrates AI features to accelerate development workflows through intelligent code prediction autocomplete, coding agents and chat capabilities."
        features={[""]}></Section>

      <Section
        id="phoenix-code"
        className="bg-[linear-gradient(oklch(0.73_0.1779_55.91),oklch(0.61_0.2381_30.92))]"
        logo={<LogoPhoenixCode />}
        title="Phoenix Code"
        links={[{ label: "Phoenix Code", href: "https://phcode.dev/" }]}
        docsLinks={[{ label: "Phoenix Code", href: "https://docs.phcode.dev/" }]}
        subTitle="Lightweight code editor for beginners."
        description="Simple and fast, Phoenix Code is perfect for beginners learning HTML, CSS & JavaScript, or for users who prefer a minimalist coding environment."
        features={[""]}></Section>
    </>
  );
}
