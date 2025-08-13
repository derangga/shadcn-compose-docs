<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-foreground mb-4">Components</h1>
      <p class="text-lg text-muted-foreground">
        Explore our collection of reusable Vue components built with Tailwind
        CSS.
      </p>
    </div>

    <Separator class="my-6" />

    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Button</h2>
        <p class="text-muted-foreground mb-4">
          A versatile button component with multiple variants and sizes.
        </p>
        <div class="flex gap-4 mb-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Input</h2>
        <p class="text-muted-foreground mb-4">
          A clean and accessible input component for forms.
        </p>
        <div class="max-w-sm">
          <Input placeholder="Enter some text..." />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Sidebar</h2>
        <p class="text-muted-foreground mb-4">
          A collapsible sidebar component perfect for navigation and layout
          organization.
        </p>
        <p class="text-sm text-muted-foreground">
          You're currently viewing this component in action! The sidebar on the
          left demonstrates its functionality.
        </p>
      </section>
    </div>
  </div>
</template>
