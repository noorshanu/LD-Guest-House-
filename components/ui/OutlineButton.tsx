import Link from "next/link";

type OutlineButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

export function OutlineButton({
  href,
  children,
  className = "",
  external,
  showArrow = true,
}: OutlineButtonProps) {
  const styles =
    "inline-flex items-center justify-center gap-1 rounded-md border border-[var(--color-gold)]/55 bg-transparent px-5 py-2.5 text-sm font-semibold text-[var(--color-gold-dark)] transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/5";

  const content = (
    <>
      {children}
      {showArrow ? <span aria-hidden>→</span> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${styles} ${className}`}>
      {content}
    </Link>
  );
}
