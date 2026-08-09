
import {
  ArrowUpIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Footer Top */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <a
              href="/"
              className="text-2xl font-bold text-white"
            >
              Meraj<span className="text-blue-500">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              I'm a passionate Fresher Frontend Developer who loves building
              modern, responsive, and user-friendly web applications using
              React.js and modern web technologies.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-white hover:bg-white hover:text-gray-900"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="/#home"
                  className="transition hover:text-blue-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/#about"
                  className="transition hover:text-blue-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/#skills"
                  className="transition hover:text-blue-500"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="/#education"
                  className="transition hover:text-blue-500"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="/#projects"
                  className="transition hover:text-blue-500"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="transition hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Me
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              {/* Email */}
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 transition hover:text-blue-500"
              >
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-blue-500" />
                <span>your@email.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-3 transition hover:text-blue-500"
              >
                <PhoneIcon className="h-5 w-5 shrink-0 text-blue-500" />
                <span>+880 1XXXXXXXXX</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0 text-blue-500" />
                <span>Bangladesh</span>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="text-center text-sm text-gray-500 sm:text-left">
            © {new Date().getFullYear()} Meraj Hossain. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Back to Top
            <ArrowUpIcon className="h-4 w-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

