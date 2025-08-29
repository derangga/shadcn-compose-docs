<script setup lang="ts"></script>
<template>
  <div
    class="steps mb-12 ml-4 border-l border-gray-200 pl-8 [counter-reset:step] [&>h4]:step [&>h4]:[counter-increment:step] [&>h4::before]:content-[counter(step)] [&>h4::before]:inline-flex [&>h4::before]:h-8 [&>h4::before]:w-8 [&>h4::before]:items-center [&>h4::before]:justify-center [&>h4::before]:rounded-full [&>h4::before]:bg-muted [&>h4::before]:text-sm [&>h4::before]:font-medium [&>h4::before]:text-foreground [&>h4::before]:mr-3 [&>h4::before]:ml-[-3rem] [&>h4]:flex [&>h4]:items-center"
  >
    <slot />
  </div>
</template>
