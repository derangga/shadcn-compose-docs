# Codebase Structure

```
src/
├── App.vue                    # Root component (router-view + Toaster)
├── main.ts                    # App entry: global component registration, router, head
├── style.css                  # Global styles, Tailwind config, CSS variables, Prism overrides
├── vite-env.d.ts              # Vite type declarations
├── components/
│   ├── ui/                    # shadcn-vue UI components (each in own folder with index.ts)
│   │   ├── button/
│   │   ├── card/
│   │   ├── sidebar/           # Large component with many sub-components
│   │   ├── tabs/
│   │   ├── dialog/
│   │   ├── sheet/
│   │   ├── icons/             # Custom SVG icon components (Android, Github)
│   │   ├── markdown-components/  # Components used inside .md files
│   │   │   ├── TabPreview.vue
│   │   │   ├── Steps.vue
│   │   │   ├── HeaderDocs.vue
│   │   │   ├── EditThisPage.vue
│   │   │   ├── DocsPage.vue
│   │   │   ├── Preview.vue
│   │   │   └── CodeWithFilename.vue
│   │   └── ... (breadcrumb, tooltip, navigation-menu, etc.)
│   ├── home/                  # Homepage-specific components
│   ├── docs/                  # Docs-specific components (CodeConverter)
│   ├── ButtonSearch.vue
│   └── TableOfContents.vue
├── composables/
│   └── useTableOfContents.ts
├── layouts/
│   ├── DocsLayout.vue         # Main docs layout with sidebar, breadcrumb, TOC
│   ├── NavGetStarted.vue      # "Get Started" sidebar navigation
│   ├── NavComponents.vue      # Components sidebar navigation
│   └── NavFooter.vue          # Sidebar footer
├── lib/
│   ├── utils.ts               # cn() utility function
│   └── component-menu.ts      # Component menu data
├── pages/
│   ├── HomeView.vue           # Landing page
│   ├── docs/                  # Documentation markdown pages
│   │   ├── Introduction.md
│   │   ├── Installation.md
│   │   ├── Theming.md
│   │   ├── TailwindToKotlin.md
│   │   └── ComponentsView.vue
│   └── components/            # Individual component doc pages (all .md)
│       ├── Button.md, Card.md, Dialog.md, etc.
├── router/
│   └── index.ts               # Route definitions (manual, not file-based)
└── types/
    └── content.ts
```

Key config files at root:
- `components.json` — shadcn-vue config (new-york style, aliases)
- `vite.config.ts` — Vite plugins (vue, tailwindcss, markdown, pages)
- `wrangler.jsonc` — Cloudflare Workers deployment config
