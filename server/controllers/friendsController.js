

const mongoose = require("mongoose"); // Add this import
const User = require("../models/user");

// Get friends list
exports.getFriends = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(`User ID from request: ${userId}`);

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    
    //Find user and populate friends
    const user = await User.findById(userId).populate("friends");
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User found:", user.username);
    res.json(user.friends);
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).json({ error: "Interanal Server Error" });
  }
};


// Unfollow a friend
exports.unfollowFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    console.log(`Looking for user with ID: ${userId}`);
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User found:", user.username);
    user.friends = user.friends.filter(id => id.toString() !== friendId);
    await user.save();

    console.log(`User ${userId} unfollowed friend ${friendId}`);
    res.json({ message: "Unfollowed successfully" });
  } catch (error) {
    console.error("Error unfollowing friend:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.addFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.body;

    // Validate user IDs
    if (!userId || !friendId) {
      return res.status(400).json({ message: "Both userId and friendId are required." });
    }

    // Find both users
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: "User not found." });
    }

    // Ensure `role` exists before saving
    if (!user.role) user.role = "student"; // Assign a default role if missing
    if (!friend.role) friend.role = "student";

    // Prevent adding duplicate friends
    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: "Already friends." });
    }

    // Update both users' friend lists
    user.friends.push(friendId);
    friend.friends.push(userId);

    await user.save();
    await friend.save();

    return res.status(200).json({ message: "Friend added successfully!", friends: user.friends });
  } catch (error) {
    console.error("Error adding friend:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

exports.getAvailableStudents = async (req, res) => {
  try {
    let { userId } = req.params;

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid User ID." });
    }

    userId = new mongoose.Types.ObjectId(userId); // Convert to ObjectId

    // Get the user and their friends list
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Ensure `user.friends` is an array of ObjectIds
    const friendIds = user.friends.map(id => new mongoose.Types.ObjectId(id));

    // Find all users except the current user and their friends
    const availableStudents = await User.find({
      _id: { $ne: userId, $nin: friendIds }
    }).select("_id username email");

    return res.status(200).json(availableStudents);
  } catch (error) {
    console.error("Error fetching students:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
