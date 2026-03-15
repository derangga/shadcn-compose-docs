declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: {
    title: string;
    description: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
