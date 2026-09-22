import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";

import {
  FOOTER_QUICK_LINKS_LEFT,
  FOOTER_QUICK_LINKS_RIGHT,
  FOOTER_SERVICES,
  SITE,
  SOCIAL_LINKS,
} from "@/lib/site";

const linkClass =
  "text-sm text-[#d1c7bd] transition hover:text-white";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-white">{children}</h3>;
}

function SocialIcon({ type }: { type: "facebook" | "instagram" | "youtube" }) {
  const base = "flex size-9 items-center justify-center rounded-full text-white";

  if (type === "facebook") {
    return (
      <span className={`${base} bg-[#1877F2]`}>
        <FaFacebookF className="size-4" aria-hidden />
      </span>
    );
  }
  if (type === "instagram") {
    return (
      <span
        className={`${base} bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]`}
      >
        <FaInstagram className="size-4" aria-hidden />
      </span>
    );
  }
  return (
    <span className={`${base} bg-[#FF0000]`}>
      <FaYoutube className="size-4" aria-hidden />
    </span>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-footer)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:text-left">
          <div className="shrink-0">
            <Link href="#home" className="inline-block">
              <Image
                src="/ldlogo.png"
                alt={`${SITE.name} logo`}
                width={160}
                height={100}
                className="h-auto w-44 max-w-full object-contain"
              />
            </Link>
          </div>

          <div className="w-full max-w-xs lg:max-w-none lg:w-auto">
            <FooterHeading>Quick Links</FooterHeading>
            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-2.5 text-left sm:gap-x-14">
              <ul className="space-y-2.5">
                {FOOTER_QUICK_LINKS_LEFT.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {FOOTER_QUICK_LINKS_RIGHT.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full max-w-xs lg:max-w-none lg:w-auto">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden w-px self-stretch bg-white/15 lg:block" aria-hidden />

          <div className="w-full max-w-xs space-y-8 lg:max-w-none lg:w-auto">
            <div>
              <FooterHeading>Contact Us</FooterHeading>
              <div className="mt-5 space-y-4">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-3 text-sm text-[#d1c7bd] transition hover:text-white"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#4a3728]">
                    <FaPhoneAlt className="size-3.5 text-white" aria-hidden />
                  </span>
                  {SITE.phone}
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-[#d1c7bd] transition hover:text-white lg:justify-start"
                >
                  <FaWhatsapp className="size-5 shrink-0 text-[#25D366]" aria-hidden />
                  WhatsApp Us
                </a>
                <p className="text-sm text-[#d1c7bd]/90">{SITE.addressPlaceholder}</p>
              </div>
            </div>

            <div>
              <FooterHeading>Follow Us</FooterHeading>
              <ul className="mt-5 flex justify-center gap-3 lg:justify-start">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} aria-label={social.label} className="transition hover:opacity-90">
                      <SocialIcon type={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-[#d1c7bd]/80 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}, Ayodhya. All rights reserved.
          </p>
          <p>
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <span className="mx-2 text-white/30">|</span>
            <a href="#" className="transition hover:text-white">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
