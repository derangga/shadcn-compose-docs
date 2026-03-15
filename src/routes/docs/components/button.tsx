import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Button.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/button")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
