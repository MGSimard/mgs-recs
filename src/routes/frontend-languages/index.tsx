import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoHTML, LogoCSS, LogoJavaScript, LogoTypeScript } from "@/_components/Icons";

export const Route = createFileRoute("/frontend-languages/")({
  component: PageFrontendLanguages,
  loader: () => ({ title: "Frontend Languages" }),
});

function PageFrontendLanguages() {
  return (
    <>
      <Section
        id="html"
        className="bg-[linear-gradient(to_right,oklch(0.63_0.1913_35.71)50%,oklch(0.67_0.184_41.09)50%)]"
        logo={<LogoHTML />}
        title="HTML5"
        docsLinks={[
          { label: "MDN HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { label: "W3Schools HTML", href: "https://www.w3schools.com/html/" },
        ]}
        subTitle="Hypertext Markup Language"
        description="HTML5 is the latest version of HyperText Markup Language, establishing the fundamental structure for web content. It incorporates semantic elements for content organization, native support for multimedia, and introduces new APIs for enhanced web application capabilities. There's a whole lot to learn here, from basic structure to semantics and accessibility. Even the most seasoned developers still have a lot to learn about what is otherwise seen as one of the easiest languages. Make it semantic, make it accessible, make it efficient, minimize nesting. I better not catch you making a <div> navbar."
        features={[
          "Semantic elements",
          "Native multimedia support",
          "APIs: Canvas, Web Storage, Web Workers, etc.",
          "Forms (Stop spamming useState)",
        ]}
        issues={[
          "Easy to think you know it, but you don't",
          "Accessibility (a11y), Internationalization (i18n), etc, can be strenuous concepts",
        ]}></Section>

      <Section
        id="css"
        className="bg-[oklch(0.44_0.1603_303.37)]"
        logo={<LogoCSS />}
        title="CSS3"
        docsLinks={[
          { label: "MDN CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
          { label: "W3Schools CSS", href: "https://www.w3schools.com/css/" },
        ]}
        subTitle="Cascading Style Sheets"
        description="CSS is a stylesheet language for styling web pages. CSS3 enhances this with new modules and features like advanced selectors, improved box model, layout systems (Flexbox, Grid), animations, and transitions for richer UIs. Generally most popular CSS features are widely supported by major browsers, but it's usually a good idea to verify browser compatibility when not certain. Of all the web languages out there, CSS can easily be the most complex due to the infinitely large nature of design and compatibility across devices, browsers, resolutions, etc. Later down the line you might be interested in learning about facilitators like PostCSS, SASS, Less and Tailwind CSS."
        features={[
          "Advanced selectors (attribute, pseudo-classes, etc.)",
          "Layout systems: Flexbox, Grid",
          "Animations and transitions",
          "Media queries",
          "Custom CSS variables",
          "Shadows, gradients, filters",
        ]}
        issues={[
          "Browser & device compatibility issues",
          "Specificity and cascade complexity",
          "Maintainability in large projects",
        ]}></Section>

      <Section
        id="javascript"
        className="bg-[oklch(0.88_0.1565_100.66)]"
        logo={<LogoJavaScript />}
        title="JavaScript (ES6+)"
        docsLinks={[
          { label: "MDN JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          { label: "W3Schools JavaScript", href: "https://www.w3schools.com/js/" },
        ]}
        subTitle="ECMAScript 6 and beyond"
        description="JavaScript is a dynamic, high-level language for client-side interactivity and Document Object Model (DOM) manipulation. ECMAScript 2015 (ES6) and subsequent versions introduced features such as arrow functions, classes, and modules. Once you get into React, you'll learn about JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's a great way to write code that is both readable and maintainable. After learning TypeScript, you'll move from JSX to TSX."
        features={[
          "Dynamic, interpreted scripting language",
          "First-class functions and closures",
          "Prototype-based object orientation",
          "Event-driven and asynchronous programming",
          "Automatic garbage collection",
          "Rich standard library for DOM and web APIs",
          "Runs in all major browsers and on servers (Node.js)",
          "Can be used for both front and backend development",
        ]}
        issues={["Lacks types (solved by TypeScript)", "Browser differences and quirks"]}></Section>

      <Section
        id="typescript"
        className="bg-[oklch(0.57_0.1399_253.3)]"
        logo={<LogoTypeScript />}
        title="TypeScript"
        links={[{ label: "TypeScript", href: "https://www.typescriptlang.org/" }]}
        docsLinks={[{ label: "TypeScript", href: "https://www.typescriptlang.org/docs/" }]}
        subTitle="JavaScript with static types and more"
        description="TypeScript enhances JavaScript with optional static typing for compile-time checks. It also provides OOP features (classes, interfaces), advanced types (generics, enums), and modern JS support, improving code quality and maintainability within large projects. If you're unsure about learning TypeScript, I recommend creating one vanilla js project which interfaces with janky and bloated APIs like Riot Game's League of Legends APIs. Once you're done with that, migrate it to TypeScript. It's quite the eye opener, and type-safe suggestions through intellisense alone makes it all worth it. Just write good TypeScript, don't spam generics and what not everywhere just because some youtubers wrote <T> every second line. Also; never use 'any' if possible - due diligence is key, set your environment up so that builds are rejected if 'any' is used. As for error catches, use 'unknown' then check if error is of type Error."
        features={[
          "Optional static typing",
          "Interfaces and type aliases",
          "Generics",
          "Enums",
          "Type inference",
          "Advanced type system (union, intersection, mapped types)",
          "Modern JS support (all ES6+ features)",
          "Tooling: type checking, autocompletion, refactoring",
        ]}
        issues={["Misuse of 'any' defeats type safety", "ts-node is a pain (not necessary)"]}></Section>
    </>
  );
}
