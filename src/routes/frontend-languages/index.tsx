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
        description="HTML5 is the latest version of HyperText Markup Language, establishing the fundamental structure for web content. It incorporates semantic elements for content organization, native support for multimedia, and introduces new APIs for enhanced web application capabilities."
        features={[""]}></Section>

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
        description="CSS is a stylesheet language for styling web pages. CSS3 enhances this with new modules and features like advanced selectors, improved box model, layout systems (Flexbox, Grid), animations, and transitions for richer UIs."
        features={[""]}></Section>

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
        description="JavaScript is a dynamic, high-level language for client-side interactivity and Document Object Model (DOM) manipulation. ECMAScript 2015 (ES6) and subsequent versions introduced features such as arrow functions, classes, and modules."
        features={[""]}></Section>

      <Section
        id="typescript"
        className="bg-[oklch(0.57_0.1399_253.3)]"
        logo={<LogoTypeScript />}
        title="TypeScript"
        links={[{ label: "TypeScript", href: "https://www.typescriptlang.org/" }]}
        docsLinks={[{ label: "TypeScript", href: "https://www.typescriptlang.org/docs/" }]}
        subTitle="JavaScript with static types and more"
        description="TypeScript enhances JavaScript with optional static typing for compile-time checks. It also provides OOP features (classes, interfaces), advanced types (generics, enums), and modern JS support, improving code quality and maintainability within large projects."
        features={[""]}></Section>
    </>
  );
}
