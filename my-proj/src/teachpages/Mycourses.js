import React from "react";
import { useNavigate } from "react-router-dom";

const Mycourses = () => {
  const navigate = useNavigate();

  const courses = [
    { id: "math", name: "Mathematics", description: "Learn algebra, calculus, and more." },
    { id: "science", name: "Science", description: "Physics, chemistry, and biology topics." },
    { id: "history", name: "History", description: "Explore past civilizations and events." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Courses</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-900">{course.name}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mycourses;
