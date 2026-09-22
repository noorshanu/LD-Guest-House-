import {
  FaCar,
  FaMapMarkedAlt,
  FaRoute,
  FaShuttleVan,
} from "react-icons/fa";
import { FaPlaceOfWorship } from "react-icons/fa6";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionImage } from "@/components/ui/SectionImage";
import { TRAVEL_COPY, TRAVEL_IMAGE, TRAVEL_SERVICES } from "@/lib/content";

const travelIcons = {
  taxi: FaCar,
  van: FaShuttleVan,
  package: FaRoute,
  temple: FaPlaceOfWorship,
  map: FaMapMarkedAlt,
} as const;

export function TravelServices() {
  return (
    <section className="section-pad bg-[var(--color-pale-blue)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:col-span-4 lg:aspect-auto lg:min-h-[22rem]">
          <SectionImage
            src={TRAVEL_IMAGE}
            alt="Taxi and traveller services in Ayodhya"
            placeholderLabel="Travel services image"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Travel Services" title="Explore Ayodhya with Us" />
          <p className="mt-4 text-base font-bold text-[var(--color-ink)]">{TRAVEL_COPY.subtitle}</p>
          <p className="mt-4 leading-relaxed text-[var(--color-ink-muted)]">{TRAVEL_COPY.body}</p>
          <GoldButton href="#contact" className="mt-8">
            Know More
          </GoldButton>
        </div>

        <ul className="space-y-4 lg:col-span-3 lg:pl-2">
          {TRAVEL_SERVICES.map((service) => {
            const Icon = travelIcons[service.icon];
            return (
              <li key={service.label} className="flex items-center gap-3">
                <Icon className="size-4 shrink-0 text-[var(--color-gold)]" aria-hidden />
                <span className="text-sm font-medium text-[var(--color-ink-muted)]">
                  {service.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
