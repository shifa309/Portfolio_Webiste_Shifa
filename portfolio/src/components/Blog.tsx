import SectionHeading from "./SectionHeading";
import { blogPlaceholder } from "../data/content";
import { PenLine } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="bg-panel py-20 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// blog" title="Notes from the build" />

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border bg-bg p-8 sm:flex-row sm:items-center">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
            <PenLine size={20} />
          </div>
          <div>
            <p className="font-medium text-ink">Nothing published yet — but it's coming.</p>
            <p className="mt-1 text-[15px] text-ink-soft">{blogPlaceholder.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
