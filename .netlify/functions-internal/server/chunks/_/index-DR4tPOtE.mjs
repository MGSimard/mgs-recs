import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { ab as LogoVisualStudioCode, S as Section, ac as LogoCursor, ad as LogoPhoenixCode } from './Icons-CuUqCmYQ.mjs';
import '@radix-ui/react-hover-card';
import './ssr.mjs';
import '@tanstack/react-router';
import 'next-themes';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-collapsible';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const SplitComponent = function PageCodeEditors() {
  const $ = c(12);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoVisualStudioCode, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Visual Studio Code",
      href: "https://code.visualstudio.com/"
    }];
    t2 = [{
      label: "Visual Studio Code",
      href: "https://code.visualstudio.com/docs"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "visual-studio-code", className: "bg-[oklch(0.57_0.170273_251.9613)]", logo: t0, title: "Visual Studio Code", links: t1, docsLinks: t2, subTitle: "The industry standard.", description: "Visual Studio Code stands as a powerful, extensible editor that combines professional-grade features with modern AI capabilities. At its core, you'll find robust debugging tools, an integrated terminal, and a vast marketplace of extensions. The seamless GitHub Copilot integration brings AI-powered assistance directly into your workflow through intelligent code suggestions and completions. True to its open source roots, VS Code has announced plans to open source their Copilot Chat extension and integrate AI components into the core editor. While the learning curve might be steeper compared to lightweight editors like Phoenix Code, the investment in learning VS Code pays off immensely. The ecosystem offers essential tools like Source Control integration, extensive debugging features, and a rich extension marketplace - all customizable to your workflow.", features: ["Industry-leading IntelliSense", "Native GitHub Copilot integration", "Extensive extension marketplace", "Built-in Git & terminal tools", "Remote development & containers", "Multi-language support & debugging", "Real-time collaboration via Live Share", "Open source AI development"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoCursor, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Cursor",
      href: "https://www.cursor.com/"
    }];
    t6 = [{
      label: "Cursor",
      href: "https://docs.cursor.com/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "cursor", className: "bg-black", logo: t4, title: "Cursor", links: t5, docsLinks: t6, subTitle: "AI-loaded fork of Visual Studio Code.", description: "A fork of Visual Studio Code that was among the first to offer advanced AI integration in code editors. Cursor enhances development workflows through intelligent code predictions, chat capabilities, and configurable AI behaviors. While it currently offers a generous free tier and features like tab autocomplete, its unique advantages may shift as Microsoft continues to strengthen VS Code's native AI capabilities through GitHub Copilot. Cursor currently provides additional AI features beyond Copilot's functionality, particularly in areas of natural language interaction and customizable AI behaviors.", features: ["VS Code extensions compatibility", "GPT, Claude and more coding agents", "Smart code completion, generation and chat", "In-line code generation diffs", "Configurable .cursor rules"], issues: ["Tab autocomplete suggestions can sometimes be intrusive"] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoPhoenixCode, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Phoenix Code",
      href: "https://phcode.dev/"
    }];
    t10 = [{
      label: "Phoenix Code",
      href: "https://docs.phcode.dev/"
    }];
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t7,
      /* @__PURE__ */ jsx(Section, { id: "phoenix-code", className: "bg-[linear-gradient(oklch(0.73_0.1779_55.91),oklch(0.61_0.2381_30.92))]", logo: t8, title: "Phoenix Code", links: t9, docsLinks: t10, subTitle: "Lightweight code editor for web development.", description: "Built by the Adobe Brackets team, Phoenix Code is the next generation of the beloved Brackets editor, now reimagined as a modern, open source web development tool. Available natively for Windows, macOS, and Linux, plus a full-featured web version that runs in any browser, making it truly accessible everywhere. It combines simplicity with powerful features, offering real-time live preview with custom server support for PHP and frameworks, integrated HTML and JavaScript validation through ESLint, and comprehensive Git integration. The editor includes advanced features like multi-cursor editing, quick CSS editing with inline preview, and customizable themes. Its extension system supports community-created tools like Minimap for navigation and FuncDocr for documentation. With code quality tools including HTML validation, beautification, and syntax highlighting, it provides a complete environment for web development while maintaining a lightweight footprint. The team has announced AI features coming in May 2025.", features: ["Multi-cursor & quick CSS editing", "Advanced live preview & PHP support", "Code beautification & themes", "HTML & JavaScript validation", "Git integration & version control", "Community extensions support", "AI features (coming May 2025)"], issues: ["Not as advanced as the industry standards."] })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
};

export { SplitComponent as component };
//# sourceMappingURL=index-DR4tPOtE.mjs.map
