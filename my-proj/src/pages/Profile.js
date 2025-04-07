import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  // Fetch data from local storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg text-center">
        {/* Profile Image */}
        <div className="relative w-24 h-24 mx-auto">
          <img
            src={`https://i.pravatar.cc/150?u=${user._id}`} // Random avatar
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-md object-cover"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">{user.name}</h2>
        <p className="text-gray-600">@{user.username}</p>
        <p className="text-gray-500">{user.email}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-gray-700 mt-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Role</p>
            <p className="text-blue-500">{user.role}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Points</p>
            <p className="text-green-500">{user.points}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Challenges Won</p>
            <p className="text-orange-500">{user.challengesWon}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Daily Streak</p>
            <p className="text-red-500">{user.dailyStreak}🔥</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Phone</p>
            <p>{user.phoneNo}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Ongoing Course</p>
            <p>{user.courseOngoing || "None"}</p>
          </div>
        </div>

        {/* Friends Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Friends</h3>
          {user.friends.length > 0 ? (
            <div className="flex flex-wrap justify-center mt-2 gap-2">
              {user.friends.map((friendId, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm shadow">
                  Friend {index + 1}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No friends added</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
            Edit Profile
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
