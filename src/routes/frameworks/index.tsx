import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/frameworks/")({
  component: RouteComponent,
  loader: () => ({ title: "Frameworks" }),
});

function RouteComponent() {
  return (
    <>
      <section id="vite">
        <h2>Vite + Tanstack Router</h2>
      </section>
      <section id="tanstack-start">
        <h2>TanStack Start</h2>
      </section>
      <section id="nextjs">
        <h2>Next.js</h2>
      </section>
    </>
  );
}
