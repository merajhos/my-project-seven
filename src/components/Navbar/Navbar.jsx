
import { BarChart3, Clock3, Home } from "lucide-react";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-white px-6 lg:px-12 shadow-sm">
      {/* Logo */}
      <div className="navbar-start">
        <h1 className="text-xl font-bold text-green-700">
          KeenKeeper
        </h1>
      </div>

      {/* Navigation */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-2 px-1">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-600 text-white rounded-lg"
                  : "rounded-lg"
              }
            >
              <Home  size={18}/>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-600 text-white rounded-lg"
                  : "rounded-lg"
              }
            >
              <Clock3 size={18} />
              Timeline
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-600 text-white rounded-lg"
                  : "rounded-lg"
              }
            >
              <BarChart3 size={18} />
              Stats
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;