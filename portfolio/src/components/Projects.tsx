import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Database,
  Workflow,
  UserCheck,
  Tags,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import GithubIcon from "./GithubIcon";
import { projects } from "../data/content";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  messageSquare: MessageSquare,
  database: Database,
  workflow: Workflow,
  userCheck: UserCheck,
  tags: Tags,
};

const covers: Record<string, string> = {
  recommend: "from-violet-500/25 via-fuchsia-500/10",
  chat: "from-sky-500/25 via-blue-500/10",
  retrieval: "from-emerald-500/25 via-teal-500/10",
  workflow: "from-amber-500/25 via-orange-500/10",
  hiring: "from-rose-500/25 via-pink-500/10",
  classifier: "from-indigo-500/25 via-purple-500/10",
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of AI systems and tools I've designed, built, and shipped to production."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = icons[p.icon] ?? Sparkles;
          const cover = covers[p.cover] ?? covers.recommend;
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.35)]"
            >
              <div
                className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${cover} to-transparent`}
              >
                <div
                  className="absolute inset-0 opacity-[0.25]"
                  style={{
                    backgroundImage:
                      "radial-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    color: "var(--color-border)",
                  }}
                />
                <Icon
                  size={44}
                  strokeWidth={1.5}
                  className="relative text-ink/70 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 font-mono text-[11px] text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {p.tag}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-soft">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-bg px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors group-hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {(p.codeUrl || p.demoUrl) && (
                  <div className="mt-5 flex gap-2 border-t border-border pt-4">
                    {p.codeUrl && (
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary focus-ring"
                      >
                        <GithubIcon size={14} /> Code
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-[13px] font-medium text-bg transition-transform hover:-translate-y-0.5 focus-ring"
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
