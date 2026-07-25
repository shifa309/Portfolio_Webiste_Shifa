import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Database,
  Workflow,
  UserCheck,
  Tags,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  messageSquare: MessageSquare,
  database: Database,
  workflow: Workflow,
  userCheck: UserCheck,
  tags: Tags,
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// projects" title="Systems I've designed and shipped" />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = icons[p.icon] ?? Sparkles;
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.35)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon size={20} />
                </div>
                <span className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-muted">
                {p.tag}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-soft">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors group-hover:border-primary/30 group-hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
