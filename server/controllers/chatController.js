const Message = require("../models/Message");

// Get chat history
exports.getChatHistory = async (req, res) => {
  try {
    const { friendId } = req.params;
    const user = req.query.userId; // User ID should be passed as a query param

    const messages = await Message.find({
      $or: [
        { senderId: user, receiverId: friendId },
        { senderId: friendId, receiverId: user }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Send message
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, text } = req.body;

    const message = new Message({ senderId, receiverId, text });
    await message.save();

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete message
exports.deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    console.log(messageId+" svcdc");
    // Find and delete the message
    const deletedMessage = await Message.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getMessages = async (req, res) => {
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
};