# Migration Context: Full Source Reference

This file contains the complete source code of every Vue component and supporting file that needs to be migrated to React/TanStack Start. Use this as a reference during implementation — no need to re-read the original files.

---

## 1. Entry Points

### `src/main.ts`
```ts
import { createApp } from "vue";
import router from "./router";
import "prismjs/themes/prism.css";
import "./style.css";
import _ from "prismjs";
import App from "./App.vue";
import TabPreview from "./components/ui/markdown-components/TabPreview.vue";
import Steps from "./components/ui/markdown-components/Steps.vue";
import HeaderDocs from "./components/ui/markdown-components/HeaderDocs.vue";
import EditThisPage from "./components/ui/markdown-components/EditThisPage.vue";
import DocsPage from "./components/ui/markdown-components/DocsPage.vue";
import Preview from "./components/ui/markdown-components/Preview.vue";
import CodeWithFilename from "./components/ui/markdown-components/CodeWithFilename.vue";
import CodeConverter from "./components/docs/CodeConverter.vue";
import { createHead } from "@unhead/vue/client";

const app = createApp(App);
const head = createHead({
  init: [{ title: 'Shadcn Compose', htmlAttrs: { lang: 'en' } }]
});
app.component("TabPreview", TabPreview);
app.component("Steps", Steps);
app.component("HeaderDocs", HeaderDocs);
app.component("EditThisPage", EditThisPage);
app.component("DocsPage", DocsPage);
app.component("Preview", Preview);
app.component("CodeWithFilename", CodeWithFilename);
app.component("CodeConverter", CodeConverter);
app.use(router);
app.use(head);
app.mount("#app");
```

### `src/App.vue`
```vue
<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
</script>
<template>
  <router-view />
  <Toaster />
</template>
```

### `src/router/index.ts`
Manual route definitions — 30 routes total under `/docs` with `DocsLayout` as parent layout. All component routes are lazy-loaded.

### `index.html`
- Favicon: `/android-fav.webp`
- Title: "Shadcn Compose"
- Mount: `<div id="app"></div>`

---

## 2. Layout Components

### `src/layouts/DocsLayout.vue`
```vue
<script setup lang="ts">
import { Android } from "@/components/ui/icons";
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import TableOfContents from "@/components/TableOfContents.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import SidebarFooter from "@/components/ui/sidebar/SidebarFooter.vue";
import NavComponents from "./NavComponents.vue";
import NavGetStarted from "./NavGetStarted.vue";
import NavFooter from "./NavFooter.vue";

const route = useRoute();
const pathname = computed(() => route.path);
const hideTocPaths = ["/docs/components"];
</script>
<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader class="px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" as-child>
              <router-link to="/">
                <div class="flex aspect-square size-8 items-center justify-center rounded-lg border text-sidebar-primary-foreground">
                  <Android class="size-4" />
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">Documentation</span>
                  <span class="truncate text-xs">Compose Components</span>
                </div>
              </router-link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent class="px-4">
        <NavGetStarted :active-route="pathname" />
        <NavComponents :active-route="pathname" />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Documentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="relative px-6 lg:gap-10 lg:grid lg:grid-cols-[1fr_280px]">
        <div class="overflow-y-auto scrollbar-hide h-screen px-3 sm:px-0">
          <router-view class="prose dark:prose-invert mx-auto" />
        </div>
        <TableOfContents title="On This Page" :hide-on-paths="hideTocPaths" :max-level="3" :min-level="2" content-selector=".prose" heading-selector="h2, h3" scroll-container-selector=".overflow-y-auto" :multiple-active="true" :offset-top="100" container-class="w-64 pl-4" class="pr-6" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
<style lang="css" scoped>
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
:deep(.prose h1), :deep(.prose h2), :deep(.prose h3), :deep(.prose h4), :deep(.prose h5), :deep(.prose h6) { scroll-margin-top: 100px; }
</style>
```

