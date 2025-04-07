const express = require("express");
const { getChatHistory, sendMessage,deleteMessage,getMessages } = require("../controllers/chatController");

const router = express.Router();
router.get("/:friendId/:userId", getMessages);

router.get("/:friendId", getChatHistory);
router.post("/send", sendMessage);
router.delete("/messages/:messageId", deleteMessage);
module.exports = router;
