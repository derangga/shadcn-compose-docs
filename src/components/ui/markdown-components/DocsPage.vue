<script setup lang="ts">
import { computed } from "vue";
import { Separator } from "../separator";
import EditThisPage from "./EditThisPage.vue";
import { useHead } from "@unhead/vue";

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    path: string;
  }>(),
  { path: "https://github.com/derangga/shadcn-compose-docs/" },
);

const source = computed(
  () =>
    `https://github.com/derangga/shadcn-compose-docs/tree/master/src/${props.path}`,
);

useHead({
  title: `${props.title} - shadcn/compose`,
  meta: [
    {
      property: "og:title",
      content: `Shadcn Compose Component: ${props.title}`,
    },
    { property: "og:description", content: props.description },
    {
      property: "og:url",
      content: `https://shadcn-compose.site/docs/${props.title.toLowerCase().replaceAll(" ", "-")}`,
    },
    { property: "og:image", content: "/og-image.webp" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:title",
      content: `Shadcn Compose Component: ${props.title}`,
    },
    { property: "twitter:description", content: props.description },
  ],
});
</script>

<template>
  <div class="mb-40">
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
  </div>
</template>
