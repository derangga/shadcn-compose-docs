import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Dialog.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/dialog")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
