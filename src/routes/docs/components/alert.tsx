import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Alert.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/alert")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
