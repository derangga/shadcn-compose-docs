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
import { computed } from "vue";
import { cn } from "@/lib/utils";

const route = useRoute();

const pathname = computed(() => route.path);

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

const componentMenus = [
  {
    title: "Accordion",
    url: "/docs/components/accordion",
  },
  {
    title: "Alert",
    url: "/docs/components/alert",
  },
  {
    title: "Alert Dialog",
    url: "#",
  },
  {
    title: "Avatar",
    url: "#",
  },
  {
    title: "Badge",
    url: "#",
  },
  {
    title: "Button",
    url: "/docs/components/button",
  },
  {
    title: "Bottom Sheet",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Card",
    url: "#",
  },
  {
    title: "Checkbox",
    url: "#",
  },
  {
    title: "Combobox",
    url: "#",
  },
  {
    title: "Date Picker",
    url: "#",
  },
  {
    title: "Dialog",
    url: "#",
  },
  {
    title: "Dropdown Menu",
    url: "#",
  },
  {
    title: "Input",
    url: "#",
  },
  {
    title: "Popover",
    url: "#",
  },
  {
    title: "Progress",
    url: "#",
  },
  {
    title: "Radio Group",
    url: "#",
  },
  {
    title: "Select",
    url: "#",
  },
  {
    title: "Skeleton",
    url: "#",
  },
  {
    title: "Select",
    url: "#",
  },
  {
    title: "Slider",
    url: "#",
  },
  {
    title: "Sonner",
    url: "#",
  },
  {
    title: "Switch",
    url: "#",
  },
  {
    title: "Tabs",
    url: "#",
  },
];
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

      <div class="prose dark:prose-invert flex flex-1 flex-col gap-4 p-4 pt-0">
        <router-view />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
