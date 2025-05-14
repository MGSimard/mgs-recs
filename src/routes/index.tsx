import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/_components/ui/button";

export const Route = createFileRoute("/")({
  component: PageHome,
});

function PageHome() {
  return (
    <main>
      <Button>Click me</Button>
    </main>
  );
}
