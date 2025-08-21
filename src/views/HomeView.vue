<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ref, useTemplateRef } from "vue";
import { Check, Copy, ChevronDown } from "lucide-vue-next";

const copiedCode = ref<string | null>(null);
const examplesSection = useTemplateRef<HTMLElement>("examples");
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

function copyToClipboard(text: string, id: string) {
  navigator.clipboard.writeText(text);
  copiedCode.value = id;
  setTimeout(() => (copiedCode.value = null), 2000);
}

function scrollDown() {
  console.log("adasd");
  examplesSection.value?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <Header />
  <div class="min-h-screen">
    <section
      id="hero"
      class="relative py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div class="container mx-auto text-center max-w-4xl relative">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8"
        >
          <span class="text-foreground">Build beautiful</span>
          <br />
          <span
            class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            components faster
          </span>
        </h1>

        <p
          class="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          shadcn-compose is inspired by
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-foreground underline"
            >shadcn</a
          >, providing beautifully designed components that you can copy and
          paste into your apps. Accessible, customizable, and open source.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button as-child size="lg">
            <router-link to="/docs/installation"> Get Started </router-link>
          </Button>
          <Button variant="ghost" size="lg" as-child>
            <router-link to="/docs/components"> View Components </router-link>
          </Button>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          class="animate-bounce"
          @click="scrollDown"
        >
          <ChevronDown class="h-6 w-6" />
          <span class="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
    <section id="examples" ref="examples" class="py-20">
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

        <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <pre class="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                  <code class="text-muted-foreground">{{ codeExamples.react }}</code>
                </pre>
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
              <pre class="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                  <code class="text-muted-foreground">{{ codeExamples.kotlin }}</code>
                </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
