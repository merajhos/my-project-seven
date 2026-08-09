import {
  AcademicCapIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-20 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Education
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Educational Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            My educational background and continuous learning journey have
            helped me build a strong foundation for my development career.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        {/* Education Card */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            {/* Top Icon */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                <AcademicCapIcon className="h-9 w-9 text-blue-600" />
              </div>

              <div className="flex-1">

                {/* Degree */}
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Higher Secondary Certificate (HSC)
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-600">
                  Science / General Education
                </p>

                {/* Institute */}
                <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:gap-6">

                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                    <span>[Your College Name]</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-5 w-5 text-blue-600" />
                    <span>[Passing Year]</span>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-6 leading-7 text-gray-600">
                  Completed my higher secondary education and developed an
                  interest in technology and computer science. Alongside my
                  academic studies, I started exploring web development and
                  programming, which eventually motivated me to pursue a
                  career in frontend development.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* Learning Journey */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900">
            Continuous Learning
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Beyond formal education, I continuously improve my development
            skills through practical projects, online learning, documentation,
            and hands-on coding. My current focus is on modern frontend
            development with React.js, JavaScript, Tailwind CSS, and related
            technologies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;