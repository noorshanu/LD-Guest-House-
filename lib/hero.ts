export const HERO_SLIDES = [
  { src: "/home1.jpg", alt: "LD Guest House — view of Ayodhya" },
  { src: "/home2.jpg", alt: "LD Guest House — peaceful stay in the holy city" },
  { src: "/home3.jpg", alt: "LD Guest House — rooms and surroundings" },
] as const;

export const HERO_FEATURES = [
  { label: "Spacious Rooms", icon: "bed" as const },
  { label: "Family Friendly", icon: "users" as const },
  { label: "Large Garden", icon: "leaf" as const },
  { label: "Banquet Hall", icon: "building" as const },
  { label: "Convenient Location", icon: "pin" as const },
] as const;

export const HERO_AUTOPLAY_MS = 6000;
