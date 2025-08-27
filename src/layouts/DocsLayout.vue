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
import TableOfContents from "@/components/TableOfContents.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { cn } from "@/lib/utils";
import componentMenus from "@/views/component_menus";

const route = useRoute();
const pathname = computed(() => route.path);

// Navigation menu items
const navigationConfig = {
  guides: [
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
  ],
  components: componentMenus,
};

const hideTocPaths = ["/docs/components"];

const isMenuItemActive = (itemUrl: string) => {
  return pathname.value === itemUrl;
};
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
        <!-- Getting Started Section -->
        <SidebarGroup>
          <SidebarGroupLabel>Get Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem
                v-for="item in navigationConfig.guides"
                :key="item.title"
              >
                <SidebarMenuButton
                  as-child
                  :class="cn(isMenuItemActive(item.url) && 'bg-sidebar-accent')"
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

        <!-- Components Section -->
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem
                v-for="item in navigationConfig.components"
                :key="item.title"
              >
                <SidebarMenuButton
                  as-child
                  :class="cn(isMenuItemActive(item.url) && 'bg-sidebar-accent')"
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

      <div
        class="px-16 relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] h-screen"
      >
        <div class="overflow-y-auto scrollbar-hide scroll-smooth">
          <router-view class="prose dark:prose-invert max-w-none" />
        </div>

        <TableOfContents
          title="On This Page"
          :hide-on-paths="hideTocPaths"
          :max-level="3"
          :min-level="2"
          content-selector=".prose"
          heading-selector="h2, h3"
          scroll-container-selector=".overflow-y-auto"
          :offset-top="100"
          container-class="w-64 pl-4"
        />
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

/* Ensure headings have proper scroll margin */
:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  scroll-margin-top: 100px;
}
</style>
