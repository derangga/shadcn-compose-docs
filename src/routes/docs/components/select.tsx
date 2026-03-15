import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Select.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/select")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
