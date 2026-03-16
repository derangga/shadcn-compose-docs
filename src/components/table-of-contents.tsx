import { useMemo } from "react";
import { useLocation } from "@tanstack/react-router";
import { useTableOfContents } from "@/hooks/use-table-of-contents";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  title?: string;
  maxLevel?: number;
  minLevel?: number;
  containerClass?: string;
  hideOnPaths?: string[];
  contentSelector?: string;
  headingSelector?: string;
  scrollContainerSelector?: string;
  offsetTop?: number;
  multipleActive?: boolean;
  className?: string;
}

export function TableOfContents({
  title = "On This Page",
  maxLevel = 3,
  minLevel = 2,
  containerClass = "w-64 pl-4",
  hideOnPaths = [],
  contentSelector = ".prose",
  headingSelector = "h2, h3",
  scrollContainerSelector = ".overflow-y-auto",
  offsetTop = 100,
  multipleActive = true,
  className,
}: TableOfContentsProps) {
  const location = useLocation();
  const { headings, activeHeading, visibleHeadings, scrollToHeading } =
    useTableOfContents({
      contentSelector,
      headingSelector,
      scrollContainerSelector,
      offsetTop,
    });

  const filteredHeadings = useMemo(
    () =>
      headings.filter((h) => h.level >= minLevel && h.level <= maxLevel),
    [headings, minLevel, maxLevel]
  );

  const shouldShow = !hideOnPaths.some((p) => location.pathname === p);

  if (!shouldShow || filteredHeadings.length === 0) return null;

  const getIndentClass = (level: number) => {
    const map: Record<number, string> = { 1: "", 2: "", 3: "ml-4", 4: "ml-8" };
    return map[level] || "";
  };

  const getLinkClass = (heading: { id: string; level: number }) => {
    const isPrimary = activeHeading === heading.id;
    const isVisible = multipleActive && visibleHeadings.includes(heading.id);

    return cn(
      "text-sm leading-5 transition-all duration-300 border-l-2",
      heading.level <= 2 ? "font-medium" : "font-normal",
      isPrimary
        ? "text-primary font-semibold border-primary bg-accent/20 shadow-sm"
        : isVisible
          ? "text-primary/80 font-medium border-primary/60 bg-accent/10"
          : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted hover:bg-accent/30"
    );
  };

  return (
    <aside className={cn(containerClass, "hidden lg:block", className)}>
      <div className="sticky top-4">
        <h2 className="text-sm font-medium mb-2">{title}</h2>
        <nav className="space-y-1">
          <ul className="text-sm space-y-1">
            {filteredHeadings.map((heading) => (
              <li key={heading.id} className={getIndentClass(heading.level)}>
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    getLinkClass(heading),
                    "block py-1 px-2 rounded transition-all duration-300 hover:bg-accent/50"
                  )}
                  onClick={(e) => scrollToHeading(heading.id, e)}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
