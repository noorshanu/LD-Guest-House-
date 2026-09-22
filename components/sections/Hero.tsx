"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaBed,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUsers,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import { HERO_AUTOPLAY_MS, HERO_FEATURES, HERO_SLIDES } from "@/lib/hero";
import { SITE } from "@/lib/site";

const featureIcons = {
  bed: FaBed,
  users: FaUsers,
  leaf: FaLeaf,
  building: FaBuilding,
  pin: FaMapMarkerAlt,
} as const;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (reduceMotion || HERO_SLIDES.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, HERO_AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      id="home"
      className="group relative flex min-h-[36rem] items-end overflow-hidden md:min-h-[88vh]"
      aria-roledescription="carousel"
      aria-label="Hero image slider"
    >
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 lg:px-8 lg:pb-20 lg:pt-36">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/95 sm:text-xs">
          A comfortable stay in the holy city
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.35rem]">
          LD Guest House, Ayodhya
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
          A peaceful stay for families, pilgrims, tourists and groups
        </p>

        <ul className="mt-8 flex max-w-3xl flex-wrap gap-x-6 gap-y-5 sm:gap-x-8 lg:gap-x-10">
          {HERO_FEATURES.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <li
                key={feature.label}
                className="flex w-[5.5rem] flex-col items-center text-center sm:w-auto sm:min-w-[6.5rem]"
              >
                <Icon className="size-6 shrink-0 text-[var(--color-gold)] sm:size-7" aria-hidden />
                <span className="mt-2 text-[11px] font-medium leading-snug text-white sm:text-xs">
                  {feature.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--color-gold-dark)]"
          >
            <FaPhoneAlt className="size-4" aria-hidden />
            Call Now
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-whatsapp)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
          >
            <FaWhatsapp className="size-5" aria-hidden />
            WhatsApp Us
          </a>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-5 right-4 z-10 flex items-center gap-2 font-serif text-base italic text-white/95 lg:bottom-8 lg:right-8 lg:text-lg">
        <span aria-hidden>🚩</span>
        Jai Shri Ram
      </p>

      {HERO_SLIDES.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/55 group-hover:opacity-100 md:flex lg:left-6"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/55 group-hover:opacity-100 md:flex lg:right-6"
            aria-label="Next slide"
          >
            <FaChevronRight className="size-4" />
          </button>

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 lg:bottom-7">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                className={`size-2 rounded-full transition ${
                  index === activeIndex
                    ? "scale-110 bg-[var(--color-gold)]"
                    : "bg-white/45 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
