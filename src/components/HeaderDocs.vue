<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
<template>
  <h1
    class="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl"
  >
    {{ title }}
  </h1>
  <p class="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
    {{ description }}
  </p>
</template>
