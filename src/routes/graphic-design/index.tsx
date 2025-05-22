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
        subTitle="Evergreen free & open source Photoshop alternative."
        description="GIMP is a powerful, free alternative to Photoshop for photo editing, graphic design, and digital art. Its plugin support is extensive, with tools like Resynthesizer, G'MIC-Qt, Darktable, and many more for advanced editing, creative effects, and workflow enhancements. GIMP is open source and ideal for anyone who wants professional tools without dealing with Adobe's subscription fees and shady cancellation penalties."
        features={[""]}
        issues={[]}></Section>

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
        subTitle="Industry standard."
        description="Adobe Photoshop is the industry standard for photo editing, graphic design, and digital art. It offers advanced tools for retouching, compositing, and illustration, and integrates with other Adobe Creative Cloud apps. Photoshop requires a paid subscription, an Adobe account, and is subject to cancellation fees and other restrictions. Recommended if you can get it for free as a student or through other means."
        features={[""]}
        issues={[]}></Section>
    </>
  );
}
