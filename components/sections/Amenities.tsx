import {
  FaCar,
  FaCoffee,
  FaLeaf,
  FaShower,
  FaSnowflake,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AMENITIES } from "@/lib/content";

const amenityIcons = {
  ac: FaSnowflake,
  bath: FaShower,
  parking: FaCar,
  garden: FaLeaf,
  hall: FaBuilding,
  breakfast: FaCoffee,
  dinner: FaUtensils,
  family: FaUsers,
} as const;

export function Amenities() {
  return (
    <section id="amenities" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Amenities"
          title="Everything You Need for a Comfortable Stay"
          align="center"
          className="mx-auto max-w-2xl text-center"
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 lg:gap-6">
          {AMENITIES.map((item) => {
            const Icon = amenityIcons[item.icon];
            return (
              <li key={item.label} className="flex flex-col items-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-[var(--color-gold)]/15 sm:size-16">
                  <Icon className="size-6 text-[var(--color-gold-dark)] sm:size-7" aria-hidden />
                </span>
                <p className="mt-3 text-xs font-semibold leading-snug text-[var(--color-ink)] sm:text-sm">
                  {item.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
