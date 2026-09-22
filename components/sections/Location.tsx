import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import { LOCATION_COPY } from "@/lib/content";
import { SITE } from "@/lib/site";

export function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <SectionHeading eyebrow="Our Location" title="Conveniently Located in Ayodhya" />
          <p className="mt-5 leading-relaxed text-[var(--color-ink-muted)]">{LOCATION_COPY}</p>
          <address className="mt-5 not-italic leading-relaxed text-[var(--color-ink)]">
            {SITE.address}
          </address>
          <GoldButton href={SITE.mapsUrl} external className="mt-8">
            View on Google Maps
          </GoldButton>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-border)] shadow-sm">
          <iframe
            title="LD Guest House on Google Maps"
            src={SITE.mapsEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
