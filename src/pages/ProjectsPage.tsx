import { HiExternalLink } from "react-icons/hi";
import { SiReact, SiTypescript, SiVercel, SiNpm } from "react-icons/si";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Colorcast",
    description:
      "A simple React weather app that allows searching for a US location by zip code to view basic current weather data. Built to showcase components from my open source React component library.",
    techStack: ["React", "TypeScript", "@heeler/ui"],
    liveUrl: "https://colorcast-alpha.vercel.app/",
    links: [
      {
        label: "Live Demo",
        url: "https://colorcast-alpha.vercel.app/",
        icon: SiVercel,
      },
      {
        label: "@heeler/ui",
        url: "https://www.npmjs.com/package/@heeler/ui",
        icon: SiNpm,
      },
    ],
    highlights: [
      "Showcases @heeler/ui - my open source React component library",
      "Components focused on accessibility and ease of use",
      "Fun rainbow theme for visual appeal",
      "Deployed with Vercel for seamless CI/CD",
    ],
    gradient:
      "from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400",
  },
];

export const ProjectsPage = () => {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              A curated selection of projects showcasing my frontend engineering
              expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Rainbow gradient top border */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                        {project.title}
                      </h2>
                      <p className="text-slate-500">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                      >
                        {tech === "React" && (
                          <SiReact className="w-4 h-4 text-cyan-500" />
                        )}
                        {tech === "TypeScript" && (
                          <SiTypescript className="w-4 h-4 text-blue-600" />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                      Highlights
                    </h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <span className="text-violet-500 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.label}
                        <HiExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
