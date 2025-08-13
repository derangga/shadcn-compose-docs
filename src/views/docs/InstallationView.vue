<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-foreground mb-4">Installation</h1>
      <p class="text-lg text-muted-foreground">
        Get started with our Vue component library by following these simple installation steps.
      </p>
    </div>

    <Separator class="my-6" />

    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Prerequisites</h2>
        <p class="text-muted-foreground mb-4">
          Before you begin, make sure you have the following installed:
        </p>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Node.js 18.0 or later</li>
          <li>npm, yarn, or pnpm package manager</li>
          <li>Vue 3.3 or later</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Installation Steps</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium mb-2">1. Install the package</h3>
            <div class="bg-muted p-4 rounded-lg">
              <code class="text-sm">npm install @shadcn-vue/ui</code>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">2. Install dependencies</h3>
            <div class="bg-muted p-4 rounded-lg">
              <code class="text-sm">npm install tailwindcss class-variance-authority clsx tailwind-merge</code>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">3. Configure Tailwind CSS</h3>
            <p class="text-muted-foreground mb-2">
              Add the following to your <code class="bg-muted px-1 rounded">tailwind.config.js</code>:
            </p>
            <div class="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre class="text-sm"><code>module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">4. Import styles</h3>
            <p class="text-muted-foreground mb-2">
              Add the following to your main CSS file:
            </p>
            <div class="bg-muted p-4 rounded-lg">
              <pre class="text-sm"><code>@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Usage</h2>
        <p class="text-muted-foreground mb-4">
          Once installed, you can start using the components in your Vue application:
        </p>
        <div class="bg-muted p-4 rounded-lg">
          <pre class="text-sm"><code>&lt;script setup&gt;
import { Button } from '@/components/ui/button'
&lt;/script&gt;

&lt;template&gt;
  &lt;Button&gt;Click me&lt;/Button&gt;
&lt;/template&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Next Steps</h2>
        <p class="text-muted-foreground mb-4">
          Now that you have everything installed, you can:
        </p>
        <div class="flex gap-4">
          <Button as-child>
            <router-link to="/docs/getting-started">
              Getting Started Guide
            </router-link>
          </Button>
          <Button variant="outline" as-child>
            <router-link to="/docs/components">
              Browse Components
            </router-link>
          </Button>
        </div>
      </section>
    </div>
  </div>
</template>