import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/docs/Introduction.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/introduction")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
