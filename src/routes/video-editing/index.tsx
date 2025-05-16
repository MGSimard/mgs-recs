import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/video-editing/")({
  component: PageVideoEditing,
  loader: () => ({ title: "Video Editing" }),
});

function PageVideoEditing() {
  return (
    <>
      <Section
        title="DaVinci Resolve"
        id="davinci-resolve"
        links={[{ label: "DaVinci Resolve", href: "https://www.blackmagicdesign.com/products/davinciresolve/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
