const jwt = require("jsonwebtoken");
const TeacherSchema = require("../models/teacherModel");
const Student = require("../models/user");

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

// Utility function to select the appropriate model based on role
const getModelByRole = (role) => {
    if (role === "teacher") return TeacherSchema;
    if (role === "student") return Student;
    throw new Error("Invalid role");
};

// Register Controller
const registerUser = async (req, res) => {
    try {
        const { name, phoneNo, username, email, password, role } = req.body;
        console.log("Registration data:", req.body);
        
        // Validate required fields
        if (!name || !phoneNo || !username || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const Model = getModelByRole(role);

        // Check for duplicate username
        const existingUserByUsername = await Model.findOne({ username });
        if (existingUserByUsername) {
            return res.status(409).json({ message: `${role} with this username already exists` });
        }

        // Check for duplicate email
        const existingUserByEmail = await Model.findOne({ email });
        if (existingUserByEmail) {
            return res.status(409).json({ message: `${role} with this email already exists` });
        }

        // Create a new user
        const newUser = new Model({
            name,
            phoneNo,
            username,
            email,
            role,
            password // Store the password as plain text
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: `${role} registered successfully`, user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login Controller
const loginUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        console.log(req.body);
        if (!username || !password || !role) {
            return res.status(400).json({ message: "Username, password, and role are required" });
        }

        const Model = getModelByRole(role);
        const user = await Model.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Compare plain-text password
        console.log(password+" "+user.password);
        if (password !== user.password) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign({ id: user._id, role }, SECRET_KEY, { expiresIn: "1h" });
        console.log(user)
        res.json({ message: "Login successful", token, user ,role});
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getUserProfile = async (req, res) => {
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
  };
  

module.exports = { registerUser, loginUser,getUserProfile };
