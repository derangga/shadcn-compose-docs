<script setup lang="ts">
interface Props {
  filename: string;
}

defineProps<Props>();
</script>

<template>
  <div class="code-block-wrapper border relative bg-secondary rounded-sm">
    <div class="flex items-center justify-between px-4 py-2">
      <span class="text-sm font-medium capitalize">{{ filename }}</span>
    </div>

    <slot />
  </div>
</template>

<style scoped>
@reference "../../../style.css";

.code-block-wrapper {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
}

:deep(pre[class*="language-"]) {
  margin: 0 !important;
}
</style>
