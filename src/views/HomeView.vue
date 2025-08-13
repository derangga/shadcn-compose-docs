<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        Vue Documentation
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Comprehensive documentation for Vue components with shadcn-vue integration. 
        Get started with our component library and build amazing applications.
      </p>
      <div class="flex gap-4 justify-center">
        <Button as-child size="lg">
          <router-link to="/docs/installation">
            Get Started
          </router-link>
        </Button>
        <Button variant="outline" size="lg" as-child>
          <router-link to="/docs/components">
            View Components
          </router-link>
        </Button>
      </div>
    </div>
  </div>
</template>