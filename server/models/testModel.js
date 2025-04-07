const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  quizName: { type: String, required: true },
  description: { type: String },
  subject: { type: String, required: true },
  duration: { type: Number, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Test = mongoose.model("Test", testSchema);
module.exports = Test;
