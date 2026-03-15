# Task 1: Scaffold TanStack Start Project

**Priority**: Critical (blocks all other tasks)
**Depends on**: None

## Objective

Initialize a new TanStack Start project alongside the existing Vue codebase. The new project will live in a separate branch and eventually replace the current source.

## Steps

1. **Create a new branch** (`feat/tanstack-start-migration`) from `master`

2. **Remove Vue-specific files** (keep `public/`, content `.md` files, and shared assets):
   - Delete `src/App.vue`, `src/main.ts`, `src/vite-env.d.ts`
   - Delete `src/router/index.ts`
   - Keep `src/lib/utils.ts`, `src/lib/component-menu.ts`, `src/types/content.ts` (reusable)

3. **Update `package.json`** — replace Vue dependencies with React + TanStack Start:
   - Remove: `vue`, `vue-router`, `@vitejs/plugin-vue`, `vue-tsc`, `reka-ui`, `lucide-vue-next`, `vue-sonner`, `@unhead/vue`, `@vueuse/core`, `unplugin-vue-markdown`, `vite-plugin-pages`, `markdown-it-prism`, `prismjs`
   - Add: `react`, `react-dom`, `@tanstack/react-start`, `@tanstack/react-router`, `@vitejs/plugin-react`, `lucide-react`, `sonner`
   - Add (MDX): `@mdx-js/rollup`, `@mdx-js/react`, `remark-gfm`, `remark-frontmatter`, `remark-mdx-frontmatter`, `rehype-pretty-code`, `shiki`, `rehype-slug`, `rehype-autolink-headings`
   - Add (types): `@types/react`, `@types/react-dom`
   - Keep: `tailwindcss`, `@tailwindcss/vite`, `@tailwindcss/typography`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `vite`, `typescript`, `@types/node`

4. **Rewrite `vite.config.ts`**:
   - Replace vue plugin with `@vitejs/plugin-react`
   - Add `tanstackStart()` plugin from `@tanstack/react-start/plugin/vite`
   - Add `mdx()` plugin from `@mdx-js/rollup` with remark/rehype plugins
   - Keep `@tailwindcss/vite` plugin
   - Keep `@` path alias

5. **Update `tsconfig.json`**:
   - Add `"jsx": "react-jsx"` to compiler options
   - Remove `@vue/tsconfig` reference
   - Update paths if needed

6. **Create core TanStack Start files**:
   - `src/router.tsx` — router instance creation
   - `src/routes/__root.tsx` — root layout with HTML shell, CSS import, global providers

7. **Update `package.json` scripts**:
   - `"dev": "vite"`
   - `"build": "vite build"`
   - `"preview": "vite preview"`

8. **Run `bun install`** and verify the dev server starts with a blank page

## Acceptance Criteria

- `bun run dev` starts successfully and renders a blank page
- TanStack Router generates `routeTree.gen.ts`
- Tailwind CSS is loaded (verify by adding a test class in `__root.tsx`)
- No Vue dependencies remain in `package.json`

## Estimated Scope

~10 files created/modified
