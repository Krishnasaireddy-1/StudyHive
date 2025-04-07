const express = require("express");
const router = express.Router();
const Test = require("../models/testModel");
const Quiz = require("../models/testModel"); // Assuming you have a Quiz model
// const { getMathQuizzes } = require("../controllers/quizController");
// router.get("/math", getMathQuizzes);

// Save Quiz
router.post("/saveQuiz", async (req, res) => {
  try {
    const { quizName, description, subject, duration, questions, teacherName } = req.body;
    console.log("Received data:", req.body);

    if (!quizName || !description || !subject || !duration || !questions.length) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTest = new Test({
      quizName,
      description,
      subject,
      duration,
      questions,
      teacherName
    });

    await newTest.save(); // Call save on the instance
    res.status(201).json({ message: "Quiz saved successfully!" });
  } catch (error) {
    console.error("Error saving quiz:", error);
    res.status(500).json({ error: "Error saving quiz", details: error.message });
  }
});


// router.get("/exam", async (req, res) => {
//     try {
//       const { subject } = req.query;
//       if (!subject) return res.status(400).json({ error: "Subject is required" });
  
//       const quizzes = await Quiz.find({ subject: subject });
  
//       if (quizzes.length === 0) {
//         return res.status(404).json({ message: "No quizzes available for this subject" });
//       }
  
//       res.json({ tests: quizzes });
//     } catch (error) {
//       console.error("Error fetching quizzes:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
router.post("/exam", async (req, res) => {
  try {
      const { subject } = req.body; // Extract from request body
      if (!subject) return res.status(400).json({ error: "Subject is required" });

      const quizzes = await Quiz.find({ subject });

      if (quizzes.length === 0) {
          return res.status(404).json({ message: "No quizzes available for this subject" });
      }

      res.json({ tests: quizzes });
  } catch (error) {
      console.error("Error fetching quizzes:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
