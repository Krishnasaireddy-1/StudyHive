import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div className="bg-[#9BA4B5] flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6">Choose a Subject</h1>

      <div className="space-y-4">
        <NavLink
          to="math"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition text-center ${
              isActive ? "bg-blue-800 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
            }`
          }
        >
          Mathematics
        </NavLink>

        <NavLink
          to="programming"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition text-center ${
              isActive ? "bg-green-800 text-white" : "bg-green-600 text-white hover:bg-green-700"
            }`
          }
        >
          Programming
        </NavLink>

        <NavLink
          to="development"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition text-center ${
              isActive ? "bg-red-800 text-white" : "bg-red-600 text-white hover:bg-red-700"
            }`
          }
        >
          Development
        </NavLink>
      </div>

      {/* Renders nested child routes */}
      <Outlet />
    </div>
  );
};

export default Learn;
