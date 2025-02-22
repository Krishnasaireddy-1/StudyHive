import React from "react";
import { useNavigate } from "react-router-dom";

const Diff = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#9BA4B5] flex flex-col items-center justify-center min-h-screen text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Differentiation Materials</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <p className="text-lg">
          Here you will find study materials and resources for Differentiation.
        </p>

        <ul className="mt-4 list-disc list-inside">
          <li>
            <a href="/diff.pdf" className="text-blue-600 hover:underline">
              Differentiation Notes
            </a>
          </li>
          <li>
            <a href="/differentiation.mp4" className="text-blue-600 hover:underline">
              Differentiation Video Lecture
            </a>
          </li>
        </ul>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Mathematics
        </button>
      </div>
    </div>
  );
};

export default Diff;
