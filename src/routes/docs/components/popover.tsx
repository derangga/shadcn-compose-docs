import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Popover.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/popover")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
