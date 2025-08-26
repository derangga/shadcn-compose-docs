<script setup lang="ts">
import { ref } from "vue";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/index";
import KotlinCodeBlock from "./KotlinCodeBlock.vue";

defineOptions({
  inheritAttrs: false,
});

withDefaults(
  defineProps<{
    name: string;
    align?: "center" | "start" | "end";
  }>(),
  { align: "center" }
);

const codeHtml = ref(`fun greet(name: String) = println(\"Hello, $name!\")`);
const tabs = ["Preview", "Code"];
</script>

<template>
  <div class="not-docs group relative my-4 flex flex-col space-y-2">
    <Tabs default-value="preview" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <TabsList
          class="w-full justify-start rounded-none border-b bg-transparent p-0"
        >
          <div class="w-fit">
            <TabsTrigger
              v-for="(tab, index) in tabs"
              :key="index"
              :value="tab.toLocaleLowerCase()"
              class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              {{ tab }}
            </TabsTrigger>
          </div>
        </TabsList>
      </div>
      <TabsContent value="preview" class="relative rounded-md border">
        <div class="flex items-center justify-between p-4"></div>
        <div
          :class="
            cn(
              'preview flex min-h-[350px] w-full justify-center p-10 items-center',
              {
                'items-center': align === 'center',
                'items-start': align === 'start',
                'items-end': align === 'end',
              }
            )
          "
        ></div>
      </TabsContent>
      <TabsContent value="code" class="vp-doc">
        <KotlinCodeBlock v-if="codeHtml" :code="codeHtml" language="kotlin" />
        <slot v-else />
      </TabsContent>
    </Tabs>
  </div>
</template>
