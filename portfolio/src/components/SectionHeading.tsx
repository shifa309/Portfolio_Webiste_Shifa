export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-[12px] uppercase tracking-wider text-signal">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
