const Teacher = require("../models/teacherModel");
const getTeacherData = async (req, res) => {
  const { teacherName } = req.body;
  if (!teacherName) {
    return res.status(400).json({ error: "Teacher name is required." });
  }

  try {
    const teacher = await Teacher.findOne({ username: teacherName });
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found." });
    }

    res.json({ teacher });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getTeacherData };
