import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Skeleton.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/skeleton")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
