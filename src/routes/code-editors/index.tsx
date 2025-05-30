import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCursor, LogoPhoenixCode, LogoVisualStudioCode } from "@/_components/Icons";

export const Route = createFileRoute("/code-editors/")({
  component: PageCodeEditors,
  loader: () => ({ title: "Code Editors" }),
  head: () => ({ meta: [{ title: "MGS RECS - Code Editors" }] }),
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
        description="Visual Studio Code stands as a powerful, extensible editor that combines professional-grade features with modern AI capabilities. At its core, you'll find robust debugging tools, an integrated terminal, and a vast marketplace of extensions. The seamless GitHub Copilot integration brings AI-powered assistance directly into your workflow through intelligent code suggestions and completions. True to its open source roots, VS Code has announced plans to open source their Copilot Chat extension and integrate AI components into the core editor. While the learning curve might be steeper compared to lightweight editors like Phoenix Code, the investment in learning VS Code pays off immensely. The ecosystem offers essential tools like Source Control integration, extensive debugging features, and a rich extension marketplace - all customizable to your workflow."
        features={[
          "Industry-leading IntelliSense",
          "Native GitHub Copilot integration",
          "Extensive extension marketplace",
          "Built-in Git & terminal tools",
          "Remote development & containers",
          "Multi-language support & debugging",
          "Real-time collaboration via Live Share",
          "Open source AI development",
        ]}
        issues={[]}></Section>

      <Section
        id="cursor"
        className="bg-black"
        logo={<LogoCursor />}
        title="Cursor"
        links={[{ label: "Cursor", href: "https://www.cursor.com/" }]}
        docsLinks={[{ label: "Cursor", href: "https://docs.cursor.com/" }]}
        subTitle="AI-loaded fork of Visual Studio Code."
        description="A fork of Visual Studio Code that was among the first to offer advanced AI integration in code editors. Cursor enhances development workflows through intelligent code predictions, chat capabilities, and configurable AI behaviors. While it currently offers a generous free tier and features like tab autocomplete, its unique advantages may shift as Microsoft continues to strengthen VS Code's native AI capabilities through GitHub Copilot. Cursor currently provides additional AI features beyond Copilot's functionality, particularly in areas of natural language interaction and customizable AI behaviors."
        features={[
          "VS Code extensions compatibility",
          "GPT, Claude and more coding agents",
          "Smart code completion, generation and chat",
          "In-line code generation diffs",
          "Configurable .cursor rules",
        ]}
        issues={["Tab autocomplete suggestions can sometimes be intrusive"]}></Section>

      <Section
        id="phoenix-code"
        className="bg-[linear-gradient(oklch(0.73_0.1779_55.91),oklch(0.61_0.2381_30.92))]"
        logo={<LogoPhoenixCode />}
        title="Phoenix Code"
        links={[{ label: "Phoenix Code", href: "https://phcode.dev/" }]}
        docsLinks={[{ label: "Phoenix Code", href: "https://docs.phcode.dev/" }]}
        subTitle="Lightweight code editor for web development."
        description="Built by the Adobe Brackets team, Phoenix Code is the next generation of the beloved Brackets editor, now reimagined as a modern, open source web development tool. Available natively for Windows, macOS, and Linux, plus a full-featured web version that runs in any browser, making it truly accessible everywhere. It combines simplicity with powerful features, offering real-time live preview with custom server support for PHP and frameworks, integrated HTML and JavaScript validation through ESLint, and comprehensive Git integration. The editor includes advanced features like multi-cursor editing, quick CSS editing with inline preview, and customizable themes. Its extension system supports community-created tools like Minimap for navigation and FuncDocr for documentation. With code quality tools including HTML validation, beautification, and syntax highlighting, it provides a complete environment for web development while maintaining a lightweight footprint. The team has announced AI features coming in May 2025."
        features={[
          "Multi-cursor & quick CSS editing",
          "Advanced live preview & PHP support",
          "Code beautification & themes",
          "HTML & JavaScript validation",
          "Git integration & version control",
          "Community extensions support",
          "AI features (coming May 2025)",
        ]}
        issues={["Not as advanced as the industry standards."]}></Section>
    </>
  );
}
