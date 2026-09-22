import { FaQuoteLeft, FaStar } from "react-icons/fa";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-pad bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Guests Say"
          align="center"
          className="mx-auto max-w-2xl text-center"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-lg bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
            >
              <FaQuoteLeft className="size-6 text-[var(--color-gold)]" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {item.quote}
              </blockquote>
              <p className="mt-5 text-sm font-bold text-[var(--color-ink)]">{item.name}</p>
              <div
                className="mt-3 flex gap-0.5 text-[var(--color-gold)]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="size-3.5" aria-hidden />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
