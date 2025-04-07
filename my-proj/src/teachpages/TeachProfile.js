// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TeachProfile = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         // Get user details from local storage
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (!storedUser || !storedUser.role) {
//           throw new Error("User not found or role is missing");
//         }

//         // Fetch user details from API based on role
//         const response = await axios.get(`/api/getUserProfile`, {
//           params: { role: storedUser.role, email: storedUser.email },
//         });

//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (!user) return <p className="text-center mt-10 text-red-500">User not found</p>;

//   return (
//     <main className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center">
//         {/* Profile Image */}
//         <div className="mb-4">
//           <img
//             src={user.profileImage || "/default-avatar.png"}
//             alt="Teacher Profile"
//             className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
//           />
//         </div>

//         {/* Profile Details */}
//         <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
//         <p className="text-gray-600"><i className="fas fa-envelope text-blue-500"></i> {user.email}</p>
//         <p className="text-gray-600"><i className="fas fa-phone text-green-500"></i> {user.phone}</p>

//         {/* Expertise & Stats */}
//         <div className="mt-4 text-left text-gray-700 space-y-2">
//           <p><i className="fas fa-graduation-cap text-purple-500"></i> <b>Expertise:</b> {user.expertise?.join(", ")}</p>
//           <p><i className="fas fa-users text-yellow-500"></i> <b>Students Taught:</b> {user.studentsTaught || "N/A"}</p>
//           <p><i className="fas fa-chalkboard-teacher text-orange-500"></i> <b>Quizzes Created:</b> {user.quizzesCreated || "N/A"}</p>
//           <p><i className="fas fa-award text-red-500"></i> <b>Highest Score:</b> {user.highestScore || "N/A"}%</p>
//           <p><i className="fas fa-chart-line text-blue-500"></i> <b>Average Score:</b> {user.averageScore || "N/A"}%</p>
//           <p><i className="fas fa-calendar-alt text-green-500"></i> <b>Joined:</b> {user.joinedDate || "N/A"}</p>
//           <p><i className="fas fa-user text-gray-600"></i> <b>Bio:</b> {user.bio || "No bio available"}</p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default TeachProfile;
import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Importing a random profile icon

const TeachProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    return <p className="text-center text-red-500 mt-10">User not found</p>;
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg text-center transform hover:scale-105 transition-all duration-500">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          {storedUser.profileImage ? (
            <img
              src={storedUser.profileImage}
              alt="Teacher Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
            />
          ) : (
            <FaUserCircle className="w-32 h-32 text-blue-500" /> // Random profile icon
          )}
        </div>

        {/* Profile Details */}
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">{storedUser.username}</h1>
        <p className="text-gray-600 mt-2">📧 {storedUser.email}</p>

        {/* Animated Stats */}
        <div className="mt-6 text-left text-gray-700 space-y-3 border-t pt-4 border-gray-300">
          <p className="text-lg font-medium flex items-center">🆔 <span className="ml-2">{storedUser._id}</span></p>
          <p className="text-lg font-medium flex items-center">🕒 <span className="ml-2">Joined: {new Date(storedUser.createdAt).toDateString()}</span></p>
          <p className="text-lg font-medium flex items-center">🔄 <span className="ml-2">Updated: {new Date(storedUser.updatedAt).toDateString()}</span></p>
          <p className="text-lg font-medium flex items-center">🎭 <span className="ml-2">Role: {storedUser.role}</span></p>
        </div>
      </div>
    </main>
  );
};

export default TeachProfile;
