import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoAdobeIllustrator, LogoInkscape } from "@/_components/Icons";

export const Route = createFileRoute("/vector-graphics/")({
  component: PageVectorGraphics,
  loader: () => ({ title: "Vector Graphics" }),
  head: () => ({ meta: [{ title: "MGS RECS - Vector Graphics" }] }),
});

function PageVectorGraphics() {
  return (
    <>
      <Section
        id="adobe-illustrator"
        className="bg-[oklch(0.2_0.0827_29.23)]"
        logo={<LogoAdobeIllustrator />}
        title="Adobe Illustrator"
        links={[{ label: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html" }]}
        docsLinks={[
          {
            label: "Adobe Illustrator",
            href: "https://helpx.adobe.com/illustrator/user-guide.html",
          },
        ]}
        subTitle="Industry standard."
        description="Adobe Illustrator is the industry standard for vector graphics and illustration. It offers advanced tools for creating logos, icons, typography, and complex illustrations, and integrates with other Adobe Creative Cloud apps."
        features={[
          "Industry-standard vector graphics editor",
          "Advanced illustration, logo, and icon tools",
          "Precision typography and text effects",
          "AI-powered vectorization and features",
          "Artboards, layers, and asset export",
          "Seamless Creative Cloud integration",
          "Cross-platform: Windows, Mac, web (beta)",
        ]}
        issues={["Adobe has shady cancellation fee policies"]}></Section>

      <Section
        id="inkscape"
        className="bg-[conic-gradient(from_90deg_at_50%_-2rem,oklch(0.5_0.0079_286.11)_0deg,oklch(0.08_0.0325_276.31)_90deg,oklch(0.52_0.0389_272.26)_180deg)]"
        logo={<LogoInkscape />}
        title="Inkscape"
        links={[{ label: "Inkscape", href: "https://inkscape.org/" }]}
        docsLinks={[{ label: "Inkscape", href: "https://inkscape-manuals.readthedocs.io/" }]}
        subTitle="Free alternative to Illustrator."
        description="Inkscape is a free, open source vector graphics editor for creating and editing SVG files, illustrations, and designs. It supports a wide range of features, extensions, and plugins, making it a strong alternative to Illustrator for those who want professional vector tools without a subscription."
        features={[
          "Free, open source vector editor",
          "SVG, PDF, EPS, and AI file support",
          "Drawing, shape, and text tools",
          "Node editing and path operations",
          "Extensions and plugin support",
          "Customizable UI and keyboard shortcuts",
          "Cross-platform: Windows, Mac, Linux",
        ]}
        issues={["Lacks fundamental features like straightforward canvas mirroring"]}></Section>
    </>
  );
}
