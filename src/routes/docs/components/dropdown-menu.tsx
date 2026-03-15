import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/DropdownMenu.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/dropdown-menu")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
