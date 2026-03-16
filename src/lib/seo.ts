export function docsMeta(title: string, description: string, url?: string) {
  return [
    { title: `${title} - shadcn/compose` },
    { name: "description", content: description },
    { property: "og:title", content: `Shadcn Compose Component: ${title}` },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://shadcn-compose.site/og-image.webp" },
    { property: "og:type", content: "website" },
    ...(url ? [{ property: "og:url", content: `https://shadcn-compose.site${url}` }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `Shadcn Compose Component: ${title}` },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "https://shadcn-compose.site/og-image.webp" },
  ];
}
