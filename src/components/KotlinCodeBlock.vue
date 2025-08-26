<script setup lang="ts">
import { ref, computed } from "vue";
import { Check, Copy } from "lucide-vue-next";
import Prism from "prismjs";
import "prismjs/components/prism-kotlin";

interface Props {
  code: string;
  language: string;
}

const props = defineProps<Props>();
const copied = ref(false);

const highlightedCode = computed(() => {
  if (Prism.languages[props.language]) {
    return Prism.highlight(
      props.code,
      Prism.languages[props.language],
      props.language
    );
  }
  return props.code;
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy code:", err);
  }
};
</script>

<template>
  <div
    class="code-block-wrapper border border-primary relative my-6 bg-primary rounded-sm"
  >
    <!-- Header with copy button -->
    <div class="flex items-center justify-between px-4 py-2">
      <span class="text-sm font-medium text-muted capitalize">{{
        language
      }}</span>
      <button
        @click="copyCode"
        class="flex items-center gap-2 px-3 py-1 text-sm text-muted hover:cursor-pointer rounded transition-colors"
        :class="{ 'text-green-400': copied }"
      >
        <Check v-if="copied" class="w-4 h-4" />
        <Copy v-else class="w-4 h-4" />
        {{ copied ? "Copied!" : "Copy" }}
      </button>
    </div>

    <!-- Code content with Prism highlighting -->
    <div class="prism-wrapper overflow-x-auto">
      <pre
        :class="`language-${language}`"
      ><code :class="`language-${language}`" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<style scoped>
@reference "../style.css";

.code-block-wrapper {
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.prism-wrapper pre {
  @apply m-0;
}

/* Override Prism styles to match your theme if needed */

/* :deep(.token.comment),
:deep(.token.prolog),
:deep(.token.doctype),
:deep(.token.cdata) {
  @apply text-gray-500 italic;
}

:deep(.token.punctuation) {
  @apply text-gray-300;
}

:deep(.token.property),
:deep(.token.tag),
:deep(.token.boolean),
:deep(.token.number),
:deep(.token.constant),
:deep(.token.symbol),
:deep(.token.deleted) {
  @apply text-red-500;
}

:deep(.token.selector),
:deep(.token.attr-name),
:deep(.token.string),
:deep(.token.char),
:deep(.token.builtin),
:deep(.token.inserted) {
  @apply text-green-500;
} */

:deep(.token.operator),
:deep(.token.entity),
:deep(.token.url),
:deep(.language-css .token.string),
:deep(.style .token.string) {
  /* @apply text-yellow-500; */
  background: none;
}
/* 
:deep(.token.atrule),
:deep(.token.attr-value),
:deep(.token.keyword) {
  @apply text-purple-500;
}

:deep(.token.function),
:deep(.token.class-name) {
  @apply text-blue-500;
}

:deep(.token.regex),
:deep(.token.important),
:deep(.token.variable) {
  @apply text-orange-500;
} */
</style>
