import { GoldButton } from "@/components/ui/GoldButton";
import { SectionImage } from "@/components/ui/SectionImage";
import { BANQUET_COPY, BANQUET_IMAGE } from "@/lib/content";

export function Banquet() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-gradient-to-br from-white via-white to-[var(--color-cream)] px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <h2 className="font-serif text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-[2.35rem]">
          {BANQUET_COPY.title}
        </h2>
        <p className="mt-3 text-lg font-medium text-[var(--color-ink-muted)]">
          {BANQUET_COPY.subtitle}
        </p>
        <p className="mt-5 max-w-lg leading-relaxed text-[var(--color-ink-muted)]">
          {BANQUET_COPY.body}
        </p>
        <GoldButton href="#contact" className="mt-8 self-start">
          Enquire Now
        </GoldButton>
      </div>

      <div className="relative min-h-[18rem] lg:min-h-[26rem]">
        <SectionImage
          src={BANQUET_IMAGE}
          alt="Marriage lawn and banquet setup at night"
          placeholderLabel="Banquet / lawn photo"
          sizes="50vw"
        />
      </div>
    </section>
  );
}
