<script setup lang="ts">
import ButtonTheme from "@/components/home/ButtonTheme.vue";
import { Github } from "@/components/ui/icons";
import { ref } from "vue";

const isDark = ref(false);

function toggleDarkMode() {
  isDark.value = !isDark.value;
  updateTheme();
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
</script>
<template>
  <div
    class="flex text-fd-muted-foreground items-center justify-between border-t px-4 py-3"
  >
    <a
      class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-8 h-8"
    >
      <Github class="w-6 h-6" />
    </a>

    <ButtonTheme :is-dark="isDark" @click="toggleDarkMode" />
  </div>
</template>
