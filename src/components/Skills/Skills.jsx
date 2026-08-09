
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  SwatchIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    title: "Frontend Development",
    icon: CodeBracketIcon,
    skills: [
      { name: "HTML5", level: "90%" },
      { name: "CSS3", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "React.js", level: "85%" },
      { name: "Next.js", level: "75%" },
    ],
  },
  {
    title: "Styling & UI",
    icon: SwatchIcon,
    skills: [
      { name: "Tailwind CSS", level: "90%" },
      { name: "DaisyUI", level: "80%" },
      { name: "Responsive Design", level: "90%" },
      { name: "HeroUI", level: "75%" },
    ],
  },
  {
    title: "React & Development",
    icon: CommandLineIcon,
    skills: [
      { name: "React Router", level: "85%" },
      { name: "Context API", level: "80%" },
      { name: "React Hooks", level: "85%" },
      { name: "REST API", level: "75%" },
    ],
  },
  {
    title: "Tools",
    icon: WrenchScrewdriverIcon,
    skills: [
      { name: "Git", level: "80%" },
      { name: "GitHub", level: "85%" },
      { name: "VS Code", level: "90%" },
      { name: "Vercel", level: "75%" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Technologies and tools I use to build modern, responsive, and
            user-friendly web applications.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="mt-7 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>

                      {/* Skill Name + Percentage */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>

                        <span className="text-sm font-semibold text-blue-600">
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-blue-600 transition-all duration-700"
                          style={{ width: skill.level }}
                        ></div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tech Tags */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm font-semibold text-gray-700">
            Technologies I Work With
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "DaisyUI",
              "Git",
              "GitHub",
              "Vercel",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

