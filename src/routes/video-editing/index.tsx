import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoDaVinciResolve } from "@/_components/Icons";

export const Route = createFileRoute("/video-editing/")({
  component: PageVideoEditing,
  loader: () => ({ title: "Video Editing" }),
  head: () => ({ meta: [{ title: "MGS RECS - Video Editing" }] }),
});

function PageVideoEditing() {
  return (
    <>
      <Section
        id="davinci-resolve"
        className="bg-[conic-gradient(oklch(0.65_0.2_235.5161)0%,oklch(0.65_0.3_22.81)33%,oklch(0.97_0.2_110.13)66%,oklch(0.65_0.2_235.5161)100%)]"
        logo={<LogoDaVinciResolve className="drop-shadow-md" />}
        title="DaVinci Resolve"
        links={[{ label: "DaVinci Resolve", href: "https://www.blackmagicdesign.com/products/davinciresolve/" }]}
        subTitle="All-in-one editing, color, VFX, and audio."
        description="DaVinci Resolve is a professional video editing suite that combines editing, color correction, visual effects, motion graphics, and audio post production in one app. It features advanced tools for editing, color grading, VFX, and audio, plus powerful AI features and real-time collaboration. Available in a free version and a paid Studio version with extra features. Widely used in Hollywood and by independent creators."
        features={[
          "All-in-one editing, color, VFX, audio, and delivery",
          "Hollywood-grade color correction & grading",
          "AI tools: IntelliScript, Magic Mask, audio assistant, more",
          "Fusion: node-based VFX & motion graphics",
          "Fairlight: pro audio post & mixing",
          "Multi-user real-time collaboration",
          "Wide format support, up to 8K+",
          "Free & Studio (paid) versions",
          "Cross-platform: Windows, Mac, Linux",
        ]}
        issues={[]}
      />
    </>
  );
}
