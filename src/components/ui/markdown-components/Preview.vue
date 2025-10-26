<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Skeleton } from "../skeleton";

interface Props {
  name: string;
  variant: string;
  assetExtension?: ".webp" | ".gif";
  align?: "center" | "start" | "end";
}

type Status = "Loading" | "Loaded" | "Error";
const SITE = "https://img.shadcn-compose.site";
const props = withDefaults(defineProps<Props>(), {
  align: "center",
  assetExtension: ".webp",
});
const observer = ref<IntersectionObserver | null>(null);
const rootEl = ref<HTMLElement | null>(null);
const isInView = ref(false);
const loadStatus = ref<Status>("Loading");

const imagePath = computed(
  () =>
    `${SITE}/assets/components/${props.name}/${props.variant}${props.assetExtension}`,
);
const imageAlt = computed(() => `${props.name}-${props.variant}`);
const showLoading = computed(() => loadStatus.value === "Loading");

// Intersection Observer
onMounted(() => {
  if (!rootEl.value) return;

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true;
          observer.value?.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "50px",
      threshold: 0.1,
    },
  );

  observer.value.observe(rootEl.value);
});

onUnmounted(() => {
  observer.value?.disconnect();
});

// Handlers
const handleLoad = () => {
  console.log("load");
  loadStatus.value = "Loaded";
};

const handleError = () => {
  loadStatus.value = "Error";
};
</script>

<template>
  <div
    ref="rootEl"
    :class="
      cn(
        'relative flex min-h-[350px] w-full justify-center p-10 items-center border rounded-md my-[6.5px]',
        {
          'items-center': align === 'center',
          'items-start': align === 'start',
          'items-end': align === 'end',
        },
      )
    "
  >
    <Skeleton v-if="showLoading" class="absolute size-72" />
    <img
      v-if="isInView"
      :src="imagePath"
      :alt="imageAlt"
      class="w-72"
      @load="handleLoad"
      @error="handleError"
      loading="lazy"
    />
  </div>
</template>
