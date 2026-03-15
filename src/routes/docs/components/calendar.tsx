import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Calendar.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/calendar")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
