# Style and Conventions

## TypeScript
- Strict mode enabled (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`)
- Use `import type` for type-only imports (enforced by `verbatimModuleSyntax`)
- Target: ES2022, module: ESNext, moduleResolution: bundler

## Naming
- React components: PascalCase
- Route files: kebab-case (e.g., `alert-dialog.tsx`)
- MDX content files: PascalCase (e.g., `AlertDialog.mdx`)
- Hooks: `use-kebab-case.ts`
- UI components: flat files under `src/components/ui/<name>.tsx`

## CSS / Styling
- Tailwind CSS 4 classes directly in JSX
- Use `cn()` from `@/lib/utils` for conditional class merging (clsx + tailwind-merge)
- Use `cva` from `class-variance-authority` for component variants
- No external CSS files unless necessary
- CSS variables with oklch color space

## Imports
- Path alias: `@` maps to `src/`
- Example: `import { Button } from "@/components/ui/button"`

## Component Patterns
- shadcn/ui new-york style
- Radix UI headless primitives via `radix-ui` package
- `forwardRef` pattern for UI components

## Routing (TanStack Start)
- File-based routing in `src/routes/`
- Route tree auto-generated in `src/routeTree.gen.ts` — never edit manually
- Root route (`__root.tsx`) renders full HTML document
- Head meta/SEO configured via route's `head()` function

## No linter/formatter/test configured
- Only verification: `bun run build`
