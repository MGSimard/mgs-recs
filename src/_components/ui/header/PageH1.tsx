import { useMatches } from "@tanstack/react-router";

export function PageH1() {
  const matches = useMatches();
  const match = matches[matches.length - 1];
  const title = match?.loaderData?.title;

  return title ? <h1 className="text-sm font-normal text-muted-foreground">MGS RECS - {title}</h1> : null;
}
