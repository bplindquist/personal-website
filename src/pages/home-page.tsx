import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/layout";
import { SocialLinks } from "@/components/social-links";
import profile from "@/assets/profile.jpeg";
import flyingImg from "@/assets/flying.webp";
import roscoeImg from "@/assets/roscoe.webp";
import travelImg from "@/assets/oktoberfest.webp";

export function HomePage() {
  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                Madison, WI
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hey, I'm Brian
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Software engineer, private pilot, and dog dad. I build things
                for the web, explore the world from the air, and enjoying
                hanging out with my amazing dog Roscoe.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" asChild>
                  <Link to="/about">
                    More about me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>

              <SocialLinks className="pt-4" />
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={profile}
                alt="Brian Lindquist"
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl aspect-[4/5]">
              <img
                src={flyingImg}
                alt="Flying a small aircraft"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">Aviation</h3>
                <p className="text-white/80 text-sm">
                  Private pilot. Nothing beats seeing the world from 3,000 feet
                  and feeling the forces of flight.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-[4/5]">
              <img
                src={roscoeImg}
                alt="Roscoe the dog"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">Roscoe</h3>
                <p className="text-white/80 text-sm">
                  My hiking buddy and best friend. A loyal rescue who thinks
                  every walk is an extraordinary adventure.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl aspect-[4/5]">
              <img
                src={travelImg}
                alt="Oktoberfest in Munich"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg mb-1">Travel</h3>
                <p className="text-white/80 text-sm">
                  Always planning the next big trip back to Europe and trying to
                  perfect my German language skills.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="sm">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              What I do professionally
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a software engineer with over a decade of experience
              consulting and building web and mobile applications. I
              particularly enjoy working with small businesses and startups to
              deliver solutions that make a meaningful impact.
            </p>
            <Button variant="outline" asChild>
              <Link to="/projects">
                See my work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <Container size="sm">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Let's connect</h2>
            <p className="text-primary-foreground/80 text-lg">
              Whether you want to talk shop, discuss aviation, or just say
              hi—I'd love to hear from you.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Send me a message</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
