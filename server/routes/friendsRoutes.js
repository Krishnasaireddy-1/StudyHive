const express = require("express");
const { getFriends, unfollowFriend,addFriend,getAvailableStudents } = require("../controllers/friendsController");

const router = express.Router();

router.get("/:userId", getFriends);
router.post("/unfollow", unfollowFriend);
router.post("/add-friend", addFriend);
router.get("/students/:userId", getAvailableStudents);
module.exports = router;
