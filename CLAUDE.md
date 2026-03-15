# CLAUDE.md — shadcn-compose-docs

## What is this project?

Documentation website for [shadcn-compose](https://github.com/derangga/shadcn-ui-kmp), a Kotlin Multiplatform port of shadcn/ui for Jetpack Compose. Live at `shadcn-compose.site`.

## Tech stack

- **Vue 3** (`<script setup lang="ts">`) + **TypeScript 5.8** + **Vite 7**
- **Tailwind CSS 4** with CSS variables (oklch color space)
- **shadcn-vue** (new-york style) with **reka-ui** headless primitives
- **Bun** as package manager
- **vue-router 4** (manual route definitions)
- **Markdown as pages** via `unplugin-vue-markdown` with PrismJS syntax highlighting
- Deployed on **Cloudflare Workers** (wrangler)

## Commands

```bash
bun install        # install dependencies
bun run dev        # start dev server
bun run build      # type-check (vue-tsc) + production build
bun run preview    # preview production build
```

No linter, formatter, or test runner is configured. `bun run build` is the only verification step.

## Project structure

```
src/
├── main.ts                          # Entry point, global component registration
├── style.css                        # Tailwind config, CSS variables, Prism overrides
├── router/index.ts                  # All route definitions (manual)
├── components/ui/                   # shadcn-vue components (each in own folder + index.ts)
├── components/ui/markdown-components/  # Vue components embeddable in .md pages
├── components/docs/                 # Docs-specific components (CodeConverter)
├── layouts/                         # DocsLayout, sidebar nav components
├── pages/docs/                      # Getting-started .md pages
├── pages/components/                # Per-component .md documentation
├── lib/utils.ts                     # cn() helper (clsx + tailwind-merge)
├── lib/component-menu.ts            # Sidebar menu data for components
├── composables/                     # Vue composables
└── types/                           # Shared TypeScript types
```

## How things work

### Adding a new documentation page
1. Create a `.md` file in `src/pages/docs/` or `src/pages/components/`
2. Add the route in `src/router/index.ts` under the `/docs` children array
3. If it's a component page, also add it to `src/lib/component-menu.ts` and the `Component` union type in `src/types/content.ts`

### Adding a new markdown-embeddable component
1. Create the `.vue` component
2. Register it globally in `src/main.ts` via `app.component("Name", Component)`

### UI components
- Follow shadcn-vue patterns: folder under `src/components/ui/<name>/` with `index.ts` barrel export
- Use `cva` from `class-variance-authority` for variants
- Use `cn()` from `@/lib/utils` for class merging
- Extend `PrimitiveProps` from `reka-ui` for base component props

## Conventions

- Path alias: `@` maps to `src/`
- Use `import type` for type-only imports
- Vue components use PascalCase filenames; route paths use kebab-case
- Props: `defineProps<Props>()` with `withDefaults()` when needed
- Tailwind classes directly in templates; no external CSS unless scoped overrides are needed
