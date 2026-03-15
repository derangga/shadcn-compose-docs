import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Tabs.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/tabs")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
