<script setup lang="ts">
import Header from "@/components/home/Header.vue";
import Hero from "@/components/home/Hero.vue";
import Examples from "@/components/home/Examples.vue";
import { useTemplateRef } from "vue";
import { useHead } from "@unhead/vue";

type ExamplesInst = InstanceType<typeof Examples> & {
  examplesInner?: HTMLElement;
};
useHead({
  title: "Shadcn Compose",
  meta: [
    {
      property: "og:title",
      content: `Shadcn Compose`,
    },
    {
      property: "og:description",
      content:
        "shadcn-compose is inspired by shadcn, providing beautifully designed components that you can copy and paste into your apps. Accessible, customizable, and open source.",
    },
    {
      property: "og:url",
      content: "https://shadcn-compose.site/",
    },
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
