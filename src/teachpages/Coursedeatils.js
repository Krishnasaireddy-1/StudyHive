// import React from "react";

// const Coursedeatils = () => {
//   const courseDetails = {
//     title: "Data Structures & Algorithms",
//     code: "CS301",
//     duration: "12 Weeks",
//     enrolledStudents: "150 students",
//     nextQuiz: "Scheduled on March 5, 2025",
//     instructor: "John Doe",
//     completionRate: "75%",
//     rating: "4.8/5",
//     modules: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & Graphs", "Dynamic Programming"],
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
//         {/* Course Header */}
//         <div className="relative">
//           <img
//             src="course-banner.jpg"
//             alt="Course Banner"
//             className="w-full h-60 object-cover rounded-lg"
//           />
//           <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
//             <h1 className="text-2xl font-bold">{courseDetails.title}</h1>
//             <p className="text-sm"><i className="fas fa-barcode"></i> Course Code: {courseDetails.code}</p>
//             <p className="text-sm"><i className="fas fa-clock"></i> Duration: {courseDetails.duration}</p>
//           </div>
//         </div>

//         {/* Course Details Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div className="bg-blue-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold"><i className="fas fa-user-graduate"></i> Enrolled Students</h2>
//             <p className="text-gray-700">{courseDetails.enrolledStudents}</p>
//           </div>

//           <div className="bg-green-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold"><i className="fas fa-question-circle"></i> Next Quiz</h2>
//             <p className="text-gray-700">{courseDetails.nextQuiz}</p>
//           </div>

//           <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold"><i className="fas fa-chalkboard-teacher"></i> Instructor</h2>
//             <p className="text-gray-700">{courseDetails.instructor}</p>
//           </div>

//           <div className="bg-purple-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold"><i className="fas fa-chart-line"></i> Course Completion Rate</h2>
//             <p className="text-gray-700">{courseDetails.completionRate}</p>
//           </div>

//           <div className="bg-red-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold"><i className="fas fa-star"></i> Course Rating</h2>
//             <p className="text-gray-700">{courseDetails.rating}</p>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold"><i className="fas fa-book"></i> Modules Covered</h2>
//             <ul className="list-disc pl-5 text-gray-700">
//               {courseDetails.modules.map((module, index) => (
//                 <li key={index}>{module}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="mt-6 flex justify-center">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
//             Back to Courses
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Coursedeatils;
import React from "react";
import { useNavigate } from "react-router-dom";

const Coursedeatils = () => {
  const navigate = useNavigate();
  
  const courseDetails = {
    title: "Data Structures & Algorithms",
    code: "CS301",
    duration: "12 Weeks",
    enrolledStudents: "150 students",
    nextQuiz: "Scheduled on March 5, 2025",
    instructor: "John Doe",
    completionRate: 75,
    rating: 4.8,
    modules: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & Graphs", "Dynamic Programming"],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
        {/* Course Header */}
        <div className="relative">
          <img
            src="course-banner.jpg"
            alt="Course Banner"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold">{courseDetails.title}</h1>
            <p className="text-sm">📌 Course Code: {courseDetails.code}</p>
            <p className="text-sm">⏳ Duration: {courseDetails.duration}</p>
          </div>
        </div>

        {/* Course Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">👨‍🎓 Enrolled Students</h2>
            <p className="text-gray-700">{courseDetails.enrolledStudents}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">📝 Next Quiz</h2>
            <p className="text-gray-700">{courseDetails.nextQuiz}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">👨‍🏫 Instructor</h2>
            <p className="text-gray-700">{courseDetails.instructor}</p>
          </div>

          {/* Course Completion Progress Bar */}
          <div className="bg-purple-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">📊 Course Completion Rate</h2>
            <div className="relative w-full bg-gray-300 h-5 rounded-lg mt-2">
              <div
                className="bg-purple-600 h-5 rounded-lg transition-all duration-500"
                style={{ width: `${courseDetails.completionRate}%` }}
              ></div>
            </div>
            <p className="text-gray-700 mt-2">{courseDetails.completionRate}% completed</p>
          </div>

          {/* Course Rating with Animated Stars */}
          <div className="bg-red-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">⭐ Course Rating</h2>
            <div className="flex items-center space-x-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 text-xl transition-transform transform ${
                    index + 1 <= Math.round(courseDetails.rating) ? "scale-110" : "opacity-50"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700">{courseDetails.rating}/5</p>
          </div>

          {/* Course Modules */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">📚 Modules Covered</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {courseDetails.modules.map((module, index) => (
                <li key={index} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {module}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            🔙 Back to Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coursedeatils;
