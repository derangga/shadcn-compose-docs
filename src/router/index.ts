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
        component: () => import("@/views/docs/Introduction.md"),
      },
      {
        path: "installation",
        name: "Installation",
        component: () => import("@/views/docs/Installation.md"),
      },
      {
        path: "theming",
        name: "Theming",
        component: () => import("@/views/docs/Theming.md"),
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
        path: "components/calendar",
        name: "Calendar",
        component: () => import("@/views/components/Calendar.md"),
      },
      {
        path: "components/card",
        name: "Card",
        component: () => import("@/views/components/Card.md"),
      },
      {
        path: "components/carousel",
        name: "Carousel",
        component: () => import("@/views/components/Carousel.md"),
      },
      {
        path: "components/checkbox",
        name: "Checkbox",
        component: () => import("@/views/components/Checkbox.md"),
      },
      {
        path: "components/combobox",
        name: "Combobox",
        component: () => import("@/views/components/Combobox.md"),
      },
      {
        path: "components/date-picker",
        name: "DatePicker",
        component: () => import("@/views/components/DatePicker.md"),
      },
      {
        path: "components/dialog",
        name: "Dialog",
        component: () => import("@/views/components/Dialog.md"),
      },
      {
        path: "components/dropdown-menu",
        name: "DropdownMenu",
        component: () => import("@/views/components/DropdownMenu.md"),
      },
      {
        path: "components/input",
        name: "Input",
        component: () => import("@/views/components/Input.md"),
      },
      {
        path: "components/popover",
        name: "Popover",
        component: () => import("@/views/components/Popover.md"),
      },
      {
        path: "components/progress",
        name: "Progress",
        component: () => import("@/views/components/Progress.md"),
      },
      {
        path: "components/radio-group",
        name: "RadioGroup",
        component: () => import("@/views/components/RadioGroup.md"),
      },
      {
        path: "components/select",
        name: "Select",
        component: () => import("@/views/components/Select.md"),
      },
      {
        path: "components/sidebar",
        name: "Sidebar",
        component: () => import("@/views/components/Sidebar.md"),
      },
      {
        path: "components/skeleton",
        name: "Skeleton",
        component: () => import("@/views/components/Skeleton.md"),
      },
      {
        path: "components/slider",
        name: "Slider",
        component: () => import("@/views/components/Slider.md"),
      },
      {
        path: "components/sonner",
        name: "Sonner",
        component: () => import("@/views/components/Sonner.md"),
      },
      {
        path: "components/switch",
        name: "Switch",
        component: () => import("@/views/components/Switch.md"),
      },
      {
        path: "components/tabs",
        name: "Tabs",
        component: () => import("@/views/components/Tabs.md"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
