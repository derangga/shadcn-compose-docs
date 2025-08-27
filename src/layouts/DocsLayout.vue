<script setup lang="ts">
import { Info, Package, Palette } from "lucide-vue-next";
import { Android } from "@/components/ui/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { useRoute } from "vue-router";
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { cn } from "@/lib/utils";
import componentMenus from "@/views/component_menus";

const route = useRoute();

const pathname = computed(() => route.path);

const headings = ref<{ id: string; text: string; level: number }[]>([]);
const activeHeading = ref("");

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    generateHeadings();
  }
);

// Menu items for the sidebar
const guideMenus = [
  {
    title: "Introduction",
    url: "/docs/introduction",
    icon: Info,
  },
  {
    title: "Installation",
    url: "/docs/installation",
    icon: Package,
  },
  {
    title: "Theming",
    url: "/docs/theming",
    icon: Palette,
  },
];

let scrollContainer: HTMLElement | null = null;

function generateHeadings() {
  const content = document.querySelector(".prose");
  if (!content) return;

  headings.value = Array.from(content.querySelectorAll("h2, h3")).map((el) => {
    const id =
      el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
    el.id = id;
    return {
      id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    };
  });
}

function handleScroll() {
  if (!scrollContainer) return;
  const scrollY = scrollContainer.scrollTop;
  let current = "";
  for (const h of headings.value) {
    const el = document.getElementById(h.id);
    if (el && el.offsetTop - 100 <= scrollY) {
      current = h.id;
    }
  }
  activeHeading.value = current;
}

onMounted(async () => {
  await nextTick();
  generateHeadings();

  scrollContainer = document.querySelector(".overflow-y-auto");
  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" as-child>
              <router-link to="/">
                <div
                  class="flex aspect-square size-8 items-center justify-center rounded-lg border text-sidebar-primary-foreground"
                >
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

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Get Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in guideMenus" :key="item.title">
                <SidebarMenuButton
                  as-child
                  :class="cn(pathname === item.url && 'bg-sidebar-accent')"
                >
                  <router-link :to="item.url">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                  </router-link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in componentMenus" :key="item.title">
                <SidebarMenuButton
                  as-child
                  :class="cn(pathname === item.url && 'bg-sidebar-accent')"
                >
                  <router-link :to="item.url">
                    {{ item.title }}
                  </router-link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="/"> Home </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Documentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div
        class="px-16 relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] h-screen"
      >
        <div class="overflow-y-auto scrollbar-hide scroll-smooth">
          <router-view class="prose dark:prose-invert" />
        </div>
        <aside
          v-if="pathname !== '/docs/components'"
          class="w-64 pl-4 hidden lg:block"
        >
          <h2 class="text-sm font-medium">On This Page</h2>
          <ul class="mt-2 space-y-1 text-sm">
            <li v-for="h in headings" :key="h.id">
              <a
                :href="`#${h.id}`"
                :class="[
                  activeHeading === h.id
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground',
                  h.level === 3 ? 'ml-4' : '',
                ]"
              >
                {{ h.text }}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style lang="css" scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
