# Project Overview: shadcn-compose-docs

## Purpose
Documentation website for [shadcn-compose](https://github.com/derangga/shadcn-ui-kmp) — a Kotlin Multiplatform (KMP) 
port of shadcn/ui components for Jetpack Compose. The site documents installation, theming, and individual UI components.

Live site: `shadcn-compose.site` (deployed on Cloudflare Workers via Wrangler)

## Tech Stack
- **Framework**: Vue 3.5 with `<script setup lang="ts">` (Composition API)
- **Build Tool**: Vite 7
- **Language**: TypeScript 5.8
- **Package Manager**: Bun (bun.lock)
- **Styling**: Tailwind CSS 4 with CSS variables (oklch colors), tw-animate-css
- **UI Components**: shadcn-vue (new-york style) with reka-ui as headless primitives
- **Routing**: vue-router 4 (manual route definitions in `src/router/index.ts`)
- **Content**: Markdown files rendered as Vue components via `unplugin-vue-markdown`
- **Syntax Highlighting**: PrismJS with `prism-tomorrow` theme
- **Icons**: lucide-vue-next
- **SEO**: @unhead/vue
- **Deployment**: Cloudflare Workers (wrangler.jsonc)

## Key Architecture Decisions
- Documentation pages are `.md` files in `src/pages/docs/` and `src/pages/components/`
- Markdown files support embedded Vue components (TabPreview, Steps, HeaderDocs, etc.) registered globally in `main.ts`
- UI components follow shadcn-vue patterns: each in its own folder under `src/components/ui/`
- Component variants defined with `class-variance-authority` (cva)
- Utility function `cn()` (clsx + tailwind-merge) in `src/lib/utils.ts`
- Path alias: `@` → `src/`
- No ESLint, Prettier, or other linting tools configured
- No test framework configured
