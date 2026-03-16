import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
  component: RootLayout,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Shadcn Compose",
      },
      {
        name: "description",
        content:
          "shadcn-compose is inspired by shadcn, providing beautifully designed components that you can copy and paste into your apps",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "Shadcn Compose",
      },
      {
        property: "og:description",
        content:
          "shadcn-compose is inspired by shadcn, providing beautifully designed components that you can copy and paste into your apps",
      },
      {
        property: "og:image",
        content: "/og-image.webp",
      },
      {
        property: "og:url",
        content: "https://shadcn-compose.site/",
      },
      {
        property: "og:site_name",
        content: "Shadcn Compose",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Shadcn Compose",
      },
      {
        name: "twitter:description",
        content:
          "shadcn-compose is inspired by shadcn, providing beautifully designed components that you can copy and paste into your apps",
      },
      {
        property: "twitter:image",
        content: "/og-image.webp",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/android-fav.webp",
      },
    ],
  }),
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <TooltipProvider>
          <Outlet />
        </TooltipProvider>
        <Scripts />
      </body>
    </html>
  );
}
