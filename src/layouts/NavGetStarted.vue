<script setup lang="ts">
import { Cuboid, Info, Package, Palette, SquareCode } from "lucide-vue-next";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface Props {
  activeRoute: string;
}

const props = defineProps<Props>();

const guides = [
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
  {
    title: "Tailwind to Kotlin",
    url: "/docs/tailwind-to-kotlin",
    icon: SquareCode,
  },
  {
    title: "Components",
    url: "/docs/components",
    icon: Cuboid,
  },
];

const isMenuItemActive = (itemUrl: string) => {
  return props.activeRoute === itemUrl;
};
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Get Started</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in guides" :key="item.title">
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
</template>
