# Task 8: Cleanup and Final Verification

**Priority**: Medium
**Depends on**: Tasks 4, 6, 7

## Objective

Remove all remaining Vue artifacts, update project documentation, and perform a full end-to-end verification of the migrated site.

## Steps

### 8.1 — Remove Vue Artifacts

- Delete any remaining `.vue` files
- Delete `src/composables/` directory (replaced by `src/hooks/`)
- Delete old `src/pages/` directory (content moved to `src/content/`, routes in `src/routes/`)
- Delete old `src/router/` directory
- Remove `@vue/tsconfig` from `tsconfig.json` references
- Remove `tsconfig.app.json` and `tsconfig.node.json` if no longer needed
- Clean up any unused dependencies in `package.json`

### 8.2 — Update Configuration Files

- Update `CLAUDE.md` to reflect the new stack (TanStack Start, React, MDX)
- Update `AGENTS.md` symlink if needed
- Update `README.md` with new development instructions
- Update `.gitignore` to include:
  - `routeTree.gen.ts` (or don't — team preference)
  - `.content-collections/` if using content-collections
  - `.wrangler/`

### 8.3 — Full Verification Checklist

Run through every page and feature:

- [ ] Home page loads and renders correctly
- [ ] All getting-started docs pages render (Introduction, Installation, Theming, TailwindToKotlin)
- [ ] All 26 component docs pages render
- [ ] Sidebar navigation works (all links, active state highlighting)
- [ ] Table of contents tracks headings on scroll
- [ ] Breadcrumb shows correct path
- [ ] Dark mode toggle works
- [ ] Mobile responsive layout (sidebar collapses, hamburger menu)
- [ ] Code blocks have syntax highlighting (rehype-pretty-code)
- [ ] Custom MDX components render (TabPreview, Steps, Preview, etc.)
- [ ] CodeConverter component works
- [ ] Internal links navigate correctly (client-side)
- [ ] Page titles update correctly (check browser tab)
- [ ] `bun run build` succeeds without errors
- [ ] `bun run preview` serves the site correctly via Wrangler
- [ ] View page source shows SSR-rendered HTML

### 8.4 — Performance Sanity Check

- Compare bundle size with the Vue build
- Verify no unnecessary client JS is shipped (syntax highlighting should be build-time only)
- Check Lighthouse score on a sample page

## Acceptance Criteria

- No `.vue` files remain in the project
- No Vue dependencies in `package.json`
- All pages and features pass the verification checklist
- `bun run build` succeeds cleanly
- Site is deployable to Cloudflare Workers

## Estimated Scope

File deletions + ~3 files updated + manual testing
