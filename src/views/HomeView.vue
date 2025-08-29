<script setup lang="ts">
import Header from "@/components/home/Header.vue";
import Hero from "@/components/home/Hero.vue";
import Examples from "@/components/home/Examples.vue";
import { useTemplateRef } from "vue";

type ExamplesInst = InstanceType<typeof Examples> & {
  examplesInner?: HTMLElement;
};

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
