import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/icon-libraries/")({
  component: PageIconLibraries,
  loader: () => ({ title: "Icon Libraries" }),
});

function PageIconLibraries() {
  return (
    <>
      <Section id="heroicons" title="Heroicons" subTitle="" description="">
        Card content then goes inside here
      </Section>
      <Section id="lucide" title="Lucide" subTitle="" description="">
        Card content then goes inside here
      </Section>
      <Section id="svgl" title="svgl" subTitle="" description="">
        Card content then goes inside here
      </Section>
    </>
  );
}
