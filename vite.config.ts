import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Markdown from "unplugin-vue-markdown/vite";
import Pages from "vite-plugin-pages";
import Prism from "markdown-it-prism";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    tailwindcss(),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItUses: [
        [
          Prism,
          {
            defaultLanguage: "markup",
          },
        ],
      ],
      frontmatter: true,
    }),
    Pages({
      extensions: ["vue", "md"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ["textbookish-cosmologic-chauncey.ngrok-free.dev"],
  },
});