### `src/layouts/NavGetStarted.vue`
```vue
<script setup lang="ts">
import { Cuboid, Info, Package, Palette, SquareCode } from "lucide-vue-next";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface Props { activeRoute: string; }
const props = defineProps<Props>();

const guides = [
  { title: "Introduction", url: "/docs/introduction", icon: Info },
  { title: "Installation", url: "/docs/installation", icon: Package },
  { title: "Theming", url: "/docs/theming", icon: Palette },
  { title: "Tailwind to Kotlin", url: "/docs/tailwind-to-kotlin", icon: SquareCode },
  { title: "Components", url: "/docs/components", icon: Cuboid },
];

const isMenuItemActive = (itemUrl: string) => props.activeRoute === itemUrl;
</script>
<template>
  <SidebarGroup>
    <SidebarGroupLabel>Get Started</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in guides" :key="item.title">
          <SidebarMenuButton as-child :class="cn(isMenuItemActive(item.url) && 'bg-sidebar-accent')">
            <router-link :to="item.url">
              <component :is="item.icon" />
              <span>{{ item.title }}</span>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
```

### `src/layouts/NavComponents.vue`
```vue
<script setup lang="ts">
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import componentMenus from "@/lib/component-menu";

interface Props { activeRoute: string; }
const props = defineProps<Props>();
const menus = componentMenus;
const isMenuItemActive = (itemUrl: string) => props.activeRoute === itemUrl;
</script>
<template>
  <SidebarGroup>
    <SidebarGroupLabel>Components</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in menus" :key="item.title">
          <SidebarMenuButton as-child :class="cn(isMenuItemActive(item.url) && 'bg-sidebar-accent')">
            <router-link :to="item.url">{{ item.title }}</router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
```

### `src/layouts/NavFooter.vue`
```vue
<script setup lang="ts">
import ButtonTheme from "@/components/home/ButtonTheme.vue";
import { Github } from "@/components/ui/icons";
import { ref, onMounted } from "vue";

const isDark = ref(false);

function toggleDarkMode() {
  isDark.value = !isDark.value;
  updateTheme();
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDark.value = savedTheme === "dark" || (!savedTheme && prefersDark);
  updateTheme();
});

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
</script>
<template>
  <div class="flex text-fd-muted-foreground items-center justify-between border-t px-4 py-3">
    <a class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-8 h-8">
      <Github class="w-6 h-6" />
    </a>
    <ButtonTheme :is-dark="isDark" @click="toggleDarkMode" />
  </div>
</template>
```

---

## 3. Home Page Components

### `src/pages/HomeView.vue`
```vue
<script setup lang="ts">
import Header from "@/components/home/Header.vue";
import Hero from "@/components/home/Hero.vue";
import Examples from "@/components/home/Examples.vue";
import { useTemplateRef } from "vue";
import { useHead } from "@unhead/vue";

type ExamplesInst = InstanceType<typeof Examples> & { examplesInner?: HTMLElement; };
useHead({
  title: "Shadcn Compose",
  meta: [
    { property: "og:title", content: "Shadcn Compose" },
    { property: "og:description", content: "shadcn-compose is inspired by shadcn, providing beautifully designed components that you can copy and paste into your apps. Accessible, customizable, and open source." },
    { property: "og:url", content: "https://shadcn-compose.site/" },
    { property: "og:image", content: "/og-image.webp" },
    { property: "og:type", content: "website" },
  ],
});

const examplesSection = useTemplateRef<ExamplesInst>("examples");
function scrollToExamples() {
  examplesSection.value?.examplesInner?.scrollIntoView({ behavior: "smooth" });
}
</script>
<template>
  <Header />
  <div class="container mx-auto overflow-hidden">
    <Hero @scroll-to="scrollToExamples" />
    <Examples ref="examples" />
  </div>
</template>
```

### `src/components/home/Header.vue`
Full source with NavigationMenu, Sheet for mobile, dark mode toggle, GitHub link. Uses `isDark` ref + `localStorage` + `document.documentElement.classList`. Routes: `["/docs/installation", "/docs/components"]`.

