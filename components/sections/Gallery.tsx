import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { SectionImage } from "@/components/ui/SectionImage";
import { GALLERY_FEATURED } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading title="A Glimpse of Our Property" className="max-w-xl" />
          <OutlineButton href="#gallery" className="w-full sm:w-auto">
            View Full Gallery
          </OutlineButton>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {GALLERY_FEATURED.map((image) => (
            <li key={image.src} className="relative aspect-[5/4] overflow-hidden rounded-md">
              <SectionImage src={image.src} alt={image.alt} sizes="20vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
