import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Math = () => {
  // State to track whether the user has joined
  const [joined, setJoined] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    if (localStorage.getItem("mathJoined") === "true") {
      setJoined(true);
    }
  }, []);

  // Function to handle joining the room
  const joinRoom = () => {
    localStorage.setItem("mathJoined", "true");
    setJoined(true);
  };

  return (
    <div className="bg-[#9BA4B5] flex flex-col items-center justify-center min-h-screen text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Mathematics Course</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Subtopics</h2>
        <nav className="space-y-2">
          <NavLink 
            to="matdet" 
            className={({ isActive }) => `block text-blue-600 hover:underline ${isActive ? 'font-bold' : ''}`}
          >
            Matrices & Determinants
          </NavLink>
          <NavLink 
            to="diff" 
            className={({ isActive }) => `block text-blue-600 hover:underline ${isActive ? 'font-bold' : ''}`}
          >
            Differentiation
          </NavLink>
        </nav>

        {/* Show the button only if the user has NOT joined */}
        {!joined && (
          <div className="mt-6">
            <button
              onClick={joinRoom}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Click to Join Room
            </button>
          </div>
        )}
      </div>
      
      {/* Outlet for nested routes */}
      <div className="mt-6 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Math;
