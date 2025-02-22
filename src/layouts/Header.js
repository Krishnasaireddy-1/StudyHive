
// import { NavLink, useNavigate } from "react-router-dom";

// function Header({ role }) {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleLogout = () => {
//     localStorage.clear(); // Clear all stored data
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <header className="p-6 bg-[#212A3E] text-white shadow-lg">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-extrabold tracking-wide">
//           {role === "teacher" ? "Teacher Dashboard" : "Student Dashboard"}
//         </h1>
//       </div>

//       <nav className="mt-4 flex flex-wrap items-center gap-6 relative">
//         {role === "teacher" && (
//           <>
//             <NavLink
//               to="/teacher/home"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/teacher/conductquiz"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Conduct Quiz
//             </NavLink>
//             <NavLink
//               to="/teacher/coursedetails"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Course Details
//             </NavLink>
//             <NavLink
//               to="/teacher/mycourses"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               My Courses
//             </NavLink>
//             <NavLink
//               to="/teacher/leaderboard"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Leaderboard
//             </NavLink>
//             <NavLink
//               to="/teacher/profile"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Profile
//             </NavLink>
//             <NavLink
//               to="/teacher/settings"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Settings
//             </NavLink>
//             <button
//               onClick={handleLogout}
//               className="text-lg font-medium transition duration-300 hover:text-red-500 ml-4"
//             >
//               Logout
//             </button>
//           </>
//         )}

//         {role === "student" && (
//           <>
//             <NavLink
//               to="/student/home"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/student/subjects"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Subjects
//             </NavLink>
//             <NavLink
//               to="/student/social"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Social
//             </NavLink>
//             <NavLink
//               to="/student/profile"
//               className={({ isActive }) =>
//                 `text-lg font-medium transition duration-300 ${
//                   isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
//                 }`
//               }
//             >
//               Profile
//             </NavLink>
//             <button
//               onClick={handleLogout}
//               className="text-lg font-medium transition duration-300 hover:text-red-500 ml-4"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Header;
import { NavLink, useNavigate } from "react-router-dom";

function Header({ role }) {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    localStorage.clear(); // Clear all stored data
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="p-6 bg-[#9B7EBD] text-white shadow-lg flex items-center">
<div className="flex justify-around items-center">
<img src="/studyHive.png" alt="Study Hive Logo" className="h-20 w-auto mr-4" />
        <h1 className="text-4xl font-extrabold tracking-wide">
          {role === "teacher" ? "StudyHive" : "StudyHive"}
        </h1>
      </div>
      <nav className="mt-4 flex flex-wrap items-center ml-20 gap-6 ">
        {role === "teacher" && (
          <>
            <NavLink
              to="/teacher/home"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/teacher/conductquiz"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Conduct Quiz
            </NavLink>
            <NavLink
              to="/teacher/coursedetails"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Course Details
            </NavLink>
            <NavLink
              to="/teacher/mycourses"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              My Courses
            </NavLink>
            <NavLink
              to="/teacher/leaderboard"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Leaderboard
            </NavLink>
            <NavLink
              to="/teacher/profile"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/teacher/settings"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Settings
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-lg font-medium transition duration-300 hover:text-red-500 ml-4"
            >
              Logout
            </button>
          </>
        )}

        {role === "student" && (
          <>
            <NavLink
              to="/student/home"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/student/qns"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Qns
            </NavLink>
            <NavLink
              to="/student/subjects"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Subjects
            </NavLink>
            <NavLink
              to="/student/social"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Social
            </NavLink>
            <NavLink
              to="/student/profile"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold underline" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-lg font-medium transition duration-300 hover:text-red-500 ml-4"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
