# Codebase Structure

```
src/
├── router.tsx                       # TanStack Router instance (createRouter + scrollRestoration)
├── routeTree.gen.ts                 # Auto-generated route tree (DO NOT EDIT)
├── styles/app.css                   # Tailwind config, CSS variables, rehype-pretty-code styles
├── routes/                          # TanStack Start file-based routes
│   ├── __root.tsx                   # Root layout - renders full HTML doc (html/head/body)
│   ├── index.tsx                    # Home page
│   └── docs/                        # Docs section
│       ├── route.tsx                # Docs sidebar layout
│       ├── introduction.tsx         # Getting-started pages
│       ├── installation.tsx
│       ├── theming.tsx
│       ├── tailwind-to-kotlin.tsx
│       └── components/              # Component doc routes (~28 components)
│           ├── index.tsx
│           ├── button.tsx, card.tsx, dialog.tsx, etc.
├── content/                         # MDX content files
│   ├── docs/                        # Introduction.mdx, Installation.mdx, Theming.mdx, TailwindToKotlin.mdx
│   └── components/                  # Per-component .mdx docs (~28 files, PascalCase names)
├── components/
│   ├── ui/                          # shadcn/ui components (17 files: button, card, dialog, sidebar, etc.)
│   ├── mdx/                         # MDX-embeddable components
│   │   ├── mdx-components.tsx       # Component map for MDX
│   │   ├── docs-page.tsx, tab-preview.tsx, preview.tsx
│   │   ├── steps.tsx, code-with-filename.tsx, header-docs.tsx, edit-this-page.tsx
│   ├── docs/                        # Docs-specific components (CodeConverter)
│   ├── home/                        # Home page components (Header, Hero, Examples)
│   ├── icons/                       # Custom SVG icon components
│   ├── button-theme.tsx             # Theme toggle button
│   ├── nav-footer.tsx, nav-get-started.tsx, nav-components.tsx  # Navigation components
│   └── table-of-contents.tsx        # TOC component
├── hooks/
│   ├── use-mobile.ts                # Mobile detection hook
│   ├── use-table-of-contents.ts     # TOC hook
│   └── use-theme.ts                 # Theme hook
├── lib/
│   ├── utils.ts                     # cn() helper (clsx + tailwind-merge)
│   ├── component-menu.ts            # Sidebar menu data for components
│   ├── seo.ts                       # SEO meta helper
│   └── tailwind-to-kotlin.ts        # CSS-to-Kotlin converter logic
└── types/
    ├── content.ts                   # Component union type and content types
    └── mdx.d.ts                     # MDX module declarations
```

## Config Files (root)
- `vite.config.ts` — Vite config with Cloudflare, Tailwind, TanStack Start, MDX plugins
- `tsconfig.json` — TypeScript config (ES2022, strict, `@/*` path alias)
- `package.json` — Bun package manager, scripts
- `components.json` — shadcn/ui config
- `wrangler.jsonc` — Cloudflare Workers config
