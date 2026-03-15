import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Slider.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/slider")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
