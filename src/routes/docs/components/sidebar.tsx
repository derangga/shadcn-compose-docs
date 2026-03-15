import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Sidebar.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/sidebar")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
