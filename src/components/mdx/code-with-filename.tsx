import type { ReactNode } from "react";

interface CodeWithFilenameProps {
  filename: string;
  children: ReactNode;
}

export function CodeWithFilename({
  filename,
  children,
}: CodeWithFilenameProps) {
  return (
    <div className="code-block-wrapper border relative bg-secondary rounded-lg my-6 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-sm font-medium capitalize">{filename}</span>
      </div>
      {children}
    </div>
  );
}
