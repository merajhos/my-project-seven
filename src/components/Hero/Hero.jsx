
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-gradient-to-br from-white via-blue-50 to-white pt-28 pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">

            {/* Available Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Available for opportunities
            </div>

            {/* Greeting */}
            <p className="text-lg font-medium text-gray-600">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Meraj{" "}
              <span className="text-blue-600">
                Hossain
              </span>
            </h1>

            {/* Designation */}
            <h2 className="mt-4 text-2xl font-bold text-gray-700 sm:text-3xl">
              Frontend Developer
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 lg:mx-0">
              I build modern, responsive, and user-friendly web applications
              using React.js, JavaScript, Tailwind CSS, and modern frontend
              technologies. I love turning ideas into clean and interactive
              digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              {/* View Projects */}
              <a
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View My Projects
                <ArrowRightIcon className="h-5 w-5" />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-900 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-blue-600 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-blue-600 hover:text-white"
              >
                Facebook
              </a>

              <a
                href="mailto:your@email.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-blue-600 hover:text-white"
                aria-label="Email"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2">

            <div className="relative">

              {/* Background Decoration */}
              <div className="absolute -inset-4 rounded-full bg-blue-100 opacity-70 blur-2xl"></div>

              {/* Image Border */}
              <div className="relative rounded-full border-8 border-white bg-blue-100 p-2 shadow-2xl">

                <img
                  src="/profile.jpg"
                  alt="Meraj Hossain - Frontend Developer"
                  className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                />

              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-lg sm:-left-8">
                <p className="text-xs text-gray-500">
                  Experience
                </p>
                <p className="font-bold text-gray-900">
                  Fresher
                </p>
              </div>

              {/* Technology Badge */}
              <div className="absolute -right-4 -top-4 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-lg sm:-right-8">
                <p className="text-xs text-gray-500">
                  Specializing in
                </p>
                <p className="font-bold text-blue-600">
                  React.js
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 hidden justify-center md:flex">
          <a
            href="/#about"
            className="flex flex-col items-center gap-2 text-sm text-gray-500 transition hover:text-blue-600"
          >
            <span>Scroll to explore</span>

            <span className="flex h-9 w-6 justify-center rounded-full border-2 border-gray-400 p-1">
              <span className="h-2 w-1 rounded-full bg-gray-500"></span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;


