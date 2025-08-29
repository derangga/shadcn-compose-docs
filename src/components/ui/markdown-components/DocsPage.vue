<script setup lang="ts">
import { computed } from "vue";
import { Separator } from "../separator";
import EditThisPage from "./EditThisPage.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    path: string;
  }>(),
  { path: "https://github.com/derangga/shadcn-compose-docs/" }
);

const source = computed(
  () =>
    `https://github.com/derangga/shadcn-compose-docs/tree/master/src/${props.path}`
);
</script>

<template>
  <div>
    <h1
      class="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl text-foreground"
    >
      {{ title }}
    </h1>
    <p class="text-muted-foreground text-[1.05rem] sm:text-base">
      {{ description }}
    </p>
    <Separator />
  </div>
  <slot />
  <EditThisPage :source="source" />
</template>
