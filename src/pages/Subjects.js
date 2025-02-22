import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen, FaLaptopCode, FaClipboardList } from "react-icons/fa";

const Subjects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#A5BFCC] to-[#4C585B] text-white p-6">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-lg animate-fade-in">
        Explore Your Subjects 🚀
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Learn */}
        <NavLink
          to="learn"  // 🔹 Relative Path (instead of "/learn")
          className={({ isActive }) =>
            `group flex flex-col items-center bg-blue-600 shadow-lg p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 ${
              isActive ? "bg-blue-800" : "hover:bg-blue-700"
            }`
          }
        >
          <FaBookOpen className="text-5xl mb-4 group-hover:rotate-6 transition-all duration-300" />
          <span className="text-lg font-semibold">Learn 📖</span>
        </NavLink>

        {/* Practice */}
        <NavLink
          to="practice" // 🔹 Relative Path (instead of "/practice")
          className={({ isActive }) =>
            `group flex flex-col items-center bg-green-600 shadow-lg p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 ${
              isActive ? "bg-green-800" : "hover:bg-green-700"
            }`
          }
        >
          <FaLaptopCode className="text-5xl mb-4 group-hover:rotate-6 transition-all duration-300" />
          <span className="text-lg font-semibold">Practice 💻</span>
        </NavLink>

        {/* Test */}
        <NavLink
          to="test" // 🔹 Relative Path (instead of "/test")
          className={({ isActive }) =>
            `group flex flex-col items-center bg-red-600 shadow-lg p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 ${
              isActive ? "bg-red-800" : "hover:bg-red-700"
            }`
          }
        >
          <FaClipboardList className="text-5xl mb-4 group-hover:rotate-6 transition-all duration-300" />
          <span className="text-lg font-semibold">Test ✅</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Subjects;
