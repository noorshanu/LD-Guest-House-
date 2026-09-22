import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { ROOMS } from "@/lib/content";
import { SITE } from "@/lib/site";

export function Rooms() {
  return (
    <section id="rooms" className="section-pad bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Rooms"
          title="Comfortable Stays for Every Traveller"
          description="Choose from our spacious and well-maintained rooms, designed for families, pilgrims and groups."
          align="center"
          className="mx-auto max-w-2xl text-center"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ROOMS.map((room) => (
            <li
              key={room.title}
              className="flex flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-[var(--color-ink)]">{room.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{room.description}</p>
                <OutlineButton href={SITE.whatsappHref} external className="mt-auto pt-5">
                  View Details
                </OutlineButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
