interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <hr />
      {children}
    </section>
  );
}
