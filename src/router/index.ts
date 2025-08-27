import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/docs",
    component: () => import("@/layouts/DocsLayout.vue"),
    children: [
      {
        path: "introduction",
        name: "Introduction",
        component: () => import("@/views/docs/IntroductionView.vue"),
      },
      {
        path: "installation",
        name: "Installation",
        component: () => import("@/views/docs/InstallationView.vue"),
      },
      {
        path: "theming",
        name: "Theming",
        component: () => import("@/views/docs/ThemingView.vue"),
      },
      {
        path: "components",
        name: "Components",
        component: () => import("@/views/docs/ComponentsView.vue"),
      },
      {
        path: "components/accordion",
        name: "Accordion",
        component: () => import("@/views/components/Accordion.md"),
      },
      {
        path: "components/alert",
        name: "Alert",
        component: () => import("@/views/components/Alert.md"),
      },
      {
        path: "components/alert-dialog",
        name: "Alert Dialog",
        component: () => import("@/views/components/AlertDialog.md"),
      },
      {
        path: "components/avatar",
        name: "Avatar",
        component: () => import("@/views/components/Avatar.md"),
      },
      {
        path: "components/badge",
        name: "Badge",
        component: () => import("@/views/components/Badge.md"),
      },
      {
        path: "components/bottom-sheet",
        name: "BottomSheet",
        component: () => import("@/views/components/BottomSheet.md"),
      },
      {
        path: "components/button",
        name: "Button",
        component: () => import("@/views/components/Button.md"),
      },
      {
        path: "components/Calendar",
        name: "Calendar",
        component: () => import("@/views/components/Calendar.md"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
