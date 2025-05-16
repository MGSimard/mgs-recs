import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/graphic-design/")({
  component: PageGraphicDesign,
  loader: () => ({ title: "Graphic Design" }),
});

function PageGraphicDesign() {
  return (
    <>
      <Section
        title="GIMP"
        id="gimp"
        links={[{ label: "GIMP", href: "https://www.gimp.org/" }]}
        docsLinks={[{ label: "GIMP", href: "https://www.gimp.org/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Adobe Photoshop"
        id="adobe-photoshop"
        links={[{ label: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" }]}
        docsLinks={[
          {
            label: "Adobe Photoshop",
            href: "https://helpx.adobe.com/photoshop/user-guide.html",
          },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
