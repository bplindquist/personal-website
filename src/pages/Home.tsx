import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, Section } from "@/components/layout";
import { SocialLinks } from "@/components/SocialLinks";
import flyingImg from "@/assets/flying.webp";
import roscoeImg from "@/assets/roscoe.webp";
import travelImg from "@/assets/oktoberfest.webp";

const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS;

export function HomePage() {
  return (
    <>
      <Section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <Container size="sm">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I'm Brian!
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            I'm a tech nerd and aviation enthusiast living in Madison, WI with
            my best friend Roscoe. When I'm not writing code, hiking with
            Roscoe, or running my business, I enjoy traveling and experiencing
            new people and cultures.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="text-foreground font-medium underline underline-offset-4 decoration-primary decoration-2"
            >
              {EMAIL_ADDRESS}
            </a>
            <SocialLinks />
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                alt: "Flying a small aircraft",
                src: flyingImg,
                label: "Aviation",
              },
              { alt: "Roscoe the dog", src: roscoeImg, label: "Roscoe" },
              { alt: "Oktoberfest in Munich", src: travelImg, label: "Travel" },
            ].map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-lg aspect-[4/5]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              More about me <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
