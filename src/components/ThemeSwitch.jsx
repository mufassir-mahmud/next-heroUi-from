
"use client";

import dynamic from "next/dynamic";

const ThemeSwitchContent = dynamic(
  () => import("./ThemeSwitchContent"),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-10 w-14"
        aria-hidden="true"
      />
    ),
  }
);

export default function ThemeSwitch() {
  return <ThemeSwitchContent />;
}
