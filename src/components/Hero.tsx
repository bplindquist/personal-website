import profile from "@/assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import { HiArrowDown, HiCode, HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

const GITHUB_PROFILE_ID = import.meta.env.VITE_GITHUB_PROFILE_ID;
const LINKEDIN_PROFILE_ID = import.meta.env.VITE_LINKEDIN_PROFILE_ID;
const BLUESKY_PROFILE = import.meta.env.VITE_BLUESKY_PROFILE;

const techStack = [
  "React",
  "Vue.js",
  "TypeScript",
  "React Native",
  "Django",
  "Test Automation",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-28 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-200/30 to-violet-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full opacity-20 blur-2xl animate-pulse-glow" />
              <img
                src={profile}
                alt="Brian Lindquist"
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white/50"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2">
                <HiSparkles className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-slate-700">9+ Years</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl order-2 lg:order-1">
            {/* Status badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-600">
                Available for new opportunities
              </span>
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="text-slate-800">Hi, I'm </span>
              <span className="gradient-text">Brian</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 font-medium">
              Senior Frontend Engineer with{" "}
              <span className="text-sky-600 font-semibold">9+ years</span> of
              experience crafting exceptional digital experiences
            </p>

            <p className="text-lg text-slate-500 leading-relaxed">
              I specialize in building scalable web and mobile applications,
              from ad tech platforms to enterprise warehouse systems. When I'm
              not coding, you'll find me exploring aviation or hanging out with
              my dog, Roscoe.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
              <HiCode className="w-5 h-5 text-slate-400" />
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-600 rounded-full hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
              <Link
                to="/experience"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-slate-200 hover:border-sky-200 hover:text-sky-600 transition-all duration-300 text-center"
              >
                View My Work
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
              <span className="text-sm text-slate-400 font-medium">
                Find me on
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://github.com/${GITHUB_PROFILE_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={`https://linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-sky-600 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://bsky.app/profile/${BLUESKY_PROFILE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-sky-500 hover:text-white transition-all duration-300"
                  aria-label="Bluesky"
                >
                  <SiBluesky className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to section */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-slate-400 font-medium">
          Scroll to explore
        </span>
        <HiArrowDown className="w-5 h-5 text-slate-400" />
      </div>
    </section>
  );
};
