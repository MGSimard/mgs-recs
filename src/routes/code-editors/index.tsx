import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/code-editors/")({
  component: RouteComponent,
  loader: () => ({ title: "Code Editors" }),
});

function RouteComponent() {
  return (
    <>
      <section id="visual-studio-code">
        <h2>Visual Studio Code</h2>
      </section>
      <section id="cursor">
        <h2>Cursor</h2>
      </section>
      <section id="phoenix-code">
        <h2>Phoenix Code</h2>
      </section>
    </>
  );
}
