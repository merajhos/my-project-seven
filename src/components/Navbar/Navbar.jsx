
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Education", path: "/#education" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={handleMenuClick}
          className="text-2xl font-bold text-gray-900"
        >
          Meraj<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-gray-700 transition duration-200 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleMenuClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              onClick={handleMenuClick}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
```
