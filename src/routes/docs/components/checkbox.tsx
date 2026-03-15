import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Checkbox.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/checkbox")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
