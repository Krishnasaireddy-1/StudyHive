 import React from "react";
 import { IoSend } from "react-icons/io5"; // Import send icon

// const ChatInput = ({ newMessage, onChange, onSend }) => {
//   return (
//     <div className="flex items-center bg-white p-3 rounded-b-lg shadow-md">
//       {/* Input Field */}
//       <input
//         type="text"
//         placeholder="Type a message..."
//         value={newMessage}
//         onChange={(e) => onChange(e.target.value)}
//         className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />
      
//       {/* Send Button */}
//       <button
//         className="ml-3 bg-blue-500 text-white p-2 rounded-full transition duration-300 hover:bg-blue-600 active:scale-90"
//         onClick={onSend}
//       >
//         <IoSend className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

const ChatInput = ({ newMessage, onChange, onSend }) => {
  return (
    <div className="flex items-center border p-2 rounded-lg">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder="Type a message..."
        className="flex-grow p-2 border-none focus:outline-none"
        />
      <button onClick={onSend} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
};

export default ChatInput;