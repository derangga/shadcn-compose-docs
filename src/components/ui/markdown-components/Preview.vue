<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed } from "vue";

interface Props {
  name: string;
  variant: string;
  assetExtension: ".webp" | ".gif";
  align?: "center" | "start" | "end";
}

const props = withDefaults(defineProps<Props>(), {
  align: "center",
  assetExtension: ".webp",
});

const imagePath = computed(
  () =>
    `/src/assets/components/${props.name}/${props.variant}${props.assetExtension}`
);
</script>

<template>
  <div
    :class="
      cn(
        'preview flex min-h-[350px] w-full justify-center p-10 items-center border rounded-md my-[6.5px]',
        {
          'items-center': align === 'center',
          'items-start': align === 'start',
          'items-end': align === 'end',
        }
      )
    "
  >
    <img :src="imagePath" class="w-72" />
  </div>
</template>
