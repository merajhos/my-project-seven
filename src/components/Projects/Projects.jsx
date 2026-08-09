import { Link } from "react-router-dom";
import { ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    id: "medicine",
    name: "Medicine E-commerce",
    image: "/projects/medicine.jpg",
    description:
      "A modern and responsive medicine e-commerce platform where users can browse products and explore medicine details.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "suncart",
    name: "SunCart",
    image: "/projects/suncart.jpg",
    description:
      "A modern summer essentials e-commerce website featuring products, categories, responsive design, and a clean user interface.",
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
  },
  {
    id: "job-tracker",
    name: "Job Application Tracker",
    image: "/projects/job-tracker.jpg",
    description:
      "A responsive application for organizing and tracking job applications with a simple and user-friendly interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Projects
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Recent Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Here are some of the projects I have built while learning and
            improving my frontend development skills.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center gap-2">
                  <CodeBracketIcon className="h-5 w-5 text-blue-600" />

                  <h3 className="text-xl font-bold text-gray-900">
                    {project.name}
                  </h3>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Details Button */}
                <Link
                  to={`/project/${project.id}`}
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;