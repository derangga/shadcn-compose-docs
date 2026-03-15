declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const title: string;
  export const description: string;

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
