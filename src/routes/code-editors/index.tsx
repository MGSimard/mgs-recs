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
        description="Powerful and extensible, Visual Studio Code offers a vast marketplace of extensions, robust debugging tools, and an integrated terminal. If you're transitioning from Phoenix Code (or other lightweight code editors), while it's more complex, it is a much more powerful editor overall. I do recommend getting well acquainted with the VSCode ecosystem before moving onto an AI-powered editor like Cursor. Make sure you check out the various functionalities and extensions, from Source Control to Prettier and Postman."
        features={["Source Control", "Integrated terminal", "Extensions", "Support for all languages"]}
        issues={["N/A"]}></Section>

      <Section
        id="cursor"
        className="bg-black"
        logo={<LogoCursor />}
        title="Cursor"
        links={[{ label: "Cursor", href: "https://www.cursor.com/" }]}
        docsLinks={[{ label: "Cursor", href: "https://docs.cursor.com/" }]}
        subTitle="AI-loaded fork of Visual Studio Code."
        description="As a fork of Visual Studio Code, Cursor integrates AI features to accelerate development workflows through intelligent code autocomplete predictions, coding agents and chat capabilities. It offers a fairly generous free tier, if you aim to be a serious developer in any capacity, you should definitely give it a shot over standard VSCode. The tab code autocomplete alone is a huge game changer for memory and productivity. Whatever happens; always ask questions!"
        features={[
          "Everything VSCode has",
          "Free trial tier",
          "GPT & Claude coding agents",
          "Tab autocomplete",
          "AI chat panel",
        ]}
        issues={["Tab autocomplete suggestions can sometimes be intrusive"]}></Section>

      <Section
        id="phoenix-code"
        className="bg-[linear-gradient(oklch(0.73_0.1779_55.91),oklch(0.61_0.2381_30.92))]"
        logo={<LogoPhoenixCode />}
        title="Phoenix Code"
        links={[{ label: "Phoenix Code", href: "https://phcode.dev/" }]}
        docsLinks={[{ label: "Phoenix Code", href: "https://docs.phcode.dev/" }]}
        subTitle="Lightweight code editor for beginners."
        description="Simple and fast, Phoenix Code is perfect for beginners learning HTML, CSS & JavaScript, or for users who prefer a minimalist coding environment. Just hop in, write some raw HTML, CSS & JavaScript, start the Live Preview and you're good to go. Works well enough until you start getting into React."
        features={["Good for beginners", "Live preview"]}
        issues={["Lacks advanced features"]}></Section>
    </>
  );
}
