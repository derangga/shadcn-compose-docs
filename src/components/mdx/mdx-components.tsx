import type { MDXComponents } from "mdx/types";
import { DocsPage } from "./docs-page";
import { TabPreview } from "./tab-preview";
import { Steps } from "./steps";
import { Preview } from "./preview";
import { HeaderDocs } from "./header-docs";
import { EditThisPage } from "./edit-this-page";
import { CodeWithFilename } from "./code-with-filename";
import { CodeConverter } from "@/components/docs/code-converter";
import { cn } from "@/lib/utils";

export function useMDXComponents(): MDXComponents {
  return {
    DocsPage,
    TabPreview,
    Steps,
    Preview,
    HeaderDocs,
    EditThisPage,
    CodeWithFilename,
    CodeConverter,
    h1: ({ children, ...props }) => (
      <h1
        className="scroll-m-20 text-4xl font-bold tracking-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="scroll-m-20 text-2xl font-semibold tracking-tight"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="scroll-m-20 text-xl font-semibold tracking-tight"
        {...props}
      >
        {children}
      </h4>
    ),
    code: ({ children, className, ...props }) => {
      // Don't override code inside pre (code blocks handled by rehype-pretty-code)
      if (className?.includes("language-")) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className={cn(
            "bg-muted px-1 py-0.5 rounded font-mono text-sm text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </code>
      );
    },
    a: ({ children, ...props }) => (
      <a
        className="font-medium text-foreground underline underline-offset-4"
        {...props}
      >
        {children}
      </a>
    ),
  };
}
