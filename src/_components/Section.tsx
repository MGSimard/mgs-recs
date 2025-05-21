import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/_components/ui/hover-card";
import { Globe, LucideProps, NotebookText } from "lucide-react";
import { cn } from "@/_lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  logo: React.ReactElement<React.SVGProps<SVGSVGElement>> | React.ReactElement<React.HTMLAttributes<HTMLImageElement>>;
  title: string;
  links?: { label: string; href: string }[];
  docsLinks?: { label: string; href: string }[];
  subTitle: string;
  description: string;
  features: string[];
  issues: string[];
  children?: React.ReactNode;
}

export function Section({
  logo,
  title,
  links,
  docsLinks,
  subTitle,
  description,
  features,
  issues,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className="flex bg-card border rounded-sm shadow-sm overflow-hidden" {...props}>
      <div
        className={cn(
          "shrink-0 flex items-center justify-center w-28 [&>svg]:w-12 [&>svg]:h-12 [&>img]:w-12 [&>img]:h-12",
          className
        )}>
        {logo}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 leading-none">
          {title}
          {links &&
            links.map((l) => <LinkBadge key={l.href} href={l.href} Icon={Globe} title={`${l.label} Website`} />)}
          {docsLinks &&
            docsLinks.map((doc) => (
              <LinkBadge key={doc.href} href={doc.href} Icon={NotebookText} title={`${doc.label} Documentation`} />
            ))}
        </h2>
        <p className="text-muted-foreground text-sm mb-4">{subTitle}</p>
        <p className="mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold">Key Features:</h3>
            <ul>
              {features.map((feature) => (
                <li key={feature} className="list-inside list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Issues:</h3>
            <ul>
              {issues.map((issue) => (
                <li key={issue} className="list-inside list-disc">
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
