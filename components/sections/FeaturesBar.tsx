import { FaCar, FaHeadset, FaLeaf, FaUtensils } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

import { FEATURES_BAR } from "@/lib/content";

const icons = {
  sparkle: FaWandMagicSparkles,
  parking: FaCar,
  food: FaUtensils,
  garden: FaLeaf,
  support: FaHeadset,
} as const;

export function FeaturesBar() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white py-9 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-x-8 gap-y-8 px-4 lg:justify-between lg:gap-x-4 lg:px-8">
        {FEATURES_BAR.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={item.label}
              className="flex w-[9rem] flex-col items-center text-center sm:w-auto sm:min-w-[10rem]"
            >
              <Icon className="size-7 text-[var(--color-bronze)]" aria-hidden />
              <p className="mt-3 text-sm font-medium leading-snug text-[var(--color-bronze)]">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
