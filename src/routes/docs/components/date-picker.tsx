import { createFileRoute } from "@tanstack/react-router";
import Content, { title, description } from "@/content/components/DatePicker.mdx";
import { docsMeta } from "@/lib/seo";

export const Route = createFileRoute("/docs/components/date-picker")({
  component: () => <Content />,
  head: () => ({ meta: docsMeta(title, description) }),
});
