<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-foreground mb-4">Getting Started</h1>
      <p class="text-lg text-muted-foreground">
        Learn the basics of using our Vue component library and start building amazing applications.
      </p>
    </div>

    <Separator class="my-6" />

    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Quick Start</h2>
        <p class="text-muted-foreground mb-4">
          This guide will help you get up and running with our component library in just a few minutes.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Basic Example</h2>
        <div class="bg-muted p-4 rounded-lg">
          <pre class="text-sm"><code>&lt;script setup&gt;
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="space-y-4"&gt;
    &lt;Input placeholder="Enter your name" /&gt;
    &lt;Button&gt;Submit&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>
      </section>

      <section>
        <div class="flex gap-4">
          <Button as-child>
            <router-link to="/docs/installation">
              Installation Guide
            </router-link>
          </Button>
          <Button variant="outline" as-child>
            <router-link to="/docs/components">
              View All Components
            </router-link>
          </Button>
        </div>
      </section>
    </div>
  </div>
</template>