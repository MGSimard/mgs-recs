import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { IconHTML, IconCSS, IconJavaScript, IconTypeScript } from "@/_components/Icons";
import { Dot } from "lucide-react";

export const Route = createFileRoute("/frontend-languages/")({
  component: PageFrontendLanguages,
  loader: () => ({ title: "Frontend Languages" }),
});

function PageFrontendLanguages() {
  return (
    <>
      <Section
        id="html"
        className="bg-[oklch(0.67_0.1852_41.15)]"
        icon={<IconHTML />}
        title="HTML5"
        subTitle="Hypertext Markup Language"
        description="HTML5 is the latest version of HyperText Markup Language, establishing the fundamental structure for web content. It incorporates semantic elements for content organization, native support for multimedia, and introduces new APIs for enhanced web application capabilities."
        docsLinks={[
          { label: "MDN HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { label: "W3Schools HTML", href: "https://www.w3schools.com/html/" },
        ]}>
        <h3 className="text-lg font-bold">Key Features:</h3>
        {/* The default bullet points suck, there's also too much space between bullet and text */}
        <ul className="grid grid-cols-3 gap-2">
          <li className="flex items-center">
            <Dot className="h-4 w-4 mr-1" />
            Arrow functions
          </li>
          <li className="flex items-center">
            <Dot className="h-4 w-4 mr-1" />
            Classes
          </li>
          <li className="flex items-center">
            <Dot className="h-4 w-4 mr-1" />
            Modules
          </li>
        </ul>
      </Section>
      <Section
        id="css"
        className="bg-[oklch(0.44_0.1603_303.37)]"
        icon={<IconCSS />}
        title="CSS3"
        subTitle="Cascading Style Sheets"
        description="CSS3 extends CSS2.1 by introducing new modules and features for styling. These include advanced selectors, box model enhancements, flexible box layout (Flexbox), grid layout, animations, and transitions."
        docsLinks={[
          { label: "MDN CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
          { label: "W3Schools CSS", href: "https://www.w3schools.com/css/" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        id="javascript"
        className="bg-[oklch(0.88_0.1565_100.66)]"
        icon={<IconJavaScript />}
        title="JavaScript (ES6+)"
        subTitle="ECMAScript 6 and beyond"
        description="JavaScript (ES6+) is a dynamic, high-level language for client-side interactivity and Document Object Model (DOM) manipulation. ECMAScript 2015 (ES6) and subsequent versions introduced features such as arrow functions, classes, and modules."
        docsLinks={[
          { label: "MDN JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          { label: "W3Schools JavaScript", href: "https://www.w3schools.com/js/" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        id="typescript"
        className="bg-[oklch(0.57_0.1399_253.3)]"
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
