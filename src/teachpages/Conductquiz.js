// import React, { useState } from "react";

// const Conductquiz = () => {
//   const [questions, setQuestions] = useState([
//     { question: "", options: ["", "", "", ""], correctAnswer: "" },
//   ]);
//   const [quizName, setQuizName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("general");
//   const [duration, setDuration] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const teacher = JSON.parse(localStorage.getItem("user")) || { name: "Anonymous" };

//     const quizData = {
//         quizName,
//         description,
//         category,
//         duration,
//         questions,
//         teacherName: teacher.name, // Add teacher's name
//     };

//     try {
//         const response = await fetch("http://localhost:5000/api/quiz/saveQuiz", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(quizData),
//         });

//         const data = await response.json();
//         if (response.ok) {
//             alert("Quiz saved successfully!");
//             setQuizName("");
//             setDescription("");
//             setCategory("general");
//             setDuration("");
//             setQuestions([{ question: "", options: ["", "", "", ""], correctAnswer: "" }]);
//         } else {
//             alert(`Error: ${data.error}`);
//         }
//     } catch (error) {
//         console.error("Error saving quiz:", error);
//     }
// };

//   const handleAddQuestion = () => {
//     setQuestions([
//       ...questions,
//       { question: "", options: ["", "", "", ""], correctAnswer: "" },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     if (field === "question") updatedQuestions[index].question = value;
//     if (field === "correctAnswer") updatedQuestions[index].correctAnswer = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (qIndex, oIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[qIndex].options[oIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Create a Quiz
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Quiz Name:</label>
//             <input
//               type="text"
//               value={quizName}
//               onChange={(e) => setQuizName(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter quiz name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium">Description:</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="3"
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter quiz details"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium">Category:</label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="general">General Knowledge</option>
//               <option value="science">Science</option>
//               <option value="math">Mathematics</option>
//               <option value="history">History</option>
//             </select>
//           </div>

//           <div className="space-y-6">
//             {questions.map((q, qIndex) => (
//               <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
//                 <label className="block text-gray-700 font-medium">Question:</label>
//                 <input
//                   type="text"
//                   value={q.question}
//                   onChange={(e) => handleQuestionChange(qIndex, "question", e.target.value)}
//                   className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter question"
//                   required
//                 />

//                 <label className="block text-gray-700 font-medium mt-2">Options:</label>
//                 {q.options.map((opt, oIndex) => (
//                   <input
//                     key={oIndex}
//                     type="text"
//                     value={opt}
//                     onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
//                     className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
//                     placeholder={`Option ${oIndex + 1}`}
//                     required
//                   />
//                 ))}

//                 <label className="block text-gray-700 font-medium mt-2">Correct Answer:</label>
//                 <input
//                   type="text"
//                   value={q.correctAnswer}
//                   onChange={(e) => handleQuestionChange(qIndex, "correctAnswer", e.target.value)}
//                   className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter correct answer"
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           <button
//             type="button"
//             onClick={handleAddQuestion}
//             className="w-full bg-blue-600 text-white py-2 rounded-md mt-3 hover:bg-blue-700 transition"
//           >
//             Add Next Question
//           </button>

//           <div>
//             <label className="block text-gray-700 font-medium">Total Duration (mins):</label>
//             <input
//               type="number"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               min="1"
//               placeholder="Enter duration"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Save Quiz
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Conductquiz;
import React, { useState } from "react";

const Conductquiz = () => {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("general");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teacher = JSON.parse(localStorage.getItem("user")) || { name: "Anonymous" };

    const quizData = {
        quizName,
        description,
        subject,
        duration,
        questions,
        teacherName: teacher.name, // Add teacher's name
    };

    try {
        const response = await fetch("http://localhost:5000/api/quiz/saveQuiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quizData),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Quiz saved successfully!");
            setQuizName("");
            setDescription("");
            setSubject("general");
            setDuration("");
            setQuestions([{ question: "", options: ["", "", "", ""], correctAnswer: "" }]);
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error("Error saving quiz:", error);
    }
};

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "question") updatedQuestions[index].question = value;
    if (field === "correctAnswer") updatedQuestions[index].correctAnswer = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create a Quiz
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Quiz Name:</label>
            <input
              type="text"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quiz name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quiz details"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Subject:</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="general">General Knowledge</option>
              <option value="science">Science</option>
              <option value="math">Mathematics</option>
              <option value="history">History</option>
            </select>
          </div>

          <div className="space-y-6">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
                <label className="block text-gray-700 font-medium">Question:</label>
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) => handleQuestionChange(qIndex, "question", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter question"
                  required
                />

                <label className="block text-gray-700 font-medium mt-2">Options:</label>
                {q.options.map((opt, oIndex) => (
                  <input
                    key={oIndex}
                    type="text"
                    value={opt}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                    className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
                    placeholder={`Option ${oIndex + 1}`}
                    required
                  />
                ))}

                <label className="block text-gray-700 font-medium mt-2">Correct Answer:</label>
                <input
                  type="text"
                  value={q.correctAnswer}
                  onChange={(e) => handleQuestionChange(qIndex, "correctAnswer", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter correct answer"
                  required
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddQuestion}
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-3 hover:bg-blue-700 transition"
          >
            Add Next Question
          </button>

          <div>
            <label className="block text-gray-700 font-medium">Total Duration (mins):</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              min="1"
              placeholder="Enter duration"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Save Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default Conductquiz;
