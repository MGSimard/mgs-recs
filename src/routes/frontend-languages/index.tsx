import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/frontend-languages/")({
  component: PageFrontendLanguages,
  loader: () => ({ title: "Frontend Languages" }),
});

function PageFrontendLanguages() {
  return (
    <>
      <Section
        id="html"
        title="HTML5"
        subTitle="Hypertext Markup Language"
        description="HTML5 is the latest evolution of the standard that defines HTML. It includes new elements and attributes that
          reflect typical modern usage of web pages, making it the cornerstone of web development."
        docsLinks={[
          { label: "W3Schools HTML", href: "https://www.w3schools.com/html/" },
          { label: "MDN HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        ]}>
        Card content then goes inside here
      </Section>

      <Section
        id="css"
        title="CSS3"
        subTitle="Cascading Style Sheets"
        description="CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of new features and improvements to enhance the styling capabilities of the web."
        docsLinks={[
          { label: "W3Schools CSS", href: "https://www.w3schools.com/css/" },
          { label: "MDN CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        id="javascript"
        title="JavaScript (ES6+)"
        subTitle="ECMAScript 6 and beyond"
        description="JavaScript ES6+ (ECMAScript 2015 and later) introduced significant enhancements to the language, making it more powerful and expressive for both frontend and backend development."
        docsLinks={[
          { label: "W3Schools JavaScript", href: "https://www.w3schools.com/js/" },
          { label: "MDN JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        id="typescript"
        title="TypeScript"
        subTitle="JavaScript with static types"
        description="TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static types to JavaScript, helping catch errors early and making code more maintainable."
        links={[{ label: "TypeScript", href: "https://www.typescriptlang.org/" }]}
        docsLinks={[{ label: "TypeScript", href: "https://www.typescriptlang.org/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
