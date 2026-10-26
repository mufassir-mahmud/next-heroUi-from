
import { Button } from "@heroui/react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="font-bold">
          ACME
        </Link>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
        </ul>

        <ThemeSwitch />
      </header>
    </nav>
  );
}
