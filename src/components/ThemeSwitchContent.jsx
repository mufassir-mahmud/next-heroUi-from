
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

export default function ThemeSwitchContent() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onChange={(selected) =>
        setTheme(selected ? "dark" : "light")
      }
      aria-label="Toggle dark mode"
      size="lg"
    >
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb>
            <Switch.Icon>
              {isDark ? (
                <Sun className="size-3" />
              ) : (
                <Moon className="size-3" />
              )}
            </Switch.Icon>
          </Switch.Thumb>
        </Switch.Control>
      </Switch.Content>
    </Switch>
  );
}
