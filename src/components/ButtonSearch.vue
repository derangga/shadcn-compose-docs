<script setup lang="ts">
import { Button } from "./ui/button";
import { Search } from "lucide-vue-next";
</script>
<template>
  <Button
    class="inline-flex items-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
  >
    <Search class="h-4 w-4" />
    <span class="hidden lg:inline-flex"> Search documentation... </span>
    <span class="inline-flex lg:hidden"> Search... </span>
    <kbd
      class="hidden lg:inline-flex items-center pointer-events-none h-5 select-none gap-1 rounded border border-border bg-muted font-sans font-medium min-h-4 text-[10px] px-1 absolute right-[0.3rem] top-[0.3rem] opacity-100 sm:flex"
    >
      ⌘ K
    </kbd>
  </Button>
</template>
