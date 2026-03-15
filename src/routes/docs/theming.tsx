import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/docs/Theming.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/theming")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
