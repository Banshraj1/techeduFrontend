import React from "react";
import { NavLink } from "react-router";

// import { Container } from './styles';

function Navbar() {
  return (
    <>
      <div className="bg-gray-800 text-white p-4">
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:text-gray-300 border-b-2 border-grey"
                : "hover:text-gray-300 border-b-2 border-transparent"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "hover:text-gray-300 border-b-2 border-grey"
                : "hover:text-gray-300 border-b-2 border-transparent"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "hover:text-gray-300 border-b-2 border-grey"
                : "hover:text-gray-300 border-b-2 border-transparent"
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "hover:text-gray-300 border-b-2 border-grey"
                : "hover:text-gray-300 border-b-2 border-transparent"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
