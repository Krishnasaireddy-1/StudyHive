const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // Add role field
  points: { type: Number, default: 0 },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "student" }], // Adjusted reference
  challengesWon: { type: Number, default: 0 },
  courseOngoing: { type: String, default: null },
  phoneNo: { type: String, required: true },
  dailyStreak: { type: Number, default: 0 }
}, { timestamps: true });

// Hash password before saving
// StudentSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// Method to check password
// StudentSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// Ensure the model is not overwritten if already defined
const Student = mongoose.models.student || mongoose.model("student", StudentSchema);

module.exports = Student;
