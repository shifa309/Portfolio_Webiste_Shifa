import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// projects" title="Systems I've designed and shipped" />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="flex flex-col rounded-2xl border border-border bg-panel p-6 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(18,20,28,0.25)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{p.tag}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">{p.name}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-primary-soft px-2 py-1 font-mono text-[11px] text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
