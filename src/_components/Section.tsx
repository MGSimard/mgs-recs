import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/_components/ui/hover-card";
import { Globe, LucideProps, NotebookText } from "lucide-react";

interface SectionProps extends React.ComponentProps<"section"> {
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  subTitle: string;
  description: string;
  links?: { label: string; href: string }[];
  docsLinks?: { label: string; href: string }[];
  children: React.ReactNode;
}

export function Section({ icon, title, subTitle, description, links, docsLinks, children, ...props }: SectionProps) {
  return (
    <section className="bg-card flex flex-col gap-6 rounded-sm border p-4 shadow-sm">
      <div className="flex gap-4">
        {icon && (
          <div className="bg-background rounded-xs p-2 row-span-2 w-12 h-12 [&>svg]:w-full [&>svg]:h-full">{icon}</div>
        )}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 leading-none">
            {title}
            {links &&
              links.map((l) => <LinkBadge key={l.href} href={l.href} Icon={Globe} title={`${l.label} Website`} />)}
            {docsLinks &&
              docsLinks.map((doc) => (
                <LinkBadge key={doc.href} href={doc.href} Icon={NotebookText} title={`${doc.label} Documentation`} />
              ))}
          </h2>
          <p className="text-muted-foreground text-sm">{subTitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>{description}</p>
        {children}
      </div>
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
