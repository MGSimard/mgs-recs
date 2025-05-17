import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoAdobePhotoshop, LogoGIMP } from "@/_components/Icons";

export const Route = createFileRoute("/graphic-design/")({
  component: PageGraphicDesign,
  loader: () => ({ title: "Graphic Design" }),
});

function PageGraphicDesign() {
  return (
    <>
      <Section
        id="gimp"
        className="bg-[oklch(0.61_0.0241_69.58)]"
        logo={<LogoGIMP />}
        title="GIMP"
        links={[{ label: "GIMP", href: "https://www.gimp.org/" }]}
        docsLinks={[{ label: "GIMP", href: "https://www.gimp.org/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="adobe-photoshop"
        className="bg-[oklch(0.23_0.0588_246.17)]"
        logo={<LogoAdobePhotoshop />}
        title="Adobe Photoshop"
        links={[{ label: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" }]}
        docsLinks={[
          {
            label: "Adobe Photoshop",
            href: "https://helpx.adobe.com/photoshop/user-guide.html",
          },
        ]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
