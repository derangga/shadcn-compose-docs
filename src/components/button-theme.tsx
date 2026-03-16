import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface ButtonThemeProps {
  isDark: boolean;
  onClick: () => void;
}

export function ButtonTheme({ isDark, onClick }: ButtonThemeProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  );
}
