import type { Component, Variant } from "@/types/content";
import accordionDocs from "./accordion";
import buttonDocs from "./button";
export default function componentDocs(name: Component): Variant[] {
  switch (name) {
    case "accordion":
      return accordionDocs();
    case "button":
      return buttonDocs();
    default:
      throw new Error("component docs not found");
  }
}
