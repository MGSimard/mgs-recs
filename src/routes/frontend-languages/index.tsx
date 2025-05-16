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
        title="HTML5"
        id="html"
        docsLinks={[
          { label: "W3Schools HTML", href: "https://www.w3schools.com/html/" },
          { label: "MDN HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="CSS3"
        id="css"
        docsLinks={[
          { label: "W3Schools CSS", href: "https://www.w3schools.com/css/" },
          { label: "MDN CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="JavaScript (ES6+)"
        id="javascript"
        docsLinks={[
          { label: "W3Schools JavaScript", href: "https://www.w3schools.com/js/" },
          { label: "MDN JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="TypeScript"
        id="typescript"
        links={[{ label: "TypeScript", href: "https://www.typescriptlang.org/" }]}
        docsLinks={[{ label: "TypeScript", href: "https://www.typescriptlang.org/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
