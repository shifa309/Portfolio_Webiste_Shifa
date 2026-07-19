import SectionHeading from "./SectionHeading";
import { education, certifications, extras } from "../data/content";
import { GraduationCap, Award, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// education" title="Education, certifications & extras" />

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <GraduationCap size={18} className="text-primary" /> Education
          </h3>
          <div className="mt-4 space-y-5">
            {education.map((e) => (
              <div key={e.degree} className="border-l-2 border-border pl-4">
                <p className="font-mono text-[12px] text-muted">{e.period}</p>
                <p className="mt-1 font-medium text-ink">{e.degree}</p>
                <p className="text-[14px] text-ink-soft">{e.school}</p>
                <p className="mt-1 text-[13px] text-signal">{e.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <Sparkles size={18} className="text-primary" /> Extra-curricular
          </h3>
          <div className="mt-4 space-y-3">
            {extras.map((e) => (
              <div key={e.name} className="flex justify-between gap-4 text-[14px]">
                <div>
                  <p className="text-ink">{e.name}</p>
                  <p className="text-ink-soft">{e.org}</p>
                </div>
                <p className="shrink-0 font-mono text-[12px] text-muted">{e.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <Award size={18} className="text-primary" /> Certifications & learning paths
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-panel p-4">
                <p className="font-mono text-[11px] text-muted">{c.date}</p>
                <p className="mt-1 text-[14px] font-medium leading-snug text-ink">{c.name}</p>
                <p className="mt-1 text-[13px] text-ink-soft">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
