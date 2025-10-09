<script setup lang="ts">
import { ref } from "vue";
import { cn } from "@/lib/utils";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs/index";
import type { Component, Variant } from "@/types/content";
import KotlinCodeBlock from "./KotlinCodeBlock.vue";
interface Props {
    name: Component;
    variant?: string;
    align?: "center" | "start" | "end";
}

defineOptions({
    inheritAttrs: false,
});

withDefaults(defineProps<Props>(), {
    align: "center",
    variant: "default",
});

const docs = ref<Variant[]>();

const tabs = ["Preview", "Code"];
</script>

<template>
    <div class="relative my-4 flex flex-col space-y-2">
        <div v-for="variant in docs" :key="variant.name">
            <h2 v-if="variant.name" class="mt-8">{{ variant.name }}</h2>
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
                                },
                            )
                        "
                    >
                        <img :src="variant.content.image" class="w-72" />
                    </div>
                </TabsContent>
                <TabsContent value="code" class="vp-doc">
                    <KotlinCodeBlock
                        v-if="variant.content.code"
                        :code="variant.content.code.trim()"
                        language="kotlin"
                    />
                    <slot v-else />
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>
