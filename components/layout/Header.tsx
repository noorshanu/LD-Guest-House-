"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-footer)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="#home" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/ldlogo.png"
            alt={`${SITE.name} logo`}
            width={72}
            height={72}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#d1c7bd] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#d1c7bd]"
          >
            <FaPhoneAlt className="size-3.5 text-[var(--color-gold)]" aria-hidden />
            <span className="hidden lg:inline">{SITE.phone}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <WhatsAppButton className="px-3 py-2 text-xs sm:text-sm" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <WhatsAppButton compact className="px-3 py-2" />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/20 text-white"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-black/40 md:hidden"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <nav
        id={menuId}
        className={`border-t border-white/10 bg-[var(--color-footer)] md:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-label="Mobile"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block border-b border-white/10 py-3 text-base font-bold text-[#d1c7bd] transition hover:text-white last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 py-2 text-base font-bold text-white"
            >
              <FaPhoneAlt className="size-4" aria-hidden />
              {SITE.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
