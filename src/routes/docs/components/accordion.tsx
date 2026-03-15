import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Accordion.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/accordion")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
