# Task 4: Build Docs Layout and Navigation

**Priority**: High (blocks page migration)
**Depends on**: Task 3

## Objective

Recreate the documentation layout (sidebar, breadcrumb, table of contents) as React components using shadcn/ui, matching the current Vue `DocsLayout.vue` structure.

## Steps

### 4.1 — Port Layout Components

Rewrite each Vue layout component as a React component:

| Vue Source | React Target |
|------------|--------------|
| `src/layouts/DocsLayout.vue` | `src/routes/docs/_layout.tsx` (TanStack Router layout route) |
| `src/layouts/NavGetStarted.vue` | `src/components/nav-get-started.tsx` |
| `src/layouts/NavComponents.vue` | `src/components/nav-components.tsx` |
| `src/layouts/NavFooter.vue` | `src/components/nav-footer.tsx` |

The docs layout route (`_layout.tsx`) should:
- Use shadcn/ui `SidebarProvider`, `Sidebar`, `SidebarInset`
- Include breadcrumb navigation
- Include the table of contents panel
- Render child routes via `<Outlet />`

### 4.2 — Port Table of Contents

| Vue Source | React Target |
|------------|--------------|
| `src/components/TableOfContents.vue` | `src/components/table-of-contents.tsx` |
| `src/composables/useTableOfContents.ts` | `src/hooks/use-table-of-contents.ts` |

Convert the Vue composable to a React hook. The hook should:
- Accept a content selector and heading selector
- Use `IntersectionObserver` to track active headings
- Return the list of headings and active heading IDs

### 4.3 — Port Home Page

| Vue Source | React Target |
|------------|--------------|
| `src/pages/HomeView.vue` | `src/routes/index.tsx` |
| `src/components/home/Hero.vue` | `src/components/home/hero.tsx` |
| `src/components/home/Header.vue` | `src/components/home/header.tsx` |
| `src/components/home/Examples.vue` | `src/components/home/examples.tsx` |
| `src/components/home/ButtonTheme.vue` | `src/components/home/button-theme.tsx` |
| `src/components/ButtonSearch.vue` | `src/components/button-search.tsx` |

### 4.4 — Port Icon Components

| Vue Source | React Target |
|------------|--------------|
| `src/components/ui/icons/Android.vue` | `src/components/icons/android.tsx` |
| `src/components/ui/icons/Github.vue` | `src/components/icons/github.tsx` |

### 4.5 — Port Shared Data Files

These TypeScript files are framework-agnostic and can be copied with minimal changes:
- `src/lib/component-menu.ts` — copy as-is
- `src/types/content.ts` — copy as-is

## Acceptance Criteria

- Docs layout renders with sidebar, breadcrumb, and TOC panel
- Sidebar navigation links work (even if target pages are placeholder)
- Home page renders with hero, header, and examples sections
- Table of contents tracks headings on scroll
- Mobile sidebar toggle works

## Estimated Scope

~15 files created/modified
