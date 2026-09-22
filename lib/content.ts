export const FEATURES_BAR = [
  { label: "Clean & Hygienic", icon: "sparkle" as const },
  { label: "Spacious Parking", icon: "parking" as const },
  { label: "Breakfast & Dinner", icon: "food" as const },
  { label: "Garden / Lawn", icon: "garden" as const },
  { label: "24/7 Guest Assistance", icon: "support" as const },
] as const;

export const ABOUT_HIGHLIGHTS = [
  { label: "Comfortable Rooms", icon: "bed" as const },
  { label: "Spacious Lawn & Parking", icon: "parking" as const },
  { label: "Ideal for Families & Groups", icon: "users" as const },
  { label: "Close to Major Ayodhya Attractions", icon: "pin" as const },
] as const;

export const ROOMS = [
  {
    title: "Deluxe AC Room",
    description: "Spacious and premium comfort",
    image: "/rooms/comfortable-room-ld-guest-house.jpg",
  },
  {
    title: "Economy AC Room",
    description: "Comfortable and budget-friendly",
    image: "/rooms/budget-hotel-room-ayodhya.jpg",
  },
  {
    title: "4-Bed / Family Room",
    description: "Ideal for families and small groups",
    image: "/rooms/comfortable-family-room-ayodhya.jpg",
  },
  {
    title: "Dormitory / Group",
    description: "Suitable for large groups",
    image: "/rooms/affordable-hotel-room-ayodhya.jpg",
  },
] as const;

/** Set to `null` to show a placeholder until the asset is ready */
export const BANQUET_IMAGE: string | null = "/rooms/20250324_211352.jpg";

/** Wedding / travel composite — add to `public/travel-services.jpg` when available */
export const TRAVEL_IMAGE: string | null = null;

/** Building exterior — add to `public/about-building.jpg` when available */
export const ABOUT_BUILDING_IMAGE: string | null =
  "/rooms/file_000000008dcc8211af8e31b57f7ff036.png";

export const AMENITIES = [
  { label: "Air Conditioning", icon: "ac" as const },
  { label: "Attached Bathrooms", icon: "bath" as const },
  { label: "Spacious Parking", icon: "parking" as const },
  { label: "Large Garden / Lawn", icon: "garden" as const },
  { label: "Banquet Hall", icon: "hall" as const },
  { label: "Breakfast Facility", icon: "breakfast" as const },
  { label: "Dinner Facility", icon: "dinner" as const },
  { label: "Family Friendly", icon: "family" as const },
] as const;

export const GALLERY_FEATURED = [
  { src: "/rooms/best-room-near-ram-mandir-ayodhya.jpg", alt: "Bedroom" },
  { src: "/rooms/20250627_064243.jpg", alt: "Garden and lawn" },
  { src: "/rooms/hotel-interior-ayodhya.jpg", alt: "Banquet hall interior" },
  { src: "/rooms/20250324_204033.jpg", alt: "Building exterior" },
  { src: "/rooms/ample-parking-ld-guest-house-ayodhya.jpg", alt: "Parking area" },
] as const;

export const TRAVEL_SERVICES = [
  { label: "Local & Outstation Taxi", icon: "taxi" as const },
  { label: "Traveller Booking", icon: "van" as const },
  { label: "Ayodhya Tour Packages", icon: "package" as const },
  { label: "Ram Mandir Darshan", icon: "temple" as const },
  { label: "Customized Itineraries", icon: "map" as const },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Very comfortable stay with clean rooms and helpful staff. Perfect for our family trip to Ayodhya.",
    name: "Amit Sharma",
  },
  {
    quote:
      "Spacious parking and a peaceful atmosphere. The garden area is beautiful and well maintained.",
    name: "Priya Verma",
  },
  {
    quote:
      "Great service and convenient location. Booking on WhatsApp was quick and hassle-free.",
    name: "Rajesh Gupta",
  },
] as const;

export const BANQUET_COPY = {
  title: "Marriage Lawn & Banquet Hall",
  subtitle: "Make your special moments more memorable",
  body: "Our spacious lawn and banquet hall are perfect for weddings, receptions, family functions and other celebrations. Beautiful space, peaceful surroundings and complete support for your events.",
} as const;

export const TRAVEL_COPY = {
  subtitle: "Taxi, Traveller, Tour Packages & Darshan Arrangements",
  body: "We provide reliable travel services for pilgrims and tourists — from local taxis and traveller booking to complete Ayodhya tour packages and darshan arrangements.",
} as const;

export const ABOUT_COPY =
  "LD Guest House offers a peaceful and comfortable stay in Ayodhya for pilgrims, families and tourists. With spacious rooms, large garden, banquet facilities and convenient location, we ensure a pleasant experience for every guest.";

export const LOCATION_COPY =
  "Our guest house is easily accessible from major roads and landmarks in Ayodhya, making it convenient for visitors heading to Shri Ram Janmabhoomi and other sacred sites.";
