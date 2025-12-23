import {
  HiAcademicCap,
  HiLocationMarker,
  HiLightningBolt,
  HiTrendingUp,
} from "react-icons/hi";

const highlights = [
  { value: "9+", label: "Years Experience" },
  { value: "100%", label: "Remote Ready" },
  { value: "Enterprise", label: "& Startup Clients" },
  { value: "Full Stack", label: "Web & Mobile" },
];

export const AboutMe = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 font-semibold text-sm rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Passionate about building{" "}
            <span className="gradient-text">great products</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            9+ years of turning complex problems into elegant, user-friendly
            solutions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((stat) => (
            <div
              key={stat.label}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-sky-200 transition-all duration-300 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Education */}
          <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-teal-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HiAcademicCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
              Education
            </h3>
            <p className="text-lg text-slate-700 font-semibold">
              UNC Wilmington
            </p>
            <p className="text-sm text-slate-500 mt-1">Computer Science</p>
          </div>

          {/* Location */}
          <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-rose-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HiLocationMarker className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
              Location
            </h3>
            <p className="text-lg text-slate-700 font-semibold">Madison, WI</p>
            <p className="text-sm text-slate-500 mt-1">Open to remote</p>
          </div>

          {/* Specialization */}
          <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-sky-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HiLightningBolt className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
              Specialization
            </h3>
            <p className="text-lg text-slate-700 font-semibold">
              Frontend Development
            </p>
            <p className="text-sm text-slate-500 mt-1">React & TypeScript</p>
          </div>

          {/* Focus */}
          <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-violet-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HiTrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
              Focus
            </h3>
            <p className="text-lg text-slate-700 font-semibold">
              Performance & UX
            </p>
            <p className="text-sm text-slate-500 mt-1">Scalable solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};
