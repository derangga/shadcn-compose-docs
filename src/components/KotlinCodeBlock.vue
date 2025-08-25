<template>
  <div class="relative group">
    <pre class="rounded-lg bg-muted p-4 overflow-auto">
      <code class="text-muted-foreground languange-kotlin">{{ code }}</code>
    </pre>

    <Button
      @click="copy"
      variant="outline"
      size="icon"
      class="absolute top-2 right-2"
    >
      <Check v-if="copied" class="text-foreground" />
      <Clipboard v-else />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-vue-next";
import { useClipboard } from "@vueuse/core";

const props = defineProps<{ code: string }>();

const { copy, copied } = useClipboard({ source: props.code });
</script>
