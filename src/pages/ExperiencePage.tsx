import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiDownload,
} from "react-icons/hi";
import { Footer } from "@/components/Footer";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "LeafLink",
    location: "Remote",
    period: "Jan 2022 - Feb 2025",
    description:
      "Architected and maintained core platform features driving revenue growth while championing frontend best practices across the organization.",
    highlights: [
      "Built and maintained a reusable in-house ad framework, enabling scalable ad rendering across the platform and driving meaningful revenue growth",
      "Authored and championed TypeScript best practice documentation and proof-of-concept implementations, leading to company-wide adoption and improved code quality",
      "Led the modernization of legacy Django templates into modular Vue components, decoupling UI logic to improve maintainability and development velocity",
      "Presented new features and technical initiatives during monthly company showcases, communicating impact to cross-functional and executive stakeholders",
    ],
    technologies: ["Vue.js", "TypeScript", "Django", "Python", "Ad Tech"],
  },
  {
    title: "Senior Engineering Consultant",
    company: "Levvel",
    location: "Charlotte, NC",
    period: "Jul 2017 - Jan 2022",
    description:
      "Delivered production-grade solutions for diverse clients ranging from early-stage startups to global financial institutions, leading cross-functional teams and owning feature roadmaps.",
    highlights: [
      "Led a cross-functional team in designing and delivering a cross-platform warehouse application, streamlining dock operations including truck loading/unloading, inventory scanning, and damaged-goods rework",
      "Delivered production-grade solutions for clients ranging from early-stage startups to global financial institutions",
      "Built applications primarily using React, React Native, and TypeScript for both web and mobile platforms",
      "Owned feature roadmaps and release planning, coordinating on-site launches with client stakeholders to ensure smooth rollouts",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Mobile Development",
      "Enterprise Solutions",
    ],
  },
  {
    title: "QA Engineer",
    company: "Synechron",
    location: "Charlotte, NC",
    period: "Jul 2017 - Jan 2022",
    description:
      "Built automated testing infrastructure for financial applications, transitioning testing practices from manual to automated approaches.",
    highlights: [
      "Created and maintained a Selenium-based automated testing framework used to test several financial applications",
      "Converted manual test cases to automated tests while refactoring legacy automation, considerably reducing testing and release times",
      "Developed deep understanding of software quality practices and testing methodologies",
      "Gained expertise in financial services domain and compliance requirements",
    ],
    technologies: [
      "Selenium",
      "Test Automation",
      "Java",
      "Financial Services",
      "QA",
    ],
  },
];

export const ExperiencePage = () => {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 font-semibold text-sm rounded-full mb-4">
              Career Journey
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
              9+ years of building web and mobile applications, leading teams,
              and delivering solutions for startups to Fortune 500 companies.
            </p>

            {/* Download resume button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-violet-500 to-sky-500 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 transform -translate-x-1/2 mt-8 ring-4 ring-white" />

                {/* Content card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } pl-8 md:pl-0`}
                >
                  <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          {exp.title}
                        </h3>
                        <p className="text-sky-600 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center">
                        <HiBriefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <HiCalendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
