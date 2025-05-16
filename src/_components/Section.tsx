import { Separator } from "@radix-ui/react-separator";
import { Book, Link, LucideProps } from "lucide-react";

interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  children: React.ReactNode;
  link?: string;
  docsLink?: string;
}

export function Section({ title, children, link, docsLink, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        {title}
        {link && <LinkBadge href={link} Icon={Link} title="Official Website" />}
        {docsLink && <LinkBadge href={docsLink} Icon={Book} title="Documentation" />}
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
    <a
      className="inline-flex items-center text-muted-foreground h-4 w-4 hover:text-accent-foreground focus-visible:text-accent-foreground"
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer">
      <Icon aria-label={title} />
    </a>
  );
}
