import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";
import GithubIcon from "./GithubIcon";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-panel">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink focus-ring rounded"
        >
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[14px] text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-ink transition-colors focus-ring rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden md:flex text-ink-soft hover:text-primary transition-colors focus-ring rounded"
          >
            <GithubIcon size={19} />
          </a>

          <ThemeToggle />

          <button
            className="md:hidden focus-ring rounded p-1 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 bg-panel border-b border-border px-6 pb-4 text-sm text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
