
// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import axios from "axios";
// import { FiUsers, FiMessageSquare } from "react-icons/fi";
// import FriendList from "./FriendList";
// import ChatHeader from "./ChatHeader";
// import ChatMessages from "./ChatMessages";
// import ChatInput from "./ChatInput";
// import Explore from "./Explore";
// import '../style.css';

// const API_URL = "https://studyhive-q61e.onrender.com";
// const socket = io(API_URL, { transports: ["websocket"] });

// const Social = () => {
//   const [selectedFriend, setSelectedFriend] = useState(null);
//   const [messagesMap, setMessagesMap] = useState({});
//   const [newMessage, setNewMessage] = useState("");
//   const [showExplore, setShowExplore] = useState(false);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user || !user._id) return;

//     const fetchReceivedMessages = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/chat/messages/received/${user._id}`);
//         setMessagesMap((prevMessages) => ({
//           ...prevMessages,
//           [user._id]: response.data,
//         }));
//       } catch (error) {
//         console.error("Error fetching received messages:", error);
//       }
//     };

//     fetchReceivedMessages();
//   }, []);

//   useEffect(() => {
//     socket.on("receive_message", (message) => {
//       setMessagesMap((prevMessages) => ({
//         ...prevMessages,
//         [message.senderId]: [...(prevMessages[message.senderId] || []), message],
//       }));
//     });

//     return () => socket.off("receive_message");
//   }, []);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "http://your-botpress-url.com/webchat/botpress-webchat.js";
//     script.async = true;
//     script.onload = () => {
//       window.botpressWebChat.init({
//         host: "http://your-botpress-url.com",
//         botId: "your-bot-id",
//         botAvatar: "https://your-default-avatar-url.com/avatar.png",
//         userAvatar: "https://your-user-avatar-url.com/user.png",
//         showCloseButton: true,
//         theme: "dark"
//       });
//     };
//     document.body.appendChild(script);
//   }, []);

//   const handleSelectFriend = async (friend) => {
//     setShowExplore(false);
//     setSelectedFriend(friend);

//     if (!messagesMap[friend._id]) {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (!user || !user._id) return;

//         const response = await axios.get(`${API_URL}/chat/${user._id}/${friend._id}`);
//         setMessagesMap((prev) => ({ ...prev, [friend._id]: response.data }));
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     }
//   };

//   const handleSendMessage = async () => {
//     if (!selectedFriend || !newMessage.trim()) return;
//     const user = JSON.parse(localStorage.getItem("user"));

//     const message = {
//       senderId: user._id,
//       receiverId: selectedFriend._id,
//       text: newMessage,
//     };

//     try {
//       const response = await axios.post(`${API_URL}/chat/send`, message);
//       const savedMessage = response.data;

//       setMessagesMap((prevMessages) => ({
//         ...prevMessages,
//         [selectedFriend._id]: [...(prevMessages[selectedFriend._id] || []), savedMessage],
//       }));

//       socket.emit("send_message", savedMessage);
//       setNewMessage("");
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <FriendList selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />

//       <div className="flex flex-col w-3/4 bg-gray-50 p-6 shadow-lg rounded-lg">
//         {showExplore ? (
//           <Explore onNavigateToChat={() => setShowExplore(false)} />
//         ) : selectedFriend ? (
//           <>
//             <ChatHeader selectedFriend={selectedFriend} />
//             <div className="flex-grow overflow-y-auto p-4 space-y-4">
//               <ChatMessages messages={messagesMap[selectedFriend._id] || []} selectedFriend={selectedFriend} />
//             </div>
//             <div className="mt-4">
//               <ChatInput newMessage={newMessage} onChange={setNewMessage} onSend={handleSendMessage} />
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-500 text-center mt-10 text-lg">Select a friend to start chatting</p>
//         )}
//       </div>

//       {/* Explore Button - Moved to Right Side */}
//       <div className="fixed bottom-5 right-5">
//         <button
//           onClick={() => setShowExplore(!showExplore)}
//           className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
//         >
//           {showExplore ? <><FiMessageSquare size={20} /> Go to Chat</> : <><FiUsers size={20} /> Explore</>}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Social;
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import FriendList from "./FriendList";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Explore from "./Explore";
import '../style.css';

const API_URL = "https://studyhive-q61e.onrender.com";
const socket = io(API_URL, { transports: ["websocket"] });

const Social = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messagesMap, setMessagesMap] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return;

    const fetchReceivedMessages = async () => {
      try {
        const response = await axios.get(`${API_URL}/chat/messages/received/${user._id}`);
        setMessagesMap((prevMessages) => ({
          ...prevMessages,
          [user._id]: response.data,
        }));
      } catch (error) {
        console.error("Error fetching received messages:", error);
      }
    };

    fetchReceivedMessages();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessagesMap((prevMessages) => ({
        ...prevMessages,
        [message.senderId]: [...(prevMessages[message.senderId] || []), message],
      }));
    });

    return () => socket.off("receive_message");
  }, []);

  const handleSelectFriend = async (friend) => {
    setShowExplore(false);
    setSelectedFriend(friend);

    if (!messagesMap[friend._id]) {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user._id) return;

        const response = await axios.get(`${API_URL}/chat/${user._id}/${friend._id}`);
        setMessagesMap((prev) => ({ ...prev, [friend._id]: response.data }));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
  };

  const handleSendMessage = async () => {
    if (!selectedFriend || !newMessage.trim()) return;
    const user = JSON.parse(localStorage.getItem("user"));

    const message = {
      senderId: user._id,
      receiverId: selectedFriend._id,
      text: newMessage,
    };

    try {
      const response = await axios.post(`${API_URL}/chat/send`, message);
      const savedMessage = response.data;

      setMessagesMap((prevMessages) => ({
        ...prevMessages,
        [selectedFriend._id]: [...(prevMessages[selectedFriend._id] || []), savedMessage],
      }));

      socket.emit("send_message", savedMessage);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <FriendList selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />

      <div className="flex flex-col w-3/4 bg-gray-50 p-6 shadow-lg rounded-lg">
        {showExplore ? (
          <Explore onNavigateToChat={() => setShowExplore(false)} />
        ) : selectedFriend ? (
          <>
            <ChatHeader selectedFriend={selectedFriend} />
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              <ChatMessages messages={messagesMap[selectedFriend._id] || []} selectedFriend={selectedFriend} />
            </div>
            <div className="mt-4">
              <ChatInput newMessage={newMessage} onChange={setNewMessage} onSend={handleSendMessage} />
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center mt-10 text-lg">Select a friend to start chatting</p>
        )}
      </div>

      {/* Explore Button - Moved to Right Side */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => setShowExplore(!showExplore)}
          className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
        >
          {showExplore ? <><FiMessageSquare size={20} /> Go to Chat</> : <><FiUsers size={20} /> Explore</>}
        </button>
      </div>
    </div>
  );
};

export default Social;
