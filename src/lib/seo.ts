export function docsMeta(title: string, description: string) {
  return [
    { title: `${title} - shadcn/compose` },
    { name: "description", content: description },
    { property: "og:title", content: `Shadcn Compose Component: ${title}` },
    { property: "og:description", content: description },
    { property: "og:image", content: "/og-image.webp" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: `Shadcn Compose Component: ${title}` },
    { property: "twitter:description", content: description },
  ];
}
