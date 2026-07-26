export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{subtitle}</p>
      )}
      <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-primary/70" />
    </div>
  );
}
