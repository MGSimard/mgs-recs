import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/frontend-languages/")({
  component: RouteComponent,
  loader: () => ({ title: "Frontend Languages" }),
});

function RouteComponent() {
  return (
    <>
      <section id="html">
        <h2>HTML5</h2>
      </section>
      <section id="css">
        <h2>CSS3</h2>
      </section>
      <section id="javascript">
        <h2>JavaScript (ES6+)</h2>
      </section>
      <section id="typescript">
        <h2>TypeScript</h2>
      </section>
    </>
  );
}
