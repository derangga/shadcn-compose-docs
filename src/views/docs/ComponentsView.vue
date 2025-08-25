<script setup lang="ts">
import { Separator } from "@/components/ui/separator";

const menus = [
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
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-foreground mb-4">Components</h1>
      <p class="text-lg text-muted-foreground">
        Here you can find all the components available in the library. We are
        working on adding more components.
      </p>
    </div>

    <Separator class="my-6" />

    <div class="container px-4 md:px-6 space-y-8 grid grid-cols-3 mx-auto">
      <router-link
        v-for="menu in menus"
        :to="menu.url"
        class="font-semibold hover:underline"
      >
        {{ menu.title }}
      </router-link>
    </div>
  </div>
</template>
