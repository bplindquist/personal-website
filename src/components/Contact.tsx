import { HiMail, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS;
const GITHUB_PROFILE_ID = import.meta.env.VITE_GITHUB_PROFILE_ID;
const LINKEDIN_PROFILE_ID = import.meta.env.VITE_LINKEDIN_PROFILE_ID;
const BLUESKY_PROFILE = import.meta.env.VITE_BLUESKY_PROFILE;

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-violet-100 text-violet-600 font-semibold text-sm rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Let's build something <span className="gradient-text">amazing</span>{" "}
            together
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8">
                Fill out the form or reach out directly. I typically respond
                within 24 hours.
              </p>

              <div className="space-y-6">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium group-hover:text-sky-400 transition-colors">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium">Madison, Wisconsin</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href={`https://github.com/${GITHUB_PROFILE_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://bsky.app/profile/${BLUESKY_PROFILE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-all duration-300"
                    aria-label="Bluesky"
                  >
                    <SiBluesky className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <HiPaperAirplane className="w-5 h-5 rotate-90" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
