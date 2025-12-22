import { HiCode, HiClock } from "react-icons/hi";
import { Footer } from "@/components/Footer";

export const ProjectsPage = () => {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-violet-100 text-violet-600 font-semibold text-sm rounded-full mb-4">
              Coming Soon
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              A curated selection of projects showcasing my frontend engineering
              expertise.
            </p>
          </div>

          {/* Under construction card */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl mx-auto mb-6 shadow-lg shadow-violet-500/25">
                <HiCode className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-4">
                🚧 Under Construction
              </h2>
              <p className="text-slate-500 text-center max-w-lg mx-auto mb-8">
                I'm currently curating my best work to showcase here. Check back
                soon for detailed case studies of projects spanning ad tech
                platforms, enterprise applications, and mobile solutions.
              </p>

              {/* Estimated launch */}
              <div className="flex items-center justify-center gap-2 text-slate-500">
                <HiClock className="w-5 h-5" />
                <span>Portfolio coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
