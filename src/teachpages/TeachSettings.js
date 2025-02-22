import React, { useState } from "react";

const TeachSettings = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Teacher Settings
        </h1>

        <form className="space-y-6">
          {/* Profile Settings */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Profile Settings
            </h2>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label className="block text-gray-700 font-medium mt-4">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label className="block text-gray-700 font-medium mt-4">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 cursor-pointer"
            />
            {profilePic && (
              <img
                src={profilePic}
                alt="Profile Preview"
                className="mt-4 w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />
            )}

            <label className="block text-gray-700 font-medium mt-4">Bio</label>
            <textarea
              placeholder="Tell something about yourself"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </section>

          {/* Account Security */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Account Security
            </h2>
            <label className="block text-gray-700 font-medium">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label className="block text-gray-700 font-medium mt-4">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label className="block text-gray-700 font-medium mt-4">
              Two-Factor Authentication
            </label>
            <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </section>

          {/* Notifications */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Notifications
            </h2>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Email Notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">SMS Notifications</span>
              </label>
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Preferences
            </h2>
            <label className="block text-gray-700 font-medium">Theme</label>
            <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </section>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeachSettings;
