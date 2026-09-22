import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Book Your Stay or Ask a Question"
              description="Send us a message and we will reply on phone or WhatsApp. For faster booking, call us directly."
            />
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-3 text-lg font-bold text-[var(--color-ink)] hover:text-[var(--color-gold-dark)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-cream)]">
                    <FaPhoneAlt className="size-4 text-[var(--color-gold)]" aria-hidden />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg font-bold text-[var(--color-ink)] hover:text-[var(--color-gold-dark)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-cream)]">
                    <FaWhatsapp className="size-5 text-[var(--color-whatsapp)]" aria-hidden />
                  </span>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <form className="rounded-lg border border-[var(--color-border)] bg-[var(--color-cream)] p-6 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="text-sm font-bold text-[var(--color-ink)]">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none ring-[var(--color-gold)] focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-sm font-bold text-[var(--color-ink)]">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none ring-[var(--color-gold)] focus:ring-2"
                  placeholder="Mobile number"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-bold text-[var(--color-ink)]">Email</span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none ring-[var(--color-gold)] focus:ring-2"
                  placeholder="Email (optional)"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-bold text-[var(--color-ink)]">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full resize-y rounded-md border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none ring-[var(--color-gold)] focus:ring-2"
                  placeholder="Dates, room type, or event enquiry…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-[var(--color-gold)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-gold-dark)] sm:w-auto"
            >
              Send Message
            </button>
            <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
              Form is for display only — connect to email or API when ready.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
