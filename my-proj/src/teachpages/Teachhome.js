import React from "react";

const Teachhome = () => {
    
        const user = JSON.parse(localStorage.getItem("user"));
        
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white flex flex-col items-center py-10 px-4">
      {/* Welcome Banner */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold drop-shadow-md">Welcome, {user.username} 👨‍🏫</h1>
        <p className="text-lg mt-2 italic text-gray-200">
          "Education is not the learning of facts, but the training of the mind to think." – Albert Einstein
        </p>
      </section>

      {/* Dashboard Summary */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        <StatBox title="Total Students" value="120" />
        <StatBox title="Quizzes Created" value="25" />
        <StatBox title="Active Courses" value="5" />
      </section>

      {/* Recent Activities */}
      <section className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-10 w-full max-w-4xl border border-white/20">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities 📌</h2>
        <ul className="space-y-3">
          <RecentActivity title="Quiz on 'Data Structures' completed" time="Yesterday" />
          <RecentActivity title="New course 'Python Basics' added" time="2 days ago" />
          <RecentActivity title="5 students completed 'Mathematics Quiz'" time="3 days ago" />
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="flex flex-wrap gap-4 justify-center mt-10">
        <ActionButton text="Create New Quiz" color="bg-blue-500" />
        <ActionButton text="View Students" color="bg-green-500" />
        <ActionButton text="Manage Courses" color="bg-yellow-500" />
      </section>

      {/* Announcements */}
      <section className="mt-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-4xl border border-white/20">
        <h2 className="text-2xl font-semibold mb-4">Announcements 📢</h2>
        <p className="text-gray-200">🔹 New updates to the quiz module are coming soon! Stay tuned.</p>
        <p className="text-gray-200 mt-2">🔹 Reminder: Parent-Teacher meeting scheduled for next Friday.</p>
      </section>
    </div>
  );
};

// **Stat Box Component**
const StatBox = ({ title, value }) => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center border border-white/20">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

// **Recent Activity Component**
const RecentActivity = ({ title, time }) => (
  <li className="flex justify-between bg-white/20 p-3 rounded-lg shadow-md">
    <span>{title}</span>
    <span className="text-gray-300">{time}</span>
  </li>
);

// **Action Button Component**
const ActionButton = ({ text, color }) => (
  <button
    className={`px-6 py-3 rounded-full text-white ${color} hover:opacity-80 shadow-lg transition-transform transform hover:scale-105`}
  >
    {text}
  </button>
);

export default Teachhome;
