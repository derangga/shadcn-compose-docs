<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Moon, Sun } from "lucide-vue-next";
import { Button } from "./ui/button";
import { Github } from "./ui/icons";
import { Separator } from "./ui/separator";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

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
      <div class="flex items-center space-x-8">
        <a href="#" class="flex items-center font-bold text-foreground gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 150"
          >
            >
            <path
              fill="#34A853"
              d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.1 128.1 0 0 0-12.794-38.288a128.8 128.8 0 0 0-23.45-31.86a129.2 129.2 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25c2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386q.643-1.115 1.023-2.297a11.78 11.78 0 0 0-.36-8.188q-.32-.76-.743-1.472a11.7 11.7 0 0 0-4.08-4.064a11.85 11.85 0 0 0-5.005-1.61a12 12 0 0 0-2.218.02q-.912.094-1.814.33a11.74 11.74 0 0 0-7.154 5.467c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38c-.282.487-.567.973-.848 1.467q-.586-.237-1.172-.462c-14.24-5.43-29.688-8.4-45.836-8.4c-.442 0-.879 0-1.324.006c-14.357.143-28.152 2.64-41.022 7.12a119 119 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367c-2.583-4.462-5.173-8.918-7.755-13.38l-7.576-13.07a3915 3915 0 0 1-5.439-9.386A11.74 11.74 0 0 0 48.5.048a11.7 11.7 0 0 0-5.01 1.612a11.7 11.7 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.8 11.8 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973 3973 0 0 1 5.439 9.386q3.793 6.535 7.58 13.069c2.582 4.462 5.168 8.918 7.75 13.38c.02.038.046.075.065.112A129 129 0 0 0 45.32 64.38a129.7 129.7 0 0 0-22.2 24.015a128 128 0 0 0-9.34 15.24a128.2 128.2 0 0 0-10.843 28.764a131 131 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A125 125 0 0 0 0 149.118h256q-.307-2.837-.734-5.636z"
            />
            <path
              fill="#202124"
              d="M194.59 113.712c5.122-3.41 5.867-11.3 1.661-17.62c-4.203-6.323-11.763-8.682-16.883-5.273c-5.122 3.41-5.868 11.3-1.662 17.621c4.203 6.322 11.764 8.682 16.883 5.272m-116.071-5.25c4.206-6.321 3.46-14.21-1.662-17.62c-5.123-3.41-12.68-1.05-16.886 5.27c-4.203 6.323-3.458 14.212 1.662 17.622c5.122 3.41 12.683 1.05 16.886-5.272"
            />
          </svg>
          shadcn/compose
        </a>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <router-link
            to="/docs/installation"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </router-link>
          <router-link
            to="/docs/components"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Components
          </router-link>
        </nav>
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
        <Button
          variant="ghost"
          size="icon"
          @click="toggleDarkMode"
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </header>
</template>
