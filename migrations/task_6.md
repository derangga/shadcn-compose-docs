# Task 6: Migrate Markdown Content to MDX

**Priority**: High
**Depends on**: Task 5

## Objective

Convert all existing `.md` documentation files to `.mdx` format, create route files for each page, and verify they render correctly with the new MDX pipeline.

## Steps

### 6.1 — Convert Getting-Started Pages

Copy and adapt each markdown file from `src/pages/docs/` to `src/content/docs/`:

| Source | Target |
|--------|--------|
| `src/pages/docs/Introduction.md` | `src/content/docs/Introduction.mdx` |
| `src/pages/docs/Installation.md` | `src/content/docs/Installation.mdx` |
| `src/pages/docs/Theming.md` | `src/content/docs/Theming.mdx` |
| `src/pages/docs/TailwindToKotlin.md` | `src/content/docs/TailwindToKotlin.mdx` |

### 6.2 — Convert Component Documentation Pages

Copy and adapt each markdown file from `src/pages/components/` to `src/content/components/`:

All 26 component docs: Accordion, Alert, AlertDialog, Avatar, Badge, Button, Calendar, Card, Carousel, Checkbox, Combobox, DatePicker, Dialog, Drawer, DropdownMenu, Input, Popover, Progress, RadioGroup, Select, Sidebar, Skeleton, Slider, Sonner, Switch, Tabs.

### 6.3 — MDX Syntax Adjustments

For each converted file, apply these changes:
- **Self-closing tags**: Ensure all custom components use proper JSX self-closing syntax (`<Component />` not `<Component>`)
- **Curly braces**: Escape literal `{` and `}` that aren't JSX expressions (use `{'{'}` or wrap in backticks)
- **className**: MDX passes through HTML attributes — if any raw HTML uses `class=`, change to `className=`
- **Component imports**: Add import statements at the top of MDX files if components are not provided via the MDX provider
- **Frontmatter**: Ensure YAML frontmatter block is preserved and formatted correctly

### 6.4 — Create Route Files

For each page, create a thin route file in `src/routes/docs/`:

Getting-started routes:
- `src/routes/docs/introduction.tsx`
- `src/routes/docs/installation.tsx`
- `src/routes/docs/theming.tsx`
- `src/routes/docs/tailwind-to-kotlin.tsx`

Component routes:
- `src/routes/docs/components/index.tsx` (components overview — port `ComponentsView.vue`)
- `src/routes/docs/components/accordion.tsx`
- `src/routes/docs/components/alert.tsx`
- ... (one per component, 26 total)

Each route file follows this pattern, importing frontmatter values for SEO:
```tsx
import { createFileRoute } from '@tanstack/react-router'
import Content, { title, description } from '@/content/components/Button.mdx'
import { docsMeta } from '@/lib/seo'

export const Route = createFileRoute('/docs/components/button')({
  component: () => <Content />,
  head: () => docsMeta(title, description),
})
```

The `docsMeta()` helper (created in Task 5) generates `<title>`, `<meta name="description">`, Open Graph, and Twitter meta tags from the frontmatter values.

### 6.5 — Port ComponentsView

Convert `src/pages/docs/ComponentsView.vue` to `src/routes/docs/components/index.tsx`. This is a Vue SFC (not markdown) that lists all available components.

## Acceptance Criteria

- All 4 getting-started pages render correctly
- All 26 component documentation pages render correctly
- Syntax highlighting works in all code blocks
- Custom MDX components (TabPreview, Steps, etc.) render inside content
- All internal links between docs pages work
- ComponentsView overview page lists all components
- **SEO verification** for every page:
  - Browser tab shows `"{Page Title} - Shadcn Compose"`
  - View page source contains correct `<meta name="description">` from frontmatter
  - View page source contains correct `og:title`, `og:description`, `twitter:title`, `twitter:description` tags
  - SSR renders the meta tags server-side (not injected client-side)

## Estimated Scope

~30 MDX files + ~30 route files + 1 overview page = ~61 files
