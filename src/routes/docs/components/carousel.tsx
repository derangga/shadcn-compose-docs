import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/Carousel.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/carousel")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
