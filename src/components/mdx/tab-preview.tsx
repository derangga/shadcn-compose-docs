import type { ReactNode, ReactElement } from "react";
import { Children, isValidElement } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabPreviewProps {
  names?: string[];
  children: ReactNode;
}

interface PanelProps {
  name: string;
  children: ReactNode;
}

function Panel({ children }: PanelProps) {
  return <>{children}</>;
}

export function TabPreview({
  names = ["Preview", "Code"],
  children,
}: TabPreviewProps) {
  const panels: { name: string; content: ReactNode }[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && (child.type as { displayName?: string }).displayName === "TabPreview.Panel") {
      const props = child.props as PanelProps;
      panels.push({ name: props.name, content: props.children });
    }
  });

  const tabNames = panels.length > 0 ? panels.map((p) => p.name) : names;

  return (
    <div>
      <Tabs defaultValue={tabNames[0]} className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <div className="w-fit">
              {tabNames.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
        </div>
        {panels.map((panel) => (
          <TabsContent
            key={panel.name}
            value={panel.name}
            className="relative space-y-10"
          >
            {panel.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

Panel.displayName = "TabPreview.Panel";
TabPreview.Panel = Panel;
