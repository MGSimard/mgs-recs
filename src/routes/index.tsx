import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/_components/Hero";
import { HeroWebGL } from "@/_components/HeroWebGL";

export const Route = createFileRoute("/")({
  component: PageHome,
});

function PageHome() {
  return (
    <>
      <Hero />
    </>
  );
}
