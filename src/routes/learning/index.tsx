import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoFreecodecamp } from "@/_components/Icons";

export const Route = createFileRoute("/learning/")({
  component: PageLearning,
  loader: () => ({ title: "Learning" }),
});

function PageLearning() {
  return (
    <>
      <Section
        id="freecodecamp"
        className="bg-[oklch(0.16_0.0509_279.14)]"
        logo={<LogoFreecodecamp />}
        title="freeCodeCamp"
        links={[{ label: "freeCodeCamp", href: "https://www.freecodecamp.org/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="codevolution"
        className="bg-black"
        logo={<img className="object-cover rounded-full" src="/assets/brands/codevolution.webp" alt="" />}
        title="Codevolution"
        links={[{ label: "Codevolution (Youtube)", href: "https://www.youtube.com/codevolution/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="theo"
        className="bg-[radial-gradient(oklch(0.36_0.0586_304.5),oklch(0.33_0.0542_303.48))]"
        logo={<img className="object-cover rounded-full" src="/assets/brands/theo.webp" alt="" />}
        title="Theo - t3.gg"
        links={[{ label: "t3dotgg (Youtube)", href: "https://www.youtube.com/@t3dotgg" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="jack-herrington"
        className="bg-[radial-gradient(oklch(0.32_0.1365_265.54),oklch(0.17_0_0))]"
        logo={<img className="object-cover rounded-full" src="/assets/brands/jack-herrington.webp" alt="" />}
        title="Jack Herrington"
        links={[{ label: "Jack Herrington (Youtube)", href: "https://www.youtube.com/@jherr/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>
    </>
  );
}
