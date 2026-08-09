
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Although I am a fresher, I have gained practical experience by
            building real-world projects and continuously improving my
            frontend development skills.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        {/* Experience Card */}
        <div className="mx-auto max-w-4xl">

          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg sm:p-8">

            {/* Timeline Line */}
            <div className="absolute left-10 top-24 hidden h-48 w-px bg-blue-200 sm:block"></div>

            <div className="flex flex-col gap-6 sm:flex-row">

              {/* Icon */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                <ComputerDesktopIcon className="h-9 w-9 text-blue-600" />
              </div>

              {/* Content */}
              <div className="flex-1">

                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Frontend Developer
                    </h3>

                    <p className="mt-1 font-medium text-blue-600">
                      Personal Projects & Practical Experience
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    Fresher
                  </span>
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  I have been developing responsive and user-friendly web
                  applications through personal and academic projects.
                  During this journey, I have worked with React.js,
                  JavaScript, Tailwind CSS, React Router, and modern frontend
                  development tools.
                </p>

                {/* Skills / Responsibilities */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">

                  {/* Item 1 */}
                  <div className="rounded-xl bg-gray-50 p-4">
                    <CodeBracketIcon className="h-7 w-7 text-blue-600" />

                    <h4 className="mt-3 font-semibold text-gray-900">
                      React Development
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Built reusable components and interactive interfaces
                      using React.js.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="rounded-xl bg-gray-50 p-4">
                    <ComputerDesktopIcon className="h-7 w-7 text-blue-600" />

                    <h4 className="mt-3 font-semibold text-gray-900">
                      Responsive UI
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Created responsive layouts for desktop, tablet, and
                      mobile devices.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="rounded-xl bg-gray-50 p-4">
                    <RocketLaunchIcon className="h-7 w-7 text-blue-600" />

                    <h4 className="mt-3 font-semibold text-gray-900">
                      Project Development
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Developed portfolio, e-commerce, and application
                      management projects.
                    </p>
                  </div>

                </div>

                {/* Technologies */}
                <div className="mt-7">
                  <p className="mb-3 text-sm font-semibold text-gray-900">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "React.js",
                      "Tailwind CSS",
                      "React Router",
                      "Git",
                      "GitHub",
                    ].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900">
            Looking for my first professional opportunity
          </h3>

          <p className="mt-2 leading-7 text-gray-600">
            I am eager to join a professional development team where I can
            contribute my skills, learn from experienced developers, and
            grow as a frontend developer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;

