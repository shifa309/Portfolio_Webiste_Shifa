import {
  BrainCircuit,
  Layers,
  Server,
  Cpu,
  Database,
  Cloud,
  Code2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

const groupIcons: Record<string, LucideIcon> = {
  "AI / Generative AI": BrainCircuit,
  "AI Frameworks": Layers,
  "Backend Development": Server,
  "ML Libraries": Cpu,
  Databases: Database,
  "Cloud & AI Services": Cloud,
  Programming: Code2,
  "Development Tools": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-panel py-20 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive toolkit spanning AI/ML frameworks, backend engineering, and the cloud infrastructure to ship it all to production."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => {
            const Icon = groupIcons[group] ?? Code2;
            return (
              <div
                key={group}
                className="rounded-2xl border border-border bg-bg p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="flex items-center gap-2 font-display text-[15px] font-semibold text-ink">
                  <Icon size={17} className="text-primary" />
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-panel px-2.5 py-1 font-mono text-[12px] text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
