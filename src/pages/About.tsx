import { GraduationCap, MapPin } from "lucide-react";
import { Container, PageHeader, Section } from "@/components/layout";

export function AboutPage() {
  return (
    <>
      <Section className="pt-28 md:pt-36">
        <Container size="sm">
          <PageHeader title="About" />

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I was born and raised in North Carolina before relocating to the
              Midwest after falling in love with the community in Madison. I
              have always enjoyed travel and experiencing life away from home,
              but I quickly learned that home can easily be where you make it.
              Roscoe has been by my side every step of the way since 2020, and I
              couldn't ask for a better companion.
            </p>

            <p>
              After a decade in the tech industry, I found myself in a position
              where I could take the leap to start my own business and provide
              my technical skills to others in my community. With Roscoe as my
              inspiration, I founded Happy Heeler Technologies to help small
              businesses and non-profits leverage technology to improve their
              operations and better serve their customers.
            </p>

            <p>
              We're always looking to connect and grow our network, and look
              forward to seeing where this journey takes us. Feel free to reach
              out if you'd like to chat about tech, aviation, dogs, or anything
              in between!
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container size="sm">
          <div className="border-t pt-10 grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Education</p>
                <p className="text-sm text-muted-foreground mt-1">
                  UNC Wilmington
                </p>
                <p className="text-sm text-muted-foreground">
                  Finance & Management Information Systems
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Summa Cum Laude
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Madison, Wisconsin
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
