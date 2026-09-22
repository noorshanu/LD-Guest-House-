import Image from "next/image";

type SectionImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  priority?: boolean;
  sizes?: string;
};

export function SectionImage({
  src,
  alt,
  className = "object-cover",
  placeholderLabel = "Image coming soon",
  priority,
  sizes = "100vw",
}: SectionImageProps) {
  if (!src) {
    return (
      <div className="flex h-full min-h-[inherit] w-full flex-col items-center justify-center bg-[#e8ecef] p-6 text-center">
        <span className="text-3xl text-[var(--color-gold)]/40" aria-hidden>
          🖼
        </span>
        <p className="mt-3 text-sm font-medium text-[var(--color-ink-muted)]">{placeholderLabel}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
