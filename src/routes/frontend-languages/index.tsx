import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { IconHTML, IconCSS, IconJavaScript, IconTypeScript } from "@/_components/Icons";

export const Route = createFileRoute("/frontend-languages/")({
  component: PageFrontendLanguages,
  loader: () => ({ title: "Frontend Languages" }),
});

function PageFrontendLanguages() {
  return (
    <>
      <Section
        id="html"
        icon={<IconHTML />}
        title="HTML5"
        subTitle="Hypertext Markup Language"
        description="HTML5 is the latest version of HyperText Markup Language, establishing the fundamental structure for web content. It incorporates semantic elements for content organization, native support for multimedia, and introduces new APIs for enhanced web application capabilities."
        docsLinks={[
          { label: "W3Schools HTML", href: "https://www.w3schools.com/html/" },
          { label: "MDN HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        ]}>
        Card content then goes inside here
      </Section>

      <Section
        id="css"
        icon={<IconCSS />}
        title="CSS3"
        subTitle="Cascading Style Sheets"
        description="CSS3 extends CSS2.1 by introducing new modules and features for styling. These include advanced selectors, box model enhancements, flexible box layout (Flexbox), grid layout, animations, and transitions."
        docsLinks={[
          { label: "W3Schools CSS", href: "https://www.w3schools.com/css/" },
          { label: "MDN CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        id="javascript"
        icon={<IconJavaScript />}
        title="JavaScript (ES6+)"
        subTitle="ECMAScript 6 and beyond"
        description="JavaScript (ES6+) is a dynamic, high-level language for client-side interactivity and Document Object Model (DOM) manipulation. ECMAScript 2015 (ES6) and subsequent versions introduced features such as arrow functions, classes, and modules."
        docsLinks={[
          { label: "W3Schools JavaScript", href: "https://www.w3schools.com/js/" },
          { label: "MDN JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        id="typescript"
        icon={<IconTypeScript />}
        title="TypeScript"
        subTitle="JavaScript with static types"
        description="TypeScript is a superset of JavaScript that introduces optional static typing. This allows for type checking during compilation. It supports modern JavaScript features and integrates with existing JavaScript codebases."
        links={[{ label: "TypeScript", href: "https://www.typescriptlang.org/" }]}
        docsLinks={[{ label: "TypeScript", href: "https://www.typescriptlang.org/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
