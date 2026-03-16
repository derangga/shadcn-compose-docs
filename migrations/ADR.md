# ADR: Migrate from Vue to TanStack Start

**Date**: 2026-03-15
**Status**: Proposed
**Author**: -

---

## Context

The current documentation site for [shadcn-compose](https://github.com/derangga/shadcn-ui-kmp) is built with Vue 3, Vite, vue-router, and shadcn-vue. Documentation pages are authored as `.md` files rendered via `unplugin-vue-markdown` with PrismJS syntax highlighting and globally-registered Vue components embedded inside markdown.

We want to migrate to **TanStack Start** (React) to leverage its type-safe file-based routing, SSR capabilities, and the broader React ecosystem.

## Decision

Migrate the documentation site from Vue 3 to **TanStack Start v1** with the following architecture:

### Framework & Routing

| Concern | Current (Vue) | Target (TanStack Start) |
|---------|---------------|------------------------|
| Framework | Vue 3 | React 19 + TanStack Start v1 |
| Routing | vue-router 4 (manual definitions in `router/index.ts`) | TanStack Router (file-based, type-safe) |
| Build | Vite 7 | Vite 7 (retained, TanStack Start is Vite-native) |
| SSR | None (SPA) | Full SSR with selective per-route control |
| Package manager | Bun | Bun (retained) |

### Content / Markdown Strategy

| Concern | Current | Target |
|---------|---------|--------|
| Markdown processing | `unplugin-vue-markdown` (compile .md to Vue SFC at build time) | **MDX** via `@mdx-js/rollup` (compile .mdx to React components at build time) |
| Custom components in markdown | Globally registered Vue components (`TabPreview`, `Steps`, `HeaderDocs`, etc.) | MDX component mapping via a shared `mdx-components.tsx` provider |
| Syntax highlighting | PrismJS (runtime, `prism-tomorrow` theme) | **rehype-pretty-code** (Shiki-based, build-time, zero client JS) |
| Frontmatter | `unplugin-vue-markdown` built-in | `remark-frontmatter` + `remark-mdx-frontmatter` |

**Why MDX over alternatives:**
- **vs `react-markdown`**: MDX allows JSX directly in markdown files — this matches our current pattern of embedding Vue components in `.md` files. `react-markdown` only supports standard markdown at runtime.
- **vs `content-collections`**: content-collections is great for blog-style content but adds an extra layer of abstraction. MDX gives us direct control and the files themselves are the components — simpler mental model for a docs site.
- **vs keeping `.md` + runtime rendering**: Build-time compilation via `@mdx-js/rollup` is more performant (no client-side parsing) and allows full JSX interop.

### UI Components

| Concern | Current | Target |
|---------|---------|--------|
| Component library | shadcn-vue (Reka UI) | **shadcn/ui** (Radix UI) |
| Style variant | new-york | new-york (same) |
| CSS framework | Tailwind CSS 4 | Tailwind CSS 4 (retained) |
| CSS variables | oklch color tokens | oklch color tokens (retained, copy `style.css` tokens) |
| Icons | lucide-vue-next | lucide-react |
| Toast | vue-sonner | sonner |
| Class utility | cva + clsx + tailwind-merge | cva + clsx + tailwind-merge (identical) |
| Animation | tw-animate-css | tw-animate-css (retained) |

### Deployment

| Concern | Current | Target |
|---------|---------|--------|
| Platform | Cloudflare Workers | Cloudflare Workers (retained) |
| Config | wrangler.jsonc (static SPA) | wrangler.jsonc + `@cloudflare/vite-plugin` (SSR) |
| Build output | `dist/` static files | SSR worker bundle |

### Package Mapping

| Vue Package | React Replacement |
|-------------|-------------------|
| `vue` | `react` + `react-dom` |
| `vue-router` | `@tanstack/react-router` (bundled with Start) |
| `@vitejs/plugin-vue` | `@vitejs/plugin-react` |
| `reka-ui` | `@radix-ui/react-*` (via shadcn/ui) |
| `lucide-vue-next` | `lucide-react` |
| `vue-sonner` | `sonner` |
| `@vueuse/core` | Custom hooks or `usehooks-ts` |
| `@unhead/vue` | TanStack Start `head()` in route config |
| `unplugin-vue-markdown` | `@mdx-js/rollup` |
| `markdown-it-prism` + `prismjs` | `rehype-pretty-code` + `shiki` |
| `vite-plugin-pages` | TanStack Router file-based routing (built-in) |
| `vue-tsc` | `tsc` (standard TypeScript) |
| `class-variance-authority` | `class-variance-authority` (same) |
| `clsx` | `clsx` (same) |
| `tailwind-merge` | `tailwind-merge` (same) |

## Project Structure (Target)

```
src/
├── routes/
│   ├── __root.tsx                    # Root layout (HTML shell, global styles, providers)
│   ├── index.tsx                     # "/" — Home page
│   └── docs/
│       ├── _layout.tsx               # Docs layout (sidebar, breadcrumb, TOC)
│       ├── introduction.tsx          # Renders Introduction.mdx
│       ├── installation.tsx          # Renders Installation.mdx
│       ├── theming.tsx               # Renders Theming.mdx
│       ├── tailwind-to-kotlin.tsx    # Renders TailwindToKotlin.mdx
│       ├── components/
│       │   ├── index.tsx             # Components overview page
│       │   ├── button.tsx            # Renders Button.mdx
│       │   ├── card.tsx              # (each component gets a route)
│       │   └── ...
├── content/
│   ├── docs/                         # MDX files for getting-started pages
│   │   ├── Introduction.mdx
│   │   ├── Installation.mdx
│   │   ├── Theming.mdx
│   │   └── TailwindToKotlin.mdx
│   └── components/                   # MDX files for component docs
│       ├── Button.mdx
│       ├── Card.mdx
│       └── ...
├── components/
│   ├── ui/                           # shadcn/ui React components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── sidebar.tsx
│   │   └── ...
│   ├── mdx/                          # Custom MDX components (replaces markdown-components/)
│   │   ├── mdx-components.tsx        # Component map for MDX provider
│   │   ├── tab-preview.tsx
│   │   ├── steps.tsx
│   │   ├── header-docs.tsx
│   │   ├── edit-this-page.tsx
│   │   ├── docs-page.tsx
│   │   ├── preview.tsx
│   │   └── code-with-filename.tsx
│   ├── home/                         # Home page components
│   ├── docs/                         # Docs-specific components (CodeConverter)
│   └── table-of-contents.tsx
├── hooks/                            # React hooks (replaces composables/)
│   └── use-table-of-contents.ts
├── lib/
│   ├── utils.ts                      # cn() — identical to current
│   └── component-menu.ts             # Sidebar menu data — reuse as-is
├── types/
│   └── content.ts                    # Reuse as-is
├── styles/
│   └── app.css                       # Tailwind entry + CSS variables (port from style.css)
└── router.tsx                        # Router instance creation
```

## Key Architectural Decisions

### 1. Route files are thin wrappers around MDX content

Each route file (`docs/button.tsx`) imports and renders the corresponding MDX file. This keeps routing concerns separate from content:

```tsx
// src/routes/docs/components/button.tsx
import { createFileRoute } from '@tanstack/react-router'
import ButtonMdx from '@/content/components/Button.mdx'

export const Route = createFileRoute('/docs/components/button')({
  component: () => <ButtonMdx />,
  head: () => ({ meta: [{ title: 'Button - Shadcn Compose' }] }),
})
```

### 2. MDX components are mapped centrally

A single `mdx-components.tsx` file maps custom components and HTML element overrides. This replaces the global `app.component()` registrations in `main.ts`.

### 3. SSR is enabled by default

TanStack Start provides SSR out of the box. This improves SEO (important for a docs site) and initial load performance over the current SPA approach. No extra configuration needed.

### 4. SEO metadata is derived from MDX frontmatter

Every markdown file already has `title` and `description` in YAML frontmatter (e.g., `title: "Button"`, `description: "Displays a button..."`). These values must flow into the page's `<head>` as:

- `<title>{title} - Shadcn Compose</title>`
- `<meta name="description" content="{description}" />`
- `<meta property="og:title" content="{title} - Shadcn Compose" />`
- `<meta property="og:description" content="{description}" />`
- `<meta property="og:type" content="article" />`
- `<meta name="twitter:title" content="{title} - Shadcn Compose" />`
- `<meta name="twitter:description" content="{description}" />`

This is achieved through TanStack Start's `head()` function on each route. Since `remark-mdx-frontmatter` makes frontmatter available as a named export from the MDX file, the route file can import and use it:

```tsx
// src/routes/docs/components/button.tsx
import { createFileRoute } from '@tanstack/react-router'
import Content, { title, description } from '@/content/components/Button.mdx'

export const Route = createFileRoute('/docs/components/button')({
  component: () => <Content />,
  head: () => ({
    meta: [
      { title: `${title} - Shadcn Compose` },
      { name: 'description', content: description },
      { property: 'og:title', content: `${title} - Shadcn Compose` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:title', content: `${title} - Shadcn Compose` },
      { name: 'twitter:description', content: description },
    ],
  }),
})
```

To avoid repeating this boilerplate in every route file, a helper function should be created:

```tsx
// src/lib/seo.ts
export function docsMeta(title: string, description: string) {
  const fullTitle = `${title} - Shadcn Compose`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
    ],
  }
}
```

This replaces the current approach where `@unhead/vue` is used with a static title and no per-page metadata.

### 5. Syntax highlighting moves to build-time

Switching from PrismJS (runtime) to rehype-pretty-code/Shiki (build-time) eliminates client-side highlighting JS entirely. This improves performance and gives access to VS Code themes.

### 6. CSS variables are preserved

The oklch color tokens in `style.css` are framework-agnostic CSS custom properties. They transfer directly to the new project with no changes.

## Consequences

### Positive
- Type-safe routing with full param/search inference
- SSR improves SEO and perceived performance for the docs site
- Build-time syntax highlighting reduces client JS
- Larger React ecosystem for future enhancements
- shadcn/ui React is the original — always gets features first

### Negative
- Migration effort: every `.vue` component must be rewritten as `.tsx`
- Team must learn React patterns if primarily Vue-experienced
- TanStack Start is still at RC (v1 not yet final), though API is stable
- MDX files need minor syntax adjustments from current `.md` files (JSX closing tags, curly brace escaping)

### Risks
- TanStack Start RC may have edge cases in SSR on Cloudflare Workers — mitigated by Cloudflare's official support and Vite plugin
- rehype-pretty-code increases build time for large numbers of code blocks — acceptable for a docs site of this size (~30 pages)

## References

- [TanStack Start Docs](https://tanstack.com/start/latest/docs/framework/react/overview)
- [TanStack Start + Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/)
- [shadcn/ui + TanStack Start Installation](https://ui.shadcn.com/docs/installation/tanstack)
- [MDX Documentation](https://mdxjs.com/)
- [rehype-pretty-code](https://rehype-pretty.pages.dev/)
- [Tailwind CSS 4 + TanStack Start](https://tailwindcss.com/docs/installation/framework-guides/tanstack-start)
