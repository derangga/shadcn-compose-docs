<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "../ui/button";
import { Github, Android } from "../ui/icons";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-vue-next";
import ButtonTheme from "./ButtonTheme.vue";

const isDark = ref(false);

const routes = [
  { path: "/docs/installation", label: "Documentation" },
  { path: "/docs/components", label: "Components" },
];

function toggleDarkMode() {
  isDark.value = !isDark.value;
  updateTheme();
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  isDark.value = savedTheme === "dark" || (!savedTheme && prefersDark);
  updateTheme();
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="flex items-center font-bold text-foreground gap-2">
          <Android class="size-8" />
          shadcn/compose
        </a>

        <!-- Desktop -->
        <div class="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem v-for="route in routes" :key="route.label">
                <router-link :to="route.path" legacyBehavior passHref>
                  <NavigationMenuLink>
                    {{ route.label }}
                  </NavigationMenuLink>
                </router-link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div class="flex md:hidden items-center space-x-4">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              <router-link
                v-for="route in routes"
                :key="route.label"
                :to="route.path"
              >
                {{ route.label }}
              </router-link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div class="flex flex-row h-5 items-center gap-2">
        <a
          href="https://github.com/derangga/shadcn-compose"
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-8 h-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github class="w-4 h-4" />
        </a>
        <Separator orientation="vertical" class="my-4" />
        <ButtonTheme :is-dark="isDark" @click="toggleDarkMode" />
      </div>
    </div>
  </header>
</template>
