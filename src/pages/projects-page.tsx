import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container, Section, PageHeader } from "@/components/layout";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Colorcast",
    description:
      "A weather app built to showcase my open source React component library. Search by zip code, get current conditions with a fun rainbow theme.",
    techStack: ["React", "TypeScript", "@heeler/ui"],
    liveUrl: "https://colorcast-alpha.vercel.app/",
    highlights: [
      "Showcases @heeler/ui — my open source component library",
      "Focus on accessibility and clean design",
      "Deployed on Vercel with automatic CI/CD",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-2">
              {project.description}
            </CardDescription>
          </div>
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ProjectsPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="sm">
          <PageHeader
            title="Projects"
            description="A selection of things I've built. More to come as I carve out time between flying lessons and dog walks."
          />

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-muted/50 text-center">
            <p className="text-muted-foreground">
              More projects in the works. Check back soon or take a look at my{" "}
              <a
                href={`https://github.com/${import.meta.env.VITE_GITHUB_PROFILE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>{" "}
              for the latest.
            </p>
          </div>
        </Container>
      </Section>

      <Separator />
    </>
  );
}
