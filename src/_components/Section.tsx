import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/_components/ui/hover-card";
import { Separator } from "@radix-ui/react-separator";
import { Globe, LucideProps, NotebookText } from "lucide-react";

interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  children: React.ReactNode;
  links?: { label: string; href: string }[];
  docsLinks?: { label: string; href: string }[];
}

export function Section({ title, children, links, docsLinks, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        {title}
        {links && links.map((l) => <LinkBadge key={l.href} href={l.href} Icon={Globe} title={`${l.label} Website`} />)}
        {docsLinks &&
          docsLinks.map((doc) => (
            <LinkBadge key={doc.href} href={doc.href} Icon={NotebookText} title={`${doc.label} Documentation`} />
          ))}
      </h2>

      <Separator className="border-b-[1px] border-gray-200 max-w-48 mt-2 mb-4" />
      {children}
    </section>
  );
}

interface LinkBadgeProps {
  href: string;
  Icon: React.ComponentType<LucideProps>;
  title: string;
}

function LinkBadge({ href, Icon, title }: LinkBadgeProps) {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a
          className="mb-0.5 inline-flex items-center text-muted-foreground h-4 w-4 hover:text-accent-foreground focus-visible:text-accent-foreground"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}>
          <Icon />
        </a>
      </HoverCardTrigger>
      <HoverCardContent avoidCollisions side="top" className="p-2 w-auto">
        <p>{title}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
