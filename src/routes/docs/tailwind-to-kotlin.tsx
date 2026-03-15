import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/docs/TailwindToKotlin.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/tailwind-to-kotlin")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
