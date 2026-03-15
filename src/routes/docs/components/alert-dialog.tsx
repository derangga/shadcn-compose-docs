import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/AlertDialog.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/alert-dialog")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
