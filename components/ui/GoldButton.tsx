import Link from "next/link";

type GoldButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

export function GoldButton({
  href,
  children,
  className = "",
  external,
  showArrow = true,
}: GoldButtonProps) {
  const styles =
    "inline-flex items-center justify-center gap-1 rounded-md bg-[var(--color-gold)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-gold-dark)]";

  const content = (
    <>
      {children}
      {showArrow ? <span aria-hidden>→</span> : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles} ${className}`}>
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
