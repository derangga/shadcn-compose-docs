# Code Style & Conventions

## Vue Components
- Always use `<script setup lang="ts">` (Composition API with TypeScript)
- Props defined with `defineProps<Props>()` interface pattern, using `withDefaults()` when needed
- Props interfaces extend from reka-ui's `PrimitiveProps` for UI primitives
- Template comes after script block
- Scoped styles with `<style lang="css" scoped>` when needed

## File Organization
- UI components: `src/components/ui/<component-name>/` with `index.ts` barrel export
- Each UI component folder has an `index.ts` that re-exports the `.vue` component and any variants/types
- Layouts: `src/layouts/`
- Pages: `src/pages/` (Vue files and Markdown files)
- Composables: `src/composables/`
- Types: `src/types/`

## Naming Conventions
- Vue components: PascalCase filenames (e.g., `Button.vue`, `SidebarMenuButton.vue`)
- TypeScript files: camelCase (e.g., `utils.ts`, `component-menu.ts`)
- CSS classes: Tailwind utility classes, kebab-case for custom classes
- Route paths: kebab-case (e.g., `/docs/tailwind-to-kotlin`)

## Styling
- Tailwind CSS 4 with CSS custom properties (oklch color space)
- shadcn-vue "new-york" style variant
- `cn()` utility for merging class names (clsx + tailwind-merge)
- Dark mode via `.dark` class (custom variant)
- Component variants via `class-variance-authority` (cva)

## Imports
- Use `@/` path alias for src-relative imports
- Type imports use `import type { ... }`
