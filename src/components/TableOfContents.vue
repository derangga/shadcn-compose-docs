<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useTableOfContents } from "@/composables/useTableOfContents";

interface Props {
  title?: string;
  maxLevel?: number;
  minLevel?: number;
  containerClass?: string;
  hideOnPaths?: string[];
  contentSelector?: string;
  headingSelector?: string;
  scrollContainerSelector?: string;
  offsetTop?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: "On This Page",
  maxLevel: 3,
  minLevel: 2,
  containerClass: "w-64 pl-4",
  hideOnPaths: () => [],
  contentSelector: ".prose",
  headingSelector: "h2, h3",
  scrollContainerSelector: ".overflow-y-auto",
  offsetTop: 100,
});

const route = useRoute();

const { headings, activeHeading, scrollToHeading } = useTableOfContents({
  contentSelector: props.contentSelector,
  headingSelector: props.headingSelector,
  scrollContainerSelector: props.scrollContainerSelector,
  offsetTop: props.offsetTop,
});

// Filter headings based on level constraints
const visibleHeadings = computed(() => {
  return headings.value.filter(
    (heading) =>
      heading.level >= props.minLevel && heading.level <= props.maxLevel
  );
});

const shouldShow = computed(() => {
  const currentPath = route.path;
  return !props.hideOnPaths.some((path) => currentPath === path);
});

// Get container classes for heading indentation
const getHeadingContainerClass = (heading: { level: number }) => {
  const indentMap: Record<number, string> = {
    1: "",
    2: "",
    3: "ml-4",
    4: "ml-8",
    5: "ml-12",
    6: "ml-16",
  };
  return indentMap[heading.level] || "";
};

// Get link classes based on active state
const getLinkClass = (heading: { id: string; level: number }) => {
  const isActive = activeHeading.value === heading.id;

  const baseClasses =
    "text-sm leading-5 transition-colors duration-200 border-l-2";

  const levelClasses: Record<number, string> = {
    1: "font-medium",
    2: "font-medium",
    3: "font-normal",
    4: "font-normal",
    5: "font-normal",
    6: "font-normal",
  };

  const stateClasses = isActive
    ? "text-primary font-semibold border-primary bg-accent/20"
    : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted";

  return `${baseClasses} ${
    levelClasses[heading.level] || levelClasses[3]
  } ${stateClasses}`;
};

const handleClick = (headingId: string, event: Event) => {
  scrollToHeading(headingId, event);
};
</script>

<template>
  <aside
    v-if="shouldShow && headings.length > 0"
    :class="containerClass"
    class="hidden xl:block"
  >
    <div class="sticky top-4">
      <h2 class="text-sm font-medium mb-2">
        {{ title }}
      </h2>

      <nav class="space-y-1">
        <ul class="text-sm space-y-1">
          <li
            v-for="heading in visibleHeadings"
            :key="heading.id"
            :class="getHeadingContainerClass(heading)"
          >
            <a
              :href="`#${heading.id}`"
              :class="getLinkClass(heading)"
              class="block py-1 px-2 rounded transition-colors duration-200 hover:bg-accent/50"
              @click="handleClick(heading.id, $event)"
            >
              {{ heading.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
