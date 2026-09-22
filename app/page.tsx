import { About } from "@/components/sections/About";
import { Amenities } from "@/components/sections/Amenities";
import { Banquet } from "@/components/sections/Banquet";
import { Contact } from "@/components/sections/Contact";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Rooms } from "@/components/sections/Rooms";
import { Testimonials } from "@/components/sections/Testimonials";
import { TravelServices } from "@/components/sections/TravelServices";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <Rooms />
      <Banquet />
      <TravelServices />
      <Amenities />
      <Gallery />
      <About />
      <Location />
      <Testimonials />
      <Contact />
    </>
  );
}
