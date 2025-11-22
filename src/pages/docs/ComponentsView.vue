<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import componentMenus from "../component_menus";
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

    <div
      class="not-prose container px-4 md:px-6 space-y-8 grid grid-cols-3 mx-auto"
    >
      <router-link
        v-for="menu in componentMenus"
        :to="menu.url"
        class="text-lg font-medium underline-offset-4 hover:underline md:text-base"
      >
        {{ menu.title }}
      </router-link>
    </div>
  </div>
</template>
