import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-panel py-20 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// skills" title="Toolkit" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-border bg-bg p-5">
              <h3 className="font-mono text-[12px] uppercase tracking-wide text-muted">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-panel px-2.5 py-1 text-[13px] text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
