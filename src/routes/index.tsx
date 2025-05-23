import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/_components/Hero";

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