### `src/components/home/Hero.vue`
Section with gradient heading "Build beautiful components faster", two CTA buttons (Get Started → `/docs/installation`, View Components → `/docs/components`), bounce arrow button that emits `scrollTo`.

### `src/components/home/Examples.vue`
Two code comparison cards (React shadcn/ui vs Kotlin shadcn compose) with Prism syntax highlighting and copy-to-clipboard. Uses `prismjs/components/prism-kotlin` and `prism-jsx`. Exposes `examplesInner` ref.

### `src/components/home/ButtonTheme.vue`
Simple button toggling Sun/Moon icon, emits `click` event.
```vue
<script setup lang="ts">
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-vue-next";
defineProps<{ isDark: boolean; }>();
const emit = defineEmits<{ (e: "click"): void; }>();
function toggleDarkMode() { emit("click"); }
</script>
<template>
  <Button variant="ghost" size="icon" @click="toggleDarkMode" aria-label="Toggle dark mode">
    <Sun v-if="isDark" class="w-4 h-4" />
    <Moon v-else class="w-4 h-4" />
  </Button>
</template>
```

---

## 4. Markdown-Embeddable Components

### `DocsPage.vue`
Wraps page content with title (h1), description (p), Separator, slot for content, and EditThisPage link. Also calls `useHead()` for SEO with og:title, og:description, og:url, og:image, og:type, twitter:card, twitter:title, twitter:description.

**Key**: In React version, SEO moves to route `head()` — this component only renders the visual wrapper.

Props: `title: string`, `description: string`, `path: string` (GitHub source path).
GitHub URL: `https://github.com/derangga/shadcn-compose-docs/tree/master/src/${path}`

### `HeaderDocs.vue`
Simple: h1 + p + Separator. Props: `title`, `description`.

### `TabPreview.vue`
Tabs component wrapping dynamic named slots. Props: `name` (default tab, default "Preview"), `names` (tab names array, default `["Preview", "Code"]`), `align`.

**React approach (approved)**: Compound component `TabPreview.Panel` pattern.

### `Preview.vue`
Lazy-loads images from `https://img.shadcn-compose.site/assets/components/{name}/{variant}{ext}`. Uses IntersectionObserver for lazy loading + Skeleton placeholder. Props: `name`, `variant`, `assetExtension` (default `.webp`), `align`.

### `Steps.vue`
Simple wrapper div with Tailwind CSS counter classes:
```
class="steps mb-12 ml-4 border-l border-gray-200 pl-8 [counter-reset:step] [&>h4]:step [&>h4]:[counter-increment:step] [&>h4::before]:content-[counter(step)] [&>h4::before]:inline-flex [&>h4::before]:h-8 [&>h4::before]:w-8 [&>h4::before]:items-center [&>h4::before]:justify-center [&>h4::before]:rounded-full [&>h4::before]:bg-muted [&>h4::before]:text-sm [&>h4::before]:font-medium [&>h4::before]:text-foreground [&>h4::before]:mr-3 [&>h4::before]:ml-[-3rem] [&>h4]:flex [&>h4]:items-center"
```

### `EditThisPage.vue`
Link with SquarePen icon. Props: `source: string` (full GitHub URL).

### `CodeWithFilename.vue`
Bordered wrapper with filename header. Props: `filename: string`. Scoped styles for `.code-block-wrapper` (margin, border-radius, overflow hidden) and nested `pre` margin reset.

### `CodeConverter.vue`
CSS-to-Kotlin converter tool. Contains:
- `tailwindToKotlin()` function (~360 lines of pure JS logic): parses CSS blocks, extracts `:root` and `.dark` vars, converts hex/hsl/rgb colors to Kotlin `Color(0x...)`, converts shadow values to Kotlin `BoxShadow`. Generates Kotlin class implementing `ShadcnStyles` interface.
- UI: Card with Textarea input, Button to convert, Dialog showing highlighted output with copy button.
- Dependencies: `@vueuse/core` (useClipboard), `prismjs` (highlight), `vue-sonner` (toast), shadcn components (Card, Button, Textarea, Dialog, Alert, Label).

