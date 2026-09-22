import {
  FaBed,
  FaCar,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { ABOUT_COPY, ABOUT_HIGHLIGHTS } from "@/lib/content";
import { SITE } from "@/lib/site";

const highlightIcons = {
  bed: FaBed,
  parking: FaCar,
  users: FaUsers,
  pin: FaMapMarkerAlt,
} as const;

export function About() {
  return (
    <section id="about" className="section-pad bg-[var(--color-pale-blue)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Property Video
            </p>
            <YouTubeEmbed
              videoId={SITE.introVideoId}
              title={`${SITE.name} — introduction video`}
            />
            <a
              href={SITE.introVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-gold-dark)]"
            >
              Watch on YouTube
            </a>
          </div>
          <div>
            <SectionHeading eyebrow="About LD Guest House" title="A Home Away from Home" />
            <p className="mt-5 leading-relaxed text-[var(--color-ink-muted)]">{ABOUT_COPY}</p>
            <OutlineButton href="#contact" className="mt-8">
              Read More
            </OutlineButton>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {ABOUT_HIGHLIGHTS.map((item) => {
            const Icon = highlightIcons[item.icon];
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-md bg-[var(--color-muted-panel)] px-4 py-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--color-gold)]" aria-hidden />
                <span className="text-sm font-semibold text-[var(--color-ink)]">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
