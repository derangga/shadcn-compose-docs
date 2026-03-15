# Task 2: Port Global Styles and CSS Variables

**Priority**: Critical (blocks UI component tasks)
**Depends on**: Task 1

## Objective

Migrate the Tailwind CSS configuration, CSS custom properties (oklch color tokens), and global styles from the Vue project's `src/style.css` to the new TanStack Start project.

## Steps

1. **Create `src/styles/app.css`** and port the contents of `src/style.css`:
   - `@import "tailwindcss"` and `@import "tw-animate-css"`
   - `@plugin "@tailwindcss/typography"`
   - `@custom-variant dark` definition
   - All `:root` and `.dark` CSS custom properties (oklch color tokens) — copy verbatim
   - `@theme inline` block mapping CSS vars to Tailwind tokens — copy verbatim
   - `@layer base` rules
   - The `steps-counter` styles
   - Inline `code` styling rules

2. **Remove Prism-specific styles** (they'll be replaced by rehype-pretty-code in Task 5):
   - Remove `@import "prismjs/themes/prism-tomorrow.css"`
   - Remove the `@layer components` block targeting `.token` and `code[class*="language-"]`

3. **Import `app.css` in `__root.tsx`** using the `?url` import pattern:
   ```tsx
   import appCss from '../styles/app.css?url'
   ```

4. **Verify** Tailwind classes render correctly in the browser

## Acceptance Criteria

- Light and dark mode CSS variables are available
- Tailwind utility classes work (test with `bg-primary text-primary-foreground`)
- Typography plugin is active
- No Prism CSS remnants

## Estimated Scope

~2 files (app.css, __root.tsx update)
