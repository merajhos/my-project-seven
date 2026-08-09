
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import projects from "../../data/project";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  // Project not found
  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Project Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            Sorry, the project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-gray-50 pt-24 pb-20">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-600"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Projects
        </Link>

        {/* Project Hero */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="h-64 w-full object-cover sm:h-80 lg:h-[450px]"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10">

            {/* Title */}
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Project Details
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {project.name}
                </h1>

                <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Live Project
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  GitHub
                </a>

              </div>
            </div>

            {/* Technology Stack */}
            <div className="mt-10 border-t border-gray-100 pt-8">

              <div className="flex items-center gap-3">
                <CodeBracketIcon className="h-6 w-6 text-blue-600" />

                <h2 className="text-xl font-bold text-gray-900">
                  Technology Stack
                </h2>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Challenges */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
                <WrenchScrewdriverIcon className="h-6 w-6 text-orange-500" />
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Challenges Faced
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

                  <p className="text-sm leading-6 text-gray-600">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Future Improvements */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                <LightBulbIcon className="h-6 w-6 text-green-500" />
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Future Improvements
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {project.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />

                  <p className="text-sm leading-6 text-gray-600">
                    {improvement}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl bg-blue-600 p-8 text-center text-white sm:p-10">

          <h2 className="text-2xl font-bold">
            Interested in this project?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100">
            Check out the live project or explore the source code on GitHub
            to learn more about how it was built.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Visit Live Project
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>

            <Link
              to="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              All Projects
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
};

export default ProjectDetails;

