import {
  GraduationCap,
  MapPin,
  Languages,
  Mountain,
  Plane,
  Code,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container, Section, PageHeader } from "@/components/layout";

const interests = [
  {
    icon: Plane,
    title: "Flying",
    description:
      "Earned my private pilot license and try to get in the air whenever possible. Currently working toward my instrument rating and eventual commercial pilot certification.",
  },
  {
    icon: Mountain,
    title: "Hiking",
    description:
      "Hit the trails regularly with Roscoe. We've explored parks across Wisconsin and beyond.",
  },
  {
    icon: Languages,
    title: "Languages",
    description:
      "Continuing to improve my German and exploring Spanish and Russian. There's something deeply satisfying about unlocking a new way to communicate.",
  },
];

const techAreas = [
  "React",
  "TypeScript",
  "React Native",
  "Vue.js",
  "Node.js",
  "Django",
  "Testing",
];

export function AboutPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="sm">
          <PageHeader title="About me" />

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Brian—a software engineer living in Madison, WI with my dog
              Roscoe. When I'm not writing code, you'll find me annoying
              everyone around me with my endless facts about airplanes or taking
              Roscoe out on another hike around the beautiful parks in
              Wisconsin.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Before moving to the Midwest, I grew up in North Carolina,
              bouncing between the coast and the mountains. I proudly earned my
              Bachelor's degree from the Univeristy of North Carolina
              Wilmington, making me a first-generation college graduate in my
              family. I earned a private pilot certification just months after
              getting a driver's license in high school. I have always dreamed
              of one day flying professionally, but I found myself drawn to the
              tech industry after graduation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Professionally, I specialize in web and mobile application
              development. I've built everything from ad tech platforms to
              warehouse management systems, working with startups and enterprise
              companies alike. I care about code quality, but I care more about
              building things that actually help people.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="sm">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Beyond the keyboard
          </h2>

          <div className="space-y-6">
            {interests.map((interest) => (
              <div key={interest.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <interest.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{interest.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container size="sm">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            The professional stuff
          </h2>

          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">What I work with</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {techAreas.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      UNC Wilmington — Finance & Management Information Systems
                    </p>
                    <p className="text-sm text-primary mt-1">Summa Cum Laude</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Madison, Wisconsin — open to remote work
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Separator />
    </>
  );
}
