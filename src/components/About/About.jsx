import {
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get to Know Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              I'm a passionate{" "}
              <span className="text-blue-600">Frontend Developer</span>
              {" "}who loves building modern web experiences.
            </h3>

            <p className="mt-6 leading-7 text-gray-600">
              I started my programming journey with curiosity about how
              websites work and gradually developed a strong passion for
              frontend development. Since then, I have been continuously
              learning and building projects using modern web technologies.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              I enjoy transforming ideas and designs into responsive,
              interactive, and user-friendly web applications. I especially
              enjoy working with React.js, JavaScript, Tailwind CSS, and
              modern frontend tools.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              As a fresher, I am focused on improving my problem-solving
              skills, writing clean and reusable code, and gaining real-world
              experience. My goal is to grow as a professional Frontend
              Developer and contribute to meaningful projects.
            </p>

            {/* Personal Info */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold text-gray-900">
                  Meraj Hossain
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold text-gray-900">
                  Frontend Developer
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">
                  Bangladesh
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold text-gray-900">
                  Fresher
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">

            {/* Card 1 */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CodeBracketIcon className="h-10 w-10 text-blue-600" />

              <h4 className="mt-4 text-lg font-bold text-gray-900">
                Clean Code
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                I focus on writing clean, reusable, and maintainable React
                components.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <LightBulbIcon className="h-10 w-10 text-blue-600" />

              <h4 className="mt-4 text-lg font-bold text-gray-900">
                Problem Solving
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                I enjoy solving coding problems and finding simple solutions
                to complex frontend challenges.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <RocketLaunchIcon className="h-10 w-10 text-blue-600" />

              <h4 className="mt-4 text-lg font-bold text-gray-900">
                Continuous Learning
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                I continuously learn modern technologies and improve my
                development skills through practical projects.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;