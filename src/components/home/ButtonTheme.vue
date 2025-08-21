<script setup lang="ts">
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-vue-next";

defineProps<{
  isDark: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

function toggleDarkMode() {
  emit("click");
}
</script>
<template>
  <Button
    variant="ghost"
    size="icon"
    @click="toggleDarkMode"
    aria-label="Toggle dark mode"
  >
    <Sun v-if="isDark" class="w-4 h-4" />
    <Moon v-else class="w-4 h-4" />
  </Button>
</template>
