import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@/styles/app.css";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return <Outlet />;
}
