import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import {
  LogoCanva,
  LogoExcalidraw,
  LogoFigma,
  LogoImageColorPicker,
  LogoOKLCH,
  LogoPureRef,
} from "@/_components/Icons";

export const Route = createFileRoute("/design/")({
  component: PageDesign,
  loader: () => ({ title: "Design" }),
});

function PageDesign() {
  return (
    <>
      <Section
        id="excalidraw"
        className="bg-[oklch(0.57_0.1752_280.83)]"
        logo={<LogoExcalidraw />}
        title="Excalidraw"
        links={[{ label: "Excalidraw", href: "https://excalidraw.com/" }]}
        docsLinks={[{ label: "Excalidraw", href: "https://docs.excalidraw.com/" }]}
        subTitle="Sketch, collaborate, and embed your ideas."
        description="Excalidraw is an open source virtual whiteboard for sketching ideas, diagrams, and doodles in a hand-drawn style. It's great for solo or collaborative brainstorming, and you can even embed it in your own projects or self-host it if you want."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="figma"
        className="bg-[linear-gradient(135deg,oklch(0.65_0.234_26.69),oklch(0.71_0.1863_41.33),oklch(0.59_0.2445_291.73),oklch(0.73_0.158874_236.3575),oklch(0.74_0.1823_152.99))]"
        logo={<LogoFigma />}
        title="Figma"
        links={[{ label: "Figma", href: "https://www.figma.com/" }]}
        docsLinks={[{ label: "Figma", href: "https://help.figma.com/" }]}
        subTitle="Design, prototype, and collaborate."
        description="Figma is a collaborative design platform where teams can brainstorm, create, and refine products together in real time. From wireframes to polished prototypes, Figma keeps everyone, including designers, developers, and stakeholders, on the same page, making teamwork seamless and handoff a breeze."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="canva"
        className="bg-[linear-gradient(135deg,oklch(0.75_0.126756_200.0078),oklch(0.51_0.2695_280.38),oklch(0.52_0.2552_295.58))]"
        logo={<LogoCanva />}
        title="Canva"
        links={[{ label: "Canva", href: "https://www.canva.com/" }]}
        docsLinks={[{ label: "Canva", href: "https://www.canva.com/help/" }]}
        subTitle="Templates, AI, and team design."
        description="Canva is a design tool for creating graphics, presentations, documents, and prints. It offers templates for a wide range of projects, supports real-time collaboration, and includes AI features for generating and editing content. Canva is available on web, desktop, and mobile, and you can print designs directly from the platform."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="pureref"
        className="bg-[oklch(0.24_0_0)]"
        logo={<LogoPureRef />}
        title="PureRef"
        links={[{ label: "PureRef", href: "https://www.pureref.com/" }]}
        docsLinks={[{ label: "PureRef", href: "https://www.pureref.com/support.php" }]}
        subTitle="Reference images, organized."
        description="PureRef is a standalone app for Windows, Mac, and Linux that helps you collect, organize, and view reference images. It's useful for mood boards, inspiration, and creative projects. You can drag and drop images from anywhere, keep PureRef always on top of your workspace, and use its minimal interface to focus on your work."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="image-color-picker"
        className="bg-[oklch(0.5686_0.229174_22.2279)]"
        logo={<LogoImageColorPicker />}
        title="Image Color Picker"
        links={[{ label: "Image Color Picker", href: "https://imagecolorpicker.com/" }]}
        subTitle="Pick colors from any image."
        description="Image Color Picker is a free online tool that lets you pick colors directly from any image, right in your browser. Upload, paste, or link to an image, then click to get the exact HEX, RGB, or HSV color code of any pixel. No data is sent—everything happens locally for your privacy."
        features={[""]}
        issues={[]}></Section>

      <Section
        id="oklch-color-picker-converter"
        className="bg-[linear-gradient(45deg,oklch(70%_0.21_304.5),oklch(70%_0.21_0)50%,oklch(0.70_0.21_49.1),oklch(70%_0.21_49.1))]"
        logo={<LogoOKLCH />}
        title="OKLCH Color Picker & Converter"
        links={[{ label: "OKLCH Color Picker & Converter", href: "https://oklch.com/" }]}
        docsLinks={[
          { label: "Why OKLCH?", href: "https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl/" },
        ]}
        subTitle="OKLCH is king."
        description="OKLCH Color Picker & Converter is a modern tool for picking and converting colors in the OKLCH and LCH color spaces. It supports advanced color gamuts like P3 and Rec. 2020, and offers predictable contrast and great accessibility for palette generation. Unlike RGB or HSL, OKLCH is designed for modern CSS and always maintains color accuracy and consistency. Instantly convert between HEX, RGB, HSL, and OKLCH, and explore why OKLCH is the future of color on the web. Note that VSCode doesn't have a built-in OKLCH color preview, so you'll need to install an extension in order to see OKLCH color previews in your code. Curious about why OKLCH is recommended? See the second link at the top of this card for a deep dive into its advantages."
        features={[""]}
        issues={[]}></Section>
    </>
  );
}
