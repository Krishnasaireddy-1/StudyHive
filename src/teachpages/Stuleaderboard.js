import React from "react";

const Stuleaderboard = () => {
  const students = [
    { name: "John Doe", email: "john.doe@example.com", subject: "Mathematics", completion: "85%", grade: "A" },
    { name: "Alice Smith", email: "alice.smith@example.com", subject: "Mathematics", completion: "72%", grade: "B+" },
    { name: "Michael Brown", email: "michael.brown@example.com", subject: "Mathematics", completion: "90%", grade: "A+" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Student Progress</h1>
          <p className="text-gray-600">View progress of students in your subjects.</p>
        </header>

        {/* Student Table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Students</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Completion</th>
                  <th className="py-3 px-4">Grade</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-blue-50 transition ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4">{student.email}</td>
                    <td className="py-3 px-4">{student.subject}</td>
                    <td className="py-3 px-4">{student.completion}</td>
                    <td className="py-3 px-4 font-semibold">{student.grade}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 font-medium hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stuleaderboard;
