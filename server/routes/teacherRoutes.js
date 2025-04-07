const express = require("express");
const { getTeacherData } = require("../controllers/teacherController");

const router = express.Router();

router.post("/", getTeacherData);

module.exports = router;
