import { Separator } from "@radix-ui/react-separator";

interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <Separator className="border-b-[1px] border-gray-200 max-w-48 mt-2 mb-4" />
      {children}
    </section>
  );
}
