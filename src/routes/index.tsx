import { createFileRoute } from "@tanstack/react-router";
import { HeroWebGL } from "@/_components/HeroWebGL/HeroWebGL";

export const Route = createFileRoute("/")({
  component: PageHome,
});

function PageHome() {
  return (
    <>
      <HeroWebGL />
    </>
  );
}
