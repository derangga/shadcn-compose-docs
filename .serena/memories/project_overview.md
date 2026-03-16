# Project Overview

**shadcn-compose-docs** — Documentation website for [shadcn-compose](https://github.com/derangga/shadcn-ui-kmp), a Kotlin Multiplatform port of shadcn/ui for Jetpack Compose. Live at `shadcn-compose.site`.

## Tech Stack

- **React 19** + **TypeScript 5.8** + **Vite 7**
- **TanStack Start** (SSR framework using `@tanstack/react-start` with file-based routing)
  - Uses `tanstackStart()` Vite plugin and `@tanstack/react-router` for routing
  - Auto-generated route tree in `src/routeTree.gen.ts` (do not edit)
  - Root route at `src/routes/__root.tsx` renders full HTML document (`<html>`, `<head>`, `<body>`)
  - `HeadContent`, `Outlet`, `Scripts` from `@tanstack/react-router` for SSR support
- **Tailwind CSS 4** with `@tailwindcss/vite` plugin, CSS variables (oklch color space)
- **shadcn/ui** (new-york style) with **Radix UI** (`radix-ui` v1.4) headless primitives
- **Bun** as package manager
- **MDX** via `@mdx-js/rollup` (pre-enforced plugin) with:
  - `remark-gfm`, `remark-frontmatter`, `remark-mdx-frontmatter`
  - `rehype-pretty-code` (Shiki, github-dark/github-light themes), `rehype-slug`, `rehype-autolink-headings`
- **Cloudflare Workers** deployment via `@cloudflare/vite-plugin` + `wrangler`
- **next-themes** for dark/light theme switching
- **sonner** for toast notifications
- **lucide-react** for icons

## Key Differences from Pre-Migration

- Previously: plain TanStack Router SPA with `main.tsx` entry point
- Now: TanStack Start SSR with `@tanstack/react-start/plugin/vite`, no `main.tsx`
- Root route renders the full HTML document (html/head/body)
- Cloudflare plugin configured with `viteEnvironment: { name: "ssr" }`
- SSR optimizeDeps configured for React packages
