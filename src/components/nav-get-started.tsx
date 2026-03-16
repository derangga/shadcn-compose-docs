import { Link } from "@tanstack/react-router";
import { Cuboid, Info, Package, Palette, SquareCode } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const guides = [
  { title: "Introduction", url: "/docs/introduction", icon: Info },
  { title: "Installation", url: "/docs/installation", icon: Package },
  { title: "Theming", url: "/docs/theming", icon: Palette },
  {
    title: "Tailwind to Kotlin",
    url: "/docs/tailwind-to-kotlin",
    icon: SquareCode,
  },
  { title: "Components", url: "/docs/components", icon: Cuboid },
];

interface NavGetStartedProps {
  activeRoute: string;
}

export function NavGetStarted({ activeRoute }: NavGetStartedProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Get Started</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {guides.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={cn(
                  activeRoute === item.url && "bg-sidebar-accent"
                )}
              >
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
