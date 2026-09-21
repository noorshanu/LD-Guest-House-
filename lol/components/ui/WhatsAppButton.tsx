import { FaWhatsapp } from "react-icons/fa";

import { SITE } from "@/lib/site";

type WhatsAppButtonProps = {
  className?: string;
  compact?: boolean;
};

export function WhatsAppButton({ className = "", compact }: WhatsAppButtonProps) {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-whatsapp)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 ${className}`}
    >
      <FaWhatsapp className="size-5 shrink-0" aria-hidden />
      {compact ? <span className="sr-only">WhatsApp</span> : <span>WhatsApp</span>}
    </a>
  );
}
