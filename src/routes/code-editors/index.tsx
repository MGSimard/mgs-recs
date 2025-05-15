import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/code-editors/")({
  component: RouteComponent,
  loader: () => ({ title: "Code Editors" }),
});

function RouteComponent() {
  return (
    <>
      <section id="visual-studio-code">
        <h2 className="text-2xl font-bold">Visual Studio Code</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </section>
      <section id="cursor">
        <h2 className="text-2xl font-bold">Cursor</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </section>
      <section id="phoenix-code">
        <h2 className="text-2xl font-bold">Phoenix Code</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </section>
    </>
  );
}
