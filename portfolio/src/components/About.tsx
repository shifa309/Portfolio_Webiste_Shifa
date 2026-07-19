import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// about" title="Grounded in shipping, not just prototyping" />
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1fr]">
        <p className="text-lg leading-relaxed text-ink-soft">
          I'm a Computer Science graduate from NUST, now working as an Associate Software
          Engineer – AI at Funavry Technologies. My work sits at the intersection of large
          language models and real business logic — chatbots that hold structured eligibility
          workflows together, retrieval systems that route between vector search and SQL, and
          recruitment tooling that turns messy resumes into structured signal.
        </p>
        <p className="text-lg leading-relaxed text-ink-soft">
          I care about the parts of AI engineering that don't show up in a demo: intent
          disambiguation, language detection that actually adapts turn by turn, metadata-aware
          retrieval routing. Outside of client work, I mentor through Microsoft's Student
          Ambassador program and keep building small classifiers and recommenders to stay close
          to fundamentals.
        </p>
      </div>
    </section>
  );
}
