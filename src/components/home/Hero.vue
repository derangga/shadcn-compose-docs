<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-vue-next";

const emit = defineEmits<{
  (e: "scrollTo"): void;
}>();

function scrollDown() {
  emit("scrollTo");
}
</script>
<template>
  <section
    id="hero"
    class="relative py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden"
  >
    <div class="container relative px-4 md:px-6 text-center max-w-4xl">
      <h1
        class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8"
      >
        <span class="text-foreground">Build beautiful</span>
        <br />
        <span
          class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
        >
          components faster
        </span>
      </h1>

      <p
        class="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
      >
        shadcn-compose is inspired by
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-foreground underline"
          >shadcn</a
        >, providing beautifully designed components that you can copy and paste
        into your apps. Accessible, customizable, and open source.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button as-child size="lg">
          <router-link to="/docs/installation"> Get Started </router-link>
        </Button>
        <Button variant="ghost" size="lg" as-child>
          <router-link to="/docs/components"> View Components </router-link>
        </Button>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <Button
        variant="ghost"
        size="icon"
        class="animate-bounce"
        @click="scrollDown"
      >
        <ChevronDown class="h-6 w-6" />
        <span class="sr-only">Scroll down</span>
      </Button>
    </div>
  </section>
</template>
