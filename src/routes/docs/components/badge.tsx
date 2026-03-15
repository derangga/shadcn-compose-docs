import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Badge.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/badge")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
