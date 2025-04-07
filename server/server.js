require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const connectDB = require("./config/db"); // Import database connection
const app = express();
const multer = require("multer");  // <-- Import multer
const Test = require("./models/testModel"); // Assuming you have a Quiz model
const Teacher = require("./models/teacherModel"); // Assuming you have a Teacher model
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
//const { getAllPosts, createPost } = require('../controllers/exploreController');
const Message = require("./models/Message"); // Use your existing model
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });
const friendsRoutes = require("./routes/friendsRoutes");
const authRoutes = require("./routes/authRoutes"); // Import auth routes
const chatRoutes = require("./routes/chatRoutes");
const quizRoutes = require("./routes/quizRoutes");

// Connect to MongoDB
connectDB();
// Fetch chat messages between two users
app.use("/auth", authRoutes); // Add auth routes
app.use("/friends", friendsRoutes);
app.use("/chat", chatRoutes);
app.use("/api/quiz", quizRoutes);
// ✅ Fetch chat messages between two users from MongoDB
app.post("/api/teacher", async (req, res) => {
  const { teacherName } = req.body;
  console.log("Teacher name:", teacherName);
  if (!teacherName) {
    return res.status(400).json({ error: "Teacher name is required." });
  }

  try {
    const teacher = await Teacher.findOne({ username: teacherName });

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found." });
    }

    const courses = await Course.find({ instructor: teacherName });

    res.json({ teacher, courses });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
app.get("/api/getUserProfile", async (req, res) => {
  try {
    const { email, role } = req.query;
    if (!email || !role) {
      return res.status(400).json({ error: "Email and role are required" });
    }

    const user = await Teacher.findOne({ email, role });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// app.get("/api/quiz", async (req, res) => {
//   try {
//     const { subject } = "math";
//     if (!subject) {
//       return res.status(400).json({ error: "Subject is required" });
//     }

//     const quizzes = await Test.find({ subject: subject });

//     if (quizzes.length === 0) {
//       return res.status(404).json({ message: "No quizzes available for this subject" });
//     }

//     res.json({ tests: quizzes });
//   } catch (error) {
//     console.error("Error fetching quizzes:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
app.get("/chat/:friendId/:userId", async (req, res) => {
  try {
    const { friendId, userId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: friendId, receiverId: userId },
        { senderId: userId, receiverId: friendId },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

// ✅ Send a message & store it in MongoDB
app.post("/chat/send", async (req, res) => {
  try {
    console.log("Received message data:", req.body); // ✅ Debug

    const { senderId, receiverId, text } = req.body;

    if (!senderId || !receiverId || !text) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newMessage = new Message({ senderId, receiverId, text });
    await newMessage.save();

    io.emit("receive_message", newMessage);
    res.json(newMessage);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/messages/received/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all messages where the user is the receiver
    const receivedMessages = await Message.find({ receiverId: userId });

    res.status(200).json(receivedMessages);
  } catch (error) {
    console.error("Error fetching received messages:", error);
    res.status(500).json({ message: "Server error" });
  }
});

let users = [];
let questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 5 * 6?", answer: "30" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the square root of 64?", answer: "8" },
  { question: "How many continents are there on Earth?", answer: "7" },
];

let currentQuestionIndex = 0;

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("register_user", (userName) => {
    const user = { socket, name: userName, score: 0 };
    users.push(user);

    // Send the current question to the new user
    socket.emit("question", questions[currentQuestionIndex].question);

    // Send updated leaderboard to everyone
    updateLeaderboard();
  });

  socket.emit("question", questions[currentQuestionIndex].question);

  socket.on("send_message", async (message) => {
    io.emit("receive_message", message);
  });
  socket.on("submit_score", ({ name, score }) => {
    const user = users.find((u) => u.name === name);
    if (user) {
      user.score = score; // Update user's score
    } else {
      users.push({ socket, name, score }); // Add new user if not found
    }
    updateLeaderboard();
  });
  
  socket.on("submit_answer", (answer) => {
    const user = users.find((u) => u.socket === socket);
    if (!user) return;

    // Check if the answer is correct
    if (answer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
      user.score += 10;
      io.emit("correct_answer", { user: user.name, score: user.score });
      
      // Move to the next question
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      io.emit("question", questions[currentQuestionIndex].question);
    }

    // Update leaderboard
    updateLeaderboard();
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
    users = users.filter((u) => u.socket !== socket);
    updateLeaderboard();
  });
});

function updateLeaderboard() {
  const leaderboard = users.map((u) => ({ name: u.name, score: u.score }));
  io.emit("update_leaderboard", leaderboard);
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
