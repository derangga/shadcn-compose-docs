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
}

export function useTableOfContents(options: UseTableOfContentsOptions = {}) {
  const {
    contentSelector = ".prose",
    headingSelector = "h2, h3",
    scrollContainerSelector = ".overflow-y-auto",
    offsetTop = 100,
    autoGenerate = true,
  } = options;

  const route = useRoute();
  const headings = ref<Heading[]>([]);
  const activeHeading = ref<string>("");

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

  // Update active heading based on scroll position
  const updateActiveHeading = (): void => {
    if (!scrollContainer || headings.value.length === 0) return;

    const scrollTop = scrollContainer.scrollTop;
    let currentHeading = "";

    // Find the heading currently in view
    for (const heading of headings.value) {
      if (heading.element.offsetTop - offsetTop <= scrollTop) {
        currentHeading = heading.id;
      }
    }

    // If no heading found and at top of page, use first heading
    if (!currentHeading && scrollTop < offsetTop && headings.value.length > 0) {
      currentHeading = headings.value[0].id;
    }

    activeHeading.value = currentHeading;
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

  // Throttled scroll handler
  const throttledUpdateActiveHeading = createThrottled(
    updateActiveHeading,
    100
  );

  // Initialize scroll container and event listeners
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
    extractHeadings,
    updateActiveHeading,
    scrollToHeading,
    initialize,
    refresh,
    cleanupScrollListeners,
  };
}
