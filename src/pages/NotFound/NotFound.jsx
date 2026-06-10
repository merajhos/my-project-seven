
import {  AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">

        <AlertTriangle
          size={80}
          className="mx-auto text-error mb-4"
        />

        <h1 className="text-6xl font-bold text-error">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 mb-6">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link to="/">
          <button className="btn btn-success">
            <Home size={18} />
            Back To Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;