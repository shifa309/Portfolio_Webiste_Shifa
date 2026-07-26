import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="bg-panel py-20 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Professional Experience"
          subtitle="Building AI-augmented conversational systems and production ML tooling across finance, recruitment, and dev-tooling domains."
        />

        <div className="mt-10 space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-bg p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                    <p className="text-[14px] text-primary">{job.company}</p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-1.5 sm:items-end">
                  <span className="flex items-center gap-1.5 font-mono text-[12px] text-muted">
                    <Calendar size={13} /> {job.period}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[12px] text-muted">
                    <MapPin size={13} /> {job.location}
                  </span>
                </div>
              </div>

              {job.points.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-[14px] leading-relaxed text-ink-soft">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-panel px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
