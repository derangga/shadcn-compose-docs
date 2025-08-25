<script setup lang="ts"></script>
<template>
  <div
    class="steps mb-12 ml-4 border-l border-gray-200 pl-8 [counter-reset:step] [&>h3]:step [&>h3]:[counter-increment:step] [&>h3::before]:content-[counter(step)] [&>h3::before]:inline-flex [&>h3::before]:h-8 [&>h3::before]:w-8 [&>h3::before]:items-center [&>h3::before]:justify-center [&>h3::before]:rounded-full [&>h3::before]:bg-muted [&>h3::before]:text-sm [&>h3::before]:font-medium [&>h3::before]:text-foreground [&>h3::before]:mr-3 [&>h3::before]:ml-[-3rem] [&>h3]:flex [&>h3]:items-center"
  >
    <slot />
  </div>
</template>
