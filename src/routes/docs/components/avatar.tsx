import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Avatar.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/avatar")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
