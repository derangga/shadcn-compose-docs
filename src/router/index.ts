import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomeView.vue"),
  },
  {
    path: "/docs",
    component: () => import("@/layouts/DocsLayout.vue"),
    children: [
      {
        path: "introduction",
        name: "Introduction",
        component: () => import("@/pages/docs/Introduction.md"),
      },
      {
        path: "installation",
        name: "Installation",
        component: () => import("@/pages/docs/Installation.md"),
      },
      {
        path: "theming",
        name: "Theming",
        component: () => import("@/pages/docs/Theming.md"),
      },
      {
        path: "tailwind-to-kotlin",
        name: "TailwindToKotlin",
        component: () => import("@/pages/docs/TailwindToKotlin.md"),
      },
      {
        path: "components",
        name: "Components",
        component: () => import("@/pages/docs/ComponentsView.vue"),
      },
      {
        path: "components/accordion",
        name: "Accordion",
        component: () => import("@/pages/components/Accordion.md"),
      },
      {
        path: "components/alert",
        name: "Alert",
        component: () => import("@/pages/components/Alert.md"),
      },
      {
        path: "components/alert-dialog",
        name: "Alert Dialog",
        component: () => import("@/pages/components/AlertDialog.md"),
      },
      {
        path: "components/avatar",
        name: "Avatar",
        component: () => import("@/pages/components/Avatar.md"),
      },
      {
        path: "components/badge",
        name: "Badge",
        component: () => import("@/pages/components/Badge.md"),
      },
      {
        path: "components/drawer",
        name: "BottomSheet",
        component: () => import("@/pages/components/Drawer.md"),
      },
      {
        path: "components/button",
        name: "Button",
        component: () => import("@/pages/components/Button.md"),
      },
      {
        path: "components/calendar",
        name: "Calendar",
        component: () => import("@/pages/components/Calendar.md"),
      },
      {
        path: "components/card",
        name: "Card",
        component: () => import("@/pages/components/Card.md"),
      },
      {
        path: "components/carousel",
        name: "Carousel",
        component: () => import("@/pages/components/Carousel.md"),
      },
      {
        path: "components/checkbox",
        name: "Checkbox",
        component: () => import("@/pages/components/Checkbox.md"),
      },
      {
        path: "components/combobox",
        name: "Combobox",
        component: () => import("@/pages/components/Combobox.md"),
      },
      {
        path: "components/date-picker",
        name: "DatePicker",
        component: () => import("@/pages/components/DatePicker.md"),
      },
      {
        path: "components/dialog",
        name: "Dialog",
        component: () => import("@/pages/components/Dialog.md"),
      },
      {
        path: "components/dropdown-menu",
        name: "DropdownMenu",
        component: () => import("@/pages/components/DropdownMenu.md"),
      },
      {
        path: "components/input",
        name: "Input",
        component: () => import("@/pages/components/Input.md"),
      },
      {
        path: "components/popover",
        name: "Popover",
        component: () => import("@/pages/components/Popover.md"),
      },
      {
        path: "components/progress",
        name: "Progress",
        component: () => import("@/pages/components/Progress.md"),
      },
      {
        path: "components/radio-group",
        name: "RadioGroup",
        component: () => import("@/pages/components/RadioGroup.md"),
      },
      {
        path: "components/select",
        name: "Select",
        component: () => import("@/pages/components/Select.md"),
      },
      {
        path: "components/sidebar",
        name: "Sidebar",
        component: () => import("@/pages/components/Sidebar.md"),
      },
      {
        path: "components/skeleton",
        name: "Skeleton",
        component: () => import("@/pages/components/Skeleton.md"),
      },
      {
        path: "components/slider",
        name: "Slider",
        component: () => import("@/pages/components/Slider.md"),
      },
      {
        path: "components/sonner",
        name: "Sonner",
        component: () => import("@/pages/components/Sonner.md"),
      },
      {
        path: "components/switch",
        name: "Switch",
        component: () => import("@/pages/components/Switch.md"),
      },
      {
        path: "components/tabs",
        name: "Tabs",
        component: () => import("@/pages/components/Tabs.md"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
