export const SITE = {
  name: "LD Guest House",
  tagline: "Ayodhya",
  phone: "9936242959",
  phoneHref: "tel:+919936242959",
  whatsappHref: "https://wa.me/919936242959",
  addressPlaceholder: "(Address will be added here)",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const FOOTER_QUICK_LINKS_LEFT = NAV_LINKS.slice(0, 4);
export const FOOTER_QUICK_LINKS_RIGHT = NAV_LINKS.slice(4);

export const FOOTER_SERVICES = [
  { label: "Guest House", href: "#rooms" },
  { label: "Banquet Hall", href: "#amenities" },
  { label: "Travel & Tour Packages", href: "#contact" },
  { label: "Taxi & Traveller Booking", href: "#contact" },
  { label: "Darshan Arrangements", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "YouTube", href: "#", icon: "youtube" as const },
] as const;
