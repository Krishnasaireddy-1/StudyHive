import React from "react";

const ChatHeader = ({ selectedFriend, onUnfollow }) => {
  // Generate a random avatar URL based on the friend's ID
  const avatarUrl = `https://i.pravatar.cc/150?u=${selectedFriend._id || Math.random()}`;

  return (
    <div className="flex items-center justify-between bg-white shadow-md px-4 py-3 rounded-t-lg">
      {/* Friend Info */}
      <div className="flex items-center gap-3">
        <img
          src={selectedFriend.profilePicture || avatarUrl}
          alt={selectedFriend.username}
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-sm object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">
          {selectedFriend.username}
        </h3>
      </div>

      {/* Unfollow Button */}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-red-600"
        onClick={onUnfollow}
      >
        Unfollow
      </button>
    </div>
  );
};

export default ChatHeader;
