type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)] sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
