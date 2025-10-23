"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent"
        aria-label="테마 전환"
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-all hover:bg-accent hover:scale-105 active:scale-95"
      aria-label={`${theme === "dark" ? "라이트" : "다크"} 모드로 전환`}
    >
      <div className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all duration-300 ${
            theme === "dark" ? "rotate-90 scale-0" : ""
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-300 ${
            theme === "dark" ? "rotate-0 scale-100" : ""
          }`}
        />
      </div>
    </button>
  );
}

