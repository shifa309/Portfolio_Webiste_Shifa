import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-panel py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[12px] text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React &amp; Tailwind</p>
      </div>
    </footer>
  );
}
