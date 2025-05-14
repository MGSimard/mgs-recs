import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageHome,
});

function PageHome() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
