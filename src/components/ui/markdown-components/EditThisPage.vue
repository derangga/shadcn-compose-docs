<script setup lang="ts">
import { SquarePen } from "lucide-vue-next";

interface Props {
  source: string;
}
defineProps<Props>();
</script>

<template>
  <a
    :href="source"
    target="_blank"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 underline mt-8"
  >
    <SquarePen />
    Edit this page on GitHub
  </a>
</template>
