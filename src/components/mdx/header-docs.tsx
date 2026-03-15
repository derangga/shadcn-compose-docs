import { Separator } from "@/components/ui/separator";

interface HeaderDocsProps {
  title: string;
  description: string;
}

export function HeaderDocs({ title, description }: HeaderDocsProps) {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl text-foreground">
        {title}
      </h1>
      <p className="text-muted-foreground text-[1.05rem] sm:text-base">
        {description}
      </p>
      <Separator />
    </>
  );
}
