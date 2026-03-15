import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Card.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/card")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
