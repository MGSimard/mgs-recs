import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoDaVinciResolve } from "@/_components/Icons";

export const Route = createFileRoute("/video-editing/")({
  component: PageVideoEditing,
  loader: () => ({ title: "Video Editing" }),
});

// #009bd8
// #ff3044
// #fcff7c

//         className="bg-[conic-gradient(oklch(0.65_0.139197_235.5161),oklch(0.65_0.2372_22.81),oklch(0.97_0.1534_110.13))]"

function PageVideoEditing() {
  return (
    <>
      <Section
        id="davinci-resolve"
        className="bg-[conic-gradient(oklch(0.65_0.2_235.5161)0%,oklch(0.65_0.3_22.81)33%,oklch(0.97_0.2_110.13)66%,oklch(0.65_0.2_235.5161)100%)]"
        logo={<LogoDaVinciResolve className="drop-shadow-md" />}
        title="DaVinci Resolve"
        links={[{ label: "DaVinci Resolve", href: "https://www.blackmagicdesign.com/products/davinciresolve/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}
      />
    </>
  );
}
