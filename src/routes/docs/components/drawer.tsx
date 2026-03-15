import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Drawer.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/drawer")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
