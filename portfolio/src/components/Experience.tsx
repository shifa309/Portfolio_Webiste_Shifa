import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="bg-panel py-20 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// experience" title="Where I've been building" />

        <div className="mt-10 space-y-0">
          {experience.map((job, i) => (
            <div
              key={job.company}
              className={`grid gap-2 py-6 md:grid-cols-[180px_1fr] ${
                i !== experience.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <p className="font-mono text-[13px] text-muted">{job.period}</p>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                <p className="mt-0.5 font-mono text-[13px] text-primary">{job.company}</p>
                {job.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2 text-ink-soft leading-relaxed">
                        <span className="text-signal mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
