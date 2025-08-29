<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import componentMenus from "@/views/component_menus";

interface Props {
  activeRoute: string;
}

const props = defineProps<Props>();

const menus = componentMenus;

const isMenuItemActive = (itemUrl: string) => {
  return props.activeRoute === itemUrl;
};
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Components</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in menus" :key="item.title">
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
</template>
