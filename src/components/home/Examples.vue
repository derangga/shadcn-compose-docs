<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-vue-next";

import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-jsx";
import Prism from "prismjs";

const copiedCode = ref<string | null>(null);
const examplesInner = useTemplateRef<HTMLElement>("examples-inner");

const codeExamples = {
  react: `
// shadcn/ui (React)
import { Button } from "@/components/ui/button"

export function MyButton() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  )
}`,
  kotlin: `
// shadcn compose (Kotlin)
import com.shadcncompose.ui.Button
import com.shadcncompose.ui.ButtonDefaults

@Composable
fun MyButton() {
    Button(
        onClick = { /* handle click */ },
        variant = ButtonDefaults.Default,
        size = ButtonDefaults.Large
    ) {
        Text("Click me")
    }
}`,
};

defineExpose({ examplesInner });

const kotlinCode = computed(() => {
  return Prism.highlight(
    codeExamples.kotlin,
    Prism.languages["kotlin"],
    "kotlin"
  );
});

const javascriptCode = computed(() => {
  return Prism.highlight(codeExamples.react, Prism.languages["jsx"], "jsx");
});

function copyToClipboard(text: string, id: string) {
  navigator.clipboard.writeText(text);
  copiedCode.value = id;
  setTimeout(() => (copiedCode.value = null), 2000);
}
</script>
<template>
  <section
    id="examples"
    ref="examples-inner"
    class="py-20 min-h-[calc(100vh-4rem)]"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Familiar Syntax, Native Performance
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          If you know shadcn/ui, you already know shadcn compose. Same
          components, same patterns, optimized for Kotlin.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card class="relative">
          <CardHeader class="pb-4">
            <div class="flex items-center justify-between">
              <CardTitle class="text-lg flex items-center">
                <div class="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                React (shadcn/ui)
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                @click="copyToClipboard(codeExamples.react, 'react')"
              >
                <Check v-if="copiedCode === 'react'" class="w-4 h-4" />
                <Copy v-else class="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div class="prose dark:prose-invert">
              <pre class="language-jsx h-80">
                  <code class="language-jsx" v-html="javascriptCode"></code>
                </pre>
            </div>
          </CardContent>
        </Card>

        <Card class="relative">
          <CardHeader class="pb-4">
            <div class="flex items-center justify-between">
              <CardTitle class="text-lg flex items-center">
                <div class="w-3 h-3 bg-purple-500 rounded-full mr-2" />
                Kotlin (shadcn compose)
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                @click="copyToClipboard(codeExamples.kotlin, 'kotlin')"
              >
                <Check v-if="copiedCode === 'kotlin'" class="w-4 h-4" />
                <Copy v-else class="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div class="prose dark:prose-invert">
              <pre class="language-kotlin h-80">
                  <code class="language-kotlin" v-html="kotlinCode"></code>
                </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
