# Task 5: Set Up MDX Pipeline and Custom Components

**Priority**: High (blocks content migration)
**Depends on**: Task 3

## Objective

Configure the MDX build pipeline with rehype-pretty-code for syntax highlighting and create the custom React components that will be used inside MDX files (replacing the globally-registered Vue components).

## Steps

### 5.1 — Configure MDX in Vite

Ensure `vite.config.ts` has the `@mdx-js/rollup` plugin configured with:

- **Remark plugins**: `remark-gfm` (tables, strikethrough, etc.), `remark-frontmatter`, `remark-mdx-frontmatter`
- **Rehype plugins**: `rehype-pretty-code` (with Shiki), `rehype-slug` (add IDs to headings), `rehype-autolink-headings`
- **rehype-pretty-code config**: Choose a theme (e.g., `github-dark` for dark mode, `github-light` for light — or use dual theme support)

### 5.2 — Create MDX Component Map

Create `src/components/mdx/mdx-components.tsx` that exports a component map for the MDX provider.

This replaces the global Vue component registration in `main.ts`. Map these custom components:

| Vue Component (globally registered) | React MDX Component |
|--------------------------------------|---------------------|
| `TabPreview` | `tab-preview.tsx` |
| `Steps` | `steps.tsx` |
| `HeaderDocs` | `header-docs.tsx` |
| `EditThisPage` | `edit-this-page.tsx` |
| `DocsPage` | `docs-page.tsx` |
| `Preview` | `preview.tsx` |
| `CodeWithFilename` | `code-with-filename.tsx` |
| `CodeConverter` | `code-converter.tsx` |

Also map HTML element overrides for consistent styling:
- `h1`, `h2`, `h3`, `h4` — add Tailwind typography classes and anchor IDs
- `code` (inline) — apply `bg-muted px-1 py-0.5 rounded font-mono text-sm`
- `pre` — integrate with rehype-pretty-code output
- `a` — style links
- `table`, `th`, `td` — table styling

### 5.3 — Create MDX Provider Wrapper

Create a wrapper component or utility that wraps MDX content with the component provider. This will be used in each route file that renders MDX.

### 5.4 — Port Each Custom Component

For each component listed in 5.2, rewrite the Vue SFC as a React component. Key components to examine:

- **`TabPreview`**: Uses shadcn Tabs to show code vs preview — port to React Tabs
- **`Steps`**: Renders numbered steps with CSS counters — port the counter CSS
- **`HeaderDocs`**: Renders page title and description from frontmatter
- **`Preview`**: Shows a component preview in a bordered container
- **`CodeConverter`**: Converts CSS/Tailwind to Kotlin code — port the logic
- **`CodeWithFilename`**: Code block with a filename header
- **`EditThisPage`**: Link to edit the page on GitHub
- **`DocsPage`**: Wraps the full docs page with header + edit link

### 5.5 — Create SEO Helper

Create `src/lib/seo.ts` with a `docsMeta()` helper function that generates the full set of meta tags from a page's `title` and `description` frontmatter values:

- `<title>` — `"{title} - Shadcn Compose"`
- `<meta name="description">` — from frontmatter `description`
- `<meta property="og:title">` — same as title
- `<meta property="og:description">` — same as description
- `<meta property="og:type">` — `"article"`
- `<meta name="twitter:title">` — same as title
- `<meta name="twitter:description">` — same as description

This helper is used in every route file's `head()` to avoid repeating the meta tag structure. Example usage:

```tsx
import Content, { title, description } from '@/content/components/Button.mdx'
import { docsMeta } from '@/lib/seo'

export const Route = createFileRoute('/docs/components/button')({
  component: () => <Content />,
  head: () => docsMeta(title, description),
})
```

The frontmatter values (`title`, `description`) are exported as named exports from each MDX file by the `remark-mdx-frontmatter` plugin configured in step 5.1.

### 5.6 — Test with a sample MDX file

Create a test MDX file that uses all custom components and verify:
- Syntax highlighting renders correctly (rehype-pretty-code)
- Custom components render inside MDX
- Frontmatter is accessible
- GFM features work (tables, task lists)

## Acceptance Criteria

- MDX files compile and render as React components
- rehype-pretty-code highlights code blocks with the chosen theme(s)
- All custom components render correctly inside MDX
- Frontmatter `title` and `description` are exported as named exports from MDX files
- `docsMeta()` helper generates correct `<title>`, description, OG, and Twitter meta tags
- GFM markdown features (tables, strikethrough, autolinks) work
- Verify in browser: view page source shows correct `<meta>` tags in `<head>`

## Estimated Scope

~13 files created (including `src/lib/seo.ts`)
