import { SocialLinks } from "@/components/SocialLinks";
import flyingImg from "@/assets/flying.webp";
import roscoeImg from "@/assets/roscoe.webp";
import travelImg from "@/assets/oktoberfest.webp";

const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS;

export function HomePage() {
  return (
    <div className="flex flex-col h-screen px-6 py-10 sm:px-10 md:px-16 max-w-screen-lg mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm Brian!
        </h1>

        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
          I'm a tech nerd and aviation enthusiast living in Madison, WI with my
          best friend Roscoe. When I'm not writing code, hiking with Roscoe, or
          running my business, I enjoy traveling, meeting new people, and
          experiencing different cultures.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-foreground font-medium underline underline-offset-4 decoration-primary decoration-2"
          >
            {EMAIL_ADDRESS}
          </a>
          <SocialLinks />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 md:gap-4 min-h-0">
        {[
          {
            alt: "Photo of me flying a Cessna 172 over Columbia, SC",
            src: flyingImg,
            className: "row-span-2 md:row-span-1",
          },
          {
            alt: "Photo of me and my dog Roscoe at the beach on a sunny day",
            src: roscoeImg,
            className: "",
          },
          {
            alt: "Photo of me and my friend Thomas celebrating Oktoberfest in Munich",
            src: travelImg,
            className: "",
          },
        ].map((item) => (
          <div
            key={item.alt}
            className={`relative overflow-hidden rounded-lg ${item.className}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