---

## 5. Table of Contents

### `src/composables/useTableOfContents.ts`
240-line composable. Key logic:
- `extractHeadings()` — queries DOM for headings matching selector, auto-generates IDs from text
- `updateActiveHeading()` — calculates visible/active headings based on scroll position with throttling
- `scrollToHeading()` — smooth scroll to heading with offset, updates `history.pushState`
- Watches `route.fullPath` to re-extract headings on navigation
- Returns: `headings`, `activeHeading`, `visibleHeadings`, `scrollToHeading`, `refresh`, etc.

### `src/components/TableOfContents.vue`
165-line component. Props: `title`, `maxLevel`, `minLevel`, `containerClass`, `hideOnPaths`, `contentSelector`, `headingSelector`, `scrollContainerSelector`, `offsetTop`, `multipleActive`, `showIndicators`, `visibilityBuffer`. Renders sticky aside with heading links, indent by level, active/visible state classes.

---

## 6. Custom Icons

### `Android.vue`
SVG with green Android robot path and black eye paths. `viewBox="0 0 256 150"`, `width="1.71em"`, `height="1em"`.

### `Github.vue`
SVG with `fill="currentColor"` GitHub octocat path. `viewBox="0 0 256 250"`, `width="1.03em"`, `height="1em"`.

---

## 7. Shared Data Files (reuse as-is)

### `src/lib/component-menu.ts`
Array of 26 `{ title, url }` objects for sidebar navigation.

### `src/types/content.ts`
Types: `Content { image, code }`, `Variant { name, content }`, `Component` (union of 26 component slug strings).

### `src/lib/utils.ts`
```ts
import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }
```

---

## 8. Markdown Content Pattern

Every `.md` file follows this structure:
```md
---
title: ComponentName
description: Short description.
---

<DocsPage :title="frontmatter.title" :description="frontmatter.description" path="pages/components/ComponentName.md">

## Variant Name

<TabPreview>
<template #Preview>
<Preview name="component-slug" variant="variant-slug"/>
</template>
<template #Code>

` ` `kotlin
// Kotlin code example
` ` `

</template>
</TabPreview>

</DocsPage>
```

Special cases:
- Some components use `assetExtension=".gif"` on Preview (Tabs, Dialog, etc.)
- Sidebar.md uses `<Steps>` + `<CodeWithFilename>` instead of TabPreview
- Installation.md uses `<TabPreview name="Groovy" :names="['Groovy', 'Kotlin']">` with named slots for different build configs
- TailwindToKotlin.md uses `<CodeConverter/>`

---

## 9. Config Files

### `vite.config.ts`
Plugins: vue (with .md support), tailwindcss, Markdown (with Prism), Pages. Path alias `@` → `./src`.

### `tsconfig.json`
References `tsconfig.app.json` and `tsconfig.node.json`. Path `@/*` → `./src/*`.

### `components.json` (shadcn-vue)
Style: new-york, typescript, neutral base, cssVariables, lucide icons. Aliases: components `@/components`, composables `@/composables`, utils `@/lib/utils`, ui `@/components/ui`, lib `@/lib`.

### `wrangler.jsonc`
Static SPA deployment, `dist/` directory, domain `shadcn-compose.site`, SPA not-found handling.

### `public/`
- `android-fav.webp` (favicon, 700B)
- `og-image.webp` (OG image, 2KB)

---

## 10. MDX Migration: TabPreview Pattern (Approved)

Vue named slots → React compound component:
```mdx
<TabPreview names={["Preview", "Code"]}>
  <TabPreview.Panel name="Preview">
    <Preview name="button" variant="default" />
  </TabPreview.Panel>
  <TabPreview.Panel name="Code">
    ```kotlin
    // code here
    ```
  </TabPreview.Panel>
</TabPreview>
```
