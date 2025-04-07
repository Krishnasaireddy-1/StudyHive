// routes/authRoutes.js
const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { getUserProfile } = require("../controllers/authController");
const router = express.Router();

// POST /auth/register - Register a new user
router.post("/register", registerUser);
router.get("/getUserProfile", getUserProfile);

// POST /auth/login - Login user
router.post("/login", loginUser);

module.exports = router;
