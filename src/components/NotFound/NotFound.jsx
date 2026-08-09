
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  HomeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">

      <div className="w-full max-w-2xl text-center">

        {/* 404 Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <ExclamationTriangleIcon className="h-10 w-10 text-blue-600" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-7xl font-extrabold tracking-tight text-blue-600 sm:text-8xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
          Sorry, the page you are looking for doesn't exist or may have been
          moved. Please return to the homepage and continue exploring my
          portfolio.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          {/* Home */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <HomeIcon className="h-5 w-5" />
            Back to Home
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Go Back
          </button>

        </div>

        {/* Small Text */}
        <p className="mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} Meraj Hossain
        </p>

      </div>

    </main>
  );
};

export default NotFound;

