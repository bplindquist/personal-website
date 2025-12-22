import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiNodedotjs,
  SiDjango,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiSelenium,
  SiJest,
  SiCypress,
  SiWebpack,
  SiAmazon,
  SiCss3,
  SiStyledcomponents,
  SiBootstrap,
  SiMui,
  SiFigma,
  SiStorybook,
} from "react-icons/si";
import { HiDeviceMobile, HiDeviceTablet, HiEye } from "react-icons/hi";

const skillCategories = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React Native", icon: HiDeviceMobile, color: "#61DAFB" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "CSS/Grid/Flexbox", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Responsive Design", icon: HiDeviceTablet, color: "#6366F1" },
      { name: "Accessibility (WCAG)", icon: HiEye, color: "#22C55E" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 font-semibold text-sm rounded-full mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Nearly a decade of hands-on experience with modern web technologies
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-6 pb-4 border-b border-slate-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 p-8 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl text-white text-center">
          <p className="text-lg font-medium mb-2">
            Always learning, always growing
          </p>
          <p className="text-sky-100">
            I stay up-to-date with the latest frontend trends and best practices
            through continuous learning, conferences, and community involvement.
          </p>
        </div>
      </div>
    </section>
  );
};
