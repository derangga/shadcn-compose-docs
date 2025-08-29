// composables/useTableOfContents.ts
import { ref, nextTick, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";

interface Heading {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

interface UseTableOfContentsOptions {
  contentSelector?: string;
  headingSelector?: string;
  scrollContainerSelector?: string;
  offsetTop?: number;
  autoGenerate?: boolean;
  visibilityBuffer?: number;
}

export function useTableOfContents(options: UseTableOfContentsOptions = {}) {
  const {
    contentSelector = ".prose",
    headingSelector = "h2, h3",
    scrollContainerSelector = ".overflow-y-auto",
    offsetTop = 100,
    autoGenerate = true,
    visibilityBuffer = 0,
  } = options;

  const route = useRoute();
  const headings = ref<Heading[]>([]);
  const activeHeading = ref<string>("");
  const visibleHeadings = ref<string[]>([]);

  let scrollContainer: HTMLElement | null = null;

  const generateIdFromText = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const extractHeadings = (): void => {
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) {
      console.warn(
        `Content element not found with selector: ${contentSelector}`
      );
      return;
    }

    const headingElements = contentElement.querySelectorAll(
      headingSelector
    ) as NodeListOf<HTMLElement>;

    headings.value = Array.from(headingElements).map((element) => {
      if (!element.id) {
        element.id = generateIdFromText(element.textContent || "");
      }

      return {
        id: element.id,
        text: element.textContent?.trim() || "",
        level: parseInt(element.tagName.substring(1)),
        element,
      };
    });
  };

  // Throttle utility for scroll performance
  const createThrottled = (func: Function, delay: number) => {
    let timeoutId: number | null = null;
    let lastExecTime = 0;

    return (...args: any[]) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        func.apply(null, args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(null, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  const updateActiveHeading = (): void => {
    if (!scrollContainer || headings.value.length === 0) return;

    const scrollTop = scrollContainer.scrollTop;
    const containerHeight = scrollContainer.clientHeight;
    const viewportTop = scrollTop - visibilityBuffer;
    const viewportBottom = scrollTop + containerHeight + visibilityBuffer;

    const currentVisibleHeadings: string[] = [];
    let primaryActiveHeading = "";

    // Check each heading's visibility
    for (const heading of headings.value) {
      const element = heading.element;
      const elementTop = element.offsetTop;
      const elementHeight = Math.max(element.offsetHeight || 32, 32);
      const elementBottom = elementTop + elementHeight;

      const isActuallyVisible =
        elementBottom > viewportTop && elementTop < viewportBottom;

      if (isActuallyVisible) {
        currentVisibleHeadings.push(heading.id);
      }
    }

    // Determine primary active from visible headings
    if (currentVisibleHeadings.length > 0) {
      primaryActiveHeading = currentVisibleHeadings[0];
    } else {
      for (let i = headings.value.length - 1; i >= 0; i--) {
        const heading = headings.value[i];
        const elementTop = heading.element.offsetTop;

        if (elementTop <= scrollTop + offsetTop) {
          primaryActiveHeading = heading.id;
          break;
        }
      }
    }

    // Handle edge case: very top of document
    if (scrollTop <= offsetTop && headings.value.length > 0) {
      const firstHeading = headings.value[0];
      if (!currentVisibleHeadings.includes(firstHeading.id)) {
        currentVisibleHeadings.unshift(firstHeading.id);
      }
      primaryActiveHeading = firstHeading.id;
    }

    visibleHeadings.value = currentVisibleHeadings;
    activeHeading.value = primaryActiveHeading;
  };

  const scrollToHeading = (headingId: string, event?: Event): void => {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(headingId);
    const container = scrollContainer || document.documentElement;

    if (element && container) {
      const elementTop = element.offsetTop - offsetTop;

      container.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });

      if (typeof window !== "undefined") {
        history.pushState(null, "", `#${headingId}`);
      }
    }
  };

  const throttledUpdateActiveHeading = createThrottled(
    updateActiveHeading,
    100
  );

  const initializeScrollListeners = (): void => {
    scrollContainer = document.querySelector(scrollContainerSelector);

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", throttledUpdateActiveHeading, {
        passive: true,
      });
    } else {
      console.warn(
        `Scroll container not found with selector: ${scrollContainerSelector}`
      );
    }
  };

  const cleanupScrollListeners = (): void => {
    if (scrollContainer) {
      scrollContainer.removeEventListener(
        "scroll",
        throttledUpdateActiveHeading
      );
      scrollContainer = null;
    }
  };

  const initialize = async (): Promise<void> => {
    await nextTick();
    extractHeadings();
    initializeScrollListeners();
    updateActiveHeading();
  };

  // Refresh (useful for dynamic content)
  const refresh = async (): Promise<void> => {
    cleanupScrollListeners();
    await initialize();
  };

  // Watch route changes to regenerate headings
  if (autoGenerate) {
    watch(
      () => route.fullPath,
      async () => {
        await refresh();
      },
      { immediate: false }
    );

    onMounted(initialize);
  }

  onUnmounted(cleanupScrollListeners);

  return {
    headings,
    activeHeading,
    visibleHeadings,
    extractHeadings,
    updateActiveHeading,
    scrollToHeading,
    initialize,
    refresh,
    cleanupScrollListeners,
  };
}
