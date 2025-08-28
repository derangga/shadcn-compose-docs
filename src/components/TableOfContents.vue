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
  multipleActive?: boolean;
  showIndicators?: boolean;
  visibilityBuffer?: number;
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
  multipleActive: true,
  showIndicators: false,
  visibilityBuffer: 0,
});

const route = useRoute();

const {
  headings,
  activeHeading,
  visibleHeadings: allVisibleHeadings,
  scrollToHeading,
} = useTableOfContents({
  contentSelector: props.contentSelector,
  headingSelector: props.headingSelector,
  scrollContainerSelector: props.scrollContainerSelector,
  offsetTop: props.offsetTop,
  visibilityBuffer: props.visibilityBuffer,
});

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

const getIndicatorClass = (heading: { id: string }) => {
  const isPrimaryActive = activeHeading.value === heading.id;
  const isVisible = allVisibleHeadings.value.includes(heading.id);

  if (isPrimaryActive) {
    return "bg-primary scale-125";
  } else if (isVisible) {
    return "bg-primary/60 scale-110";
  }
  return "bg-muted scale-100 opacity-0";
};

const getLinkClass = (heading: { id: string; level: number }) => {
  const isPrimaryActive = activeHeading.value === heading.id;
  const isVisible = props.multipleActive
    ? allVisibleHeadings.value.includes(heading.id)
    : false;

  const baseClasses =
    "text-sm leading-5 transition-all duration-300 border-l-2 relative";

  const levelClasses: Record<number, string> = {
    1: "font-medium",
    2: "font-medium",
    3: "font-normal",
    4: "font-normal",
    5: "font-normal",
    6: "font-normal",
  };

  let stateClasses = "";

  if (isPrimaryActive) {
    stateClasses =
      "text-primary font-semibold border-primary bg-accent/20 shadow-sm transform scale-[1.02]";
  } else if (isVisible && props.multipleActive) {
    stateClasses = "text-primary/80 font-medium border-primary/60 bg-accent/10";
  } else {
    stateClasses =
      "text-muted-foreground border-transparent hover:text-foreground hover:border-muted hover:bg-accent/30";
  }

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
    class="hidden lg:block"
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
              class="block py-1 px-2 rounded transition-all duration-300 hover:bg-accent/50"
              @click="handleClick(heading.id, $event)"
            >
              {{ heading.text }}
              <!-- Optional indicators for different states -->
              <span
                v-if="showIndicators"
                :class="getIndicatorClass(heading)"
                class="ml-2 inline-block w-1.5 h-1.5 rounded-full transition-all duration-200"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
