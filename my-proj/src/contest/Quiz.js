import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { FaTrophy } from "react-icons/fa";

const Quiz = () => {
  const [question, setQuestion] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [answer, setAnswer] = useState("");
  const [showLeaderboard, setShowLeaderboard] = useState(false); // Toggle Leaderboard
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:5000");

    socketRef.current.on("connect", () => {
      console.log("Connected to WebSocket server");

      const user = localStorage.getItem("user") || "Anonymous User";
      const userName = JSON.parse(user).name;
      socketRef.current.emit("register_user", userName);
    });

    socketRef.current.on("question", (data) => {
      setQuestion(data);
    });

    socketRef.current.on("update_leaderboard", (data) => {
      setLeaderboard(data);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSubmitAnswer = () => {
    if (socketRef.current) {
      socketRef.current.emit("submit_answer", answer);
    } else {
      console.error("Socket is not initialized");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
      {/* Floating Leaderboard Button */}
      <button
        className="absolute top-5 right-5 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-110"
        onClick={() => setShowLeaderboard(!showLeaderboard)}
      >
        <FaTrophy className="text-xl" />
        <span className="hidden sm:block">Leaderboard</span>
      </button>

      {/* Leaderboard Drawer */}
      {showLeaderboard && <Leaderboard data={leaderboard} />}

      {/* Quiz Container */}
      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg shadow-2xl p-10 rounded-3xl border border-white/20 w-[90%] max-w-xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">
          Live Quiz 🎯
        </h1>

        {/* Question Box */}
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg w-full text-center">
          <h2 className="text-2xl font-semibold">{question || "Waiting for question..."}</h2>
        </div>

        {/* Answer Input */}
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer here..."
          className="mt-6 w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmitAnswer}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

const Leaderboard = ({ data }) => (
  <div className="absolute top-16 right-5 bg-black/80 text-white shadow-xl p-5 rounded-lg w-64 border border-white/10 backdrop-blur-lg">
    <h3 className="text-xl font-semibold mb-3 text-center">🏆 Leaderboard</h3>
    <ul className="space-y-2">
      {data.map((user, index) => (
        <li
          key={index}
          className="p-2 bg-gray-700/50 rounded-lg flex justify-between items-center"
        >
          <span>{user.name}</span>
          <span className="font-bold">{user.score}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Quiz;
// import React, { useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";
// import { FaTrophy, FaUpload } from "react-icons/fa";
// import axios from "axios";

// const Quiz = () => {
//   const [question, setQuestion] = useState("");
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [answer, setAnswer] = useState("");
//   const [showLeaderboard, setShowLeaderboard] = useState(false);
//   const [file, setFile] = useState(null);
//   const socketRef = useRef(null);

//   useEffect(() => {
//     socketRef.current = io("http://localhost:5000");

//     socketRef.current.on("connect", () => {
//       console.log("Connected to WebSocket server");

//       const user = localStorage.getItem("user") || "Anonymous User";
//       const userName = JSON.parse(user).name;
//       socketRef.current.emit("register_user", userName);
//     });

//     socketRef.current.on("question", (data) => {
//       setQuestion(data);
//     });

//     socketRef.current.on("update_leaderboard", (data) => {
//       setLeaderboard(data);
//     });

//     return () => {
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//       }
//     };
//   }, []);

//   const handleSubmitAnswer = () => {
//     if (socketRef.current) {
//       socketRef.current.emit("submit_answer", answer);
//     }
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     if (!file) return alert("Please select a file first.");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post("http://localhost:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       console.log(response.data);
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
//       {/* Floating Leaderboard Button */}
//       <button
//         className="absolute top-5 right-5 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-110"
//         onClick={() => setShowLeaderboard(!showLeaderboard)}
//       >
//         <FaTrophy className="text-xl" />
//         <span className="hidden sm:block">Leaderboard</span>
//       </button>

//       {/* Leaderboard Drawer */}
//       {showLeaderboard && <Leaderboard data={leaderboard} />}

//       {/* File Upload */}
//       <form onSubmit={handleFileUpload} className="flex flex-col items-center mb-6">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <FaUpload className="text-2xl" />
//           <input type="file" accept=".txt" onChange={(e) => setFile(e.target.files[0])} className="hidden" />
//           <span>Upload Question File</span>
//         </label>
//         <button type="submit" className="mt-2 bg-blue-500 px-4 py-2 rounded-lg">Submit</button>
//       </form>

//       {/* Quiz Container */}
//       <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg shadow-2xl p-10 rounded-3xl border border-white/20 w-[90%] max-w-xl animate-fade-in">
//         <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">Live Quiz 🎯</h1>

//         {/* Question Box */}
//         <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg w-full text-center">
//           <h2 className="text-2xl font-semibold">{question || "Waiting for question..."}</h2>
//         </div>

//         {/* Answer Input */}
//         <input
//           type="text"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           placeholder="Your answer here..."
//           className="mt-6 w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
//         />

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmitAnswer}
//           className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//         >
//           Submit Answer
//         </button>
//       </div>
//     </div>
//   );
// };

// const Leaderboard = ({ data }) => (
//   <div className="absolute top-16 right-5 bg-black/80 text-white shadow-xl p-5 rounded-lg w-64 border border-white/10 backdrop-blur-lg">
//     <h3 className="text-xl font-semibold mb-3 text-center">🏆 Leaderboard</h3>
//     <ul>{data.map((user, index) => <li key={index}>{user.name} - {user.score}</li>)}</ul>
//   </div>
// );

// export default Quiz;
