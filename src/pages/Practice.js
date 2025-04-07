
// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000"); // Adjust URL for deployment

// const Practice = () => {
//   const [showLeaderboard, setShowLeaderboard] = useState(true); // Keep only one declaration
//   const subjects = ["Math", "Science", "Programming"];

//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [tests, setTests] = useState([]);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedTest, setSelectedTest] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizFinished, setQuizFinished] = useState(false);

//   useEffect(() => {
//     socket.on("update_leaderboard", (updatedLeaderboard) => {
//       console.log("Leaderboard updated:", updatedLeaderboard);
//       setLeaderboard(updatedLeaderboard);
//     });

//     return () => {
//       socket.off("update_leaderboard");
//     };
//   }, []);

//   const handleSubjectClick = async (subject) => {
//     setSelectedSubject(subject);
//     setLoading(true);
//     try {
//       console.log(subject.toLowerCase());
//       const response = await fetch(`http://localhost:5000/api/quiz/exam`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ subject: subject.toLowerCase() }),
//       });
//             const data = await response.json();
//       setTests(response.ok ? data.tests || [] : []);
//     } catch (error) {
//       console.error("Error fetching tests:", error);
//       setTests([]);
//     }
//     setLoading(false);
//   };

//   const handleTestClick = (test) => {
//     setSelectedTest(test);
//     setQuestions(test.questions || []);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setQuizFinished(false);
//   };

//   const handleAnswerClick = (selectedOption) => {
//     const correctAnswer = questions[currentQuestionIndex]?.correctAnswer;
//     if (selectedOption === correctAnswer) {
//       setScore((prevScore) => prevScore + 1);
//     }
//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setQuizFinished(true);
//       const user = JSON.parse(localStorage.getItem("user")) || { name: "Anonymous" };
//       socket.emit("submit_score", { name: user.name, score: score + (selectedOption === correctAnswer ? 1 : 0) });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 relative">
//       {/* Leaderboard */}
//       {showLeaderboard && (
//         <div className="absolute top-4 right-4 bg-white shadow-lg p-4 rounded-lg border border-gray-300">
//           <h3 className="text-xl font-semibold text-gray-800">🏆 Leaderboard</h3>
//           <ul className="mt-2">
//             {leaderboard.length > 0 ? (
//               leaderboard.map((player, index) => (
//                 <li key={index} className="text-gray-700">{index + 1}. {player.name} - {player.score} pts</li>
//               ))
//             ) : (
//               <p className="text-gray-500">No scores yet</p>
//             )}
//           </ul>
//         </div>
//       )}

//       {!selectedTest ? (
//         <>
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Subject</h2>
//           <div className="flex space-x-4">
//             {subjects.map((subject) => (
//               <button key={subject} onClick={() => handleSubjectClick(subject)} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                 {subject}
//               </button>
//             ))}
//           </div>
//           {loading && <p className="mt-4 text-lg text-gray-700">Loading tests...</p>}
//           {selectedSubject && !loading && (
//             <div className="mt-6 w-full max-w-lg bg-white p-6 shadow-md rounded-lg">
//               <h3 className="text-xl font-semibold text-gray-800">Available {selectedSubject} Tests</h3>
//               {tests.length > 0 ? (
//                 <ul className="mt-3">
//                   {tests.map((test) => (
//                     <li key={test._id} onClick={() => handleTestClick(test)} className="p-2 border-b text-gray-700 cursor-pointer hover:bg-gray-200 rounded">
//                       {test.description} - {test.duration} mins
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="mt-2 text-gray-600">No tests available.</p>
//               )}
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg text-center">
//           {!quizFinished ? (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedTest.description}</h2>
//               <p className="text-lg font-medium text-gray-700 mb-4">{questions[currentQuestionIndex]?.question}</p>
//               <div className="flex flex-col gap-3">
//                 {questions[currentQuestionIndex]?.options.map((option, index) => (
//                   <button key={index} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => handleAnswerClick(option)}>
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
//               <p className="text-lg text-gray-700">Your Score: {score} / {questions.length}</p>
//               <button onClick={() => setSelectedTest(null)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
//                 Back to Tests
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Adjust URL for deployment

const Practice = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(true);
  const subjects = ["Math", "Science", "Programming"];
  
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [tests, setTests] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    socket.on("update_leaderboard", (updatedLeaderboard) => {
      console.log("Leaderboard updated:", updatedLeaderboard);
      setLeaderboard(updatedLeaderboard);
    });

    return () => {
      socket.off("update_leaderboard");
    };
  }, []);

  const handleSubjectClick = async (subject) => {
    setSelectedSubject(subject);
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/quiz/exam`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject: subject.toLowerCase() }),
      });
      const data = await response.json();
      setTests(response.ok ? data.tests || [] : []);
    } catch (error) {
      console.error("Error fetching tests:", error);
      setTests([]);
    }
    setLoading(false);
  };

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setQuestions(test.questions || []);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  const handleAnswerClick = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex]?.correctAnswer;
    const newScore = selectedOption === correctAnswer ? score + 1 : score;
    setScore(newScore);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
      const user = JSON.parse(localStorage.getItem("user")) || { name: "Anonymous" };
      socket.emit("submit_score", { name: user.name, score: newScore });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 relative">
      {/* Leaderboard Toggle Button */}
      <button 
        onClick={() => setShowLeaderboard((prev) => !prev)} 
        className="absolute top-4 right-4 bg-gray-600 text-white px-4 py-2 rounded-md"
      >
        {showLeaderboard ? "Hide Leaderboard" : "Show Leaderboard"}
      </button>

      {/* Leaderboard */}
      {showLeaderboard && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">🏆 Leaderboard</h3>
          <ul className="mt-2">
            {leaderboard.length > 0 ? (
              leaderboard.map((player, index) => (
                <li key={index} className="text-gray-700">{index + 1}. {player.name} - {player.score} pts</li>
              ))
            ) : (
              <p className="text-gray-500">No scores yet</p>
            )}
          </ul>
        </div>
      )}

      {!selectedTest ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Subject</h2>
          <div className="flex space-x-4">
            {subjects.map((subject) => (
              <button key={subject} onClick={() => handleSubjectClick(subject)} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                {subject}
              </button>
            ))}
          </div>
          {loading && <p className="mt-4 text-lg text-gray-700">Loading tests...</p>}
          {selectedSubject && !loading && (
            <div className="mt-6 w-full max-w-lg bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Available {selectedSubject} Tests</h3>
              {tests.length > 0 ? (
                <ul className="mt-3">
                  {tests.map((test) => (
                    <li key={test._id} onClick={() => handleTestClick(test)} className="p-2 border-b text-gray-700 cursor-pointer hover:bg-gray-200 rounded">
                      {test.description} - {test.duration} mins
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-gray-600">No tests available.</p>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg text-center">
          {!quizFinished ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedTest.description}</h2>
              <p className="text-lg font-medium text-gray-700 mb-4">{questions[currentQuestionIndex]?.question}</p>
              <div className="flex flex-col gap-3">
                {questions[currentQuestionIndex]?.options.map((option, index) => (
                  <button key={index} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => handleAnswerClick(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
              <p className="text-lg text-gray-700">Your Score: {score} / {questions.length}</p>
              <button onClick={() => setSelectedTest(null)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
                Back to Tests
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Practice;
