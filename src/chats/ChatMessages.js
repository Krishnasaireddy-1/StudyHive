
// import React, { useEffect } from "react";
// import axios from "axios";
// import { FaRobot, FaUser, FaTrash } from "react-icons/fa";

// const ChatMessages = ({ messages, selectedFriend, onDeleteMessage }) => {
//   useEffect(() => {
//     // Function to load Botpress script dynamically
//     const loadBotpressScript = () => {
//       if (window.botpressWebChat) {
//         window.botpressWebChat.init({
//           botId: "20250220133411-61FE6YLJ",
//           host: "https://cdn.botpress.cloud/webchat/v2.2",
//           messagingUrl: "https://files.bpcontent.cloud",
//           showPoweredBy: false,
//           containerWidth: "100%",
//           layoutWidth: "100%",
//         });
//       }
//     };

//     // Check if script is already loaded
//     if (!document.getElementById("botpress-webchat-script")) {
//       const script = document.createElement("script");
//       script.id = "botpress-webchat-script";
//       script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
//       script.async = true;
//       script.onload = loadBotpressScript; // Initialize Botpress after loading
//       document.body.appendChild(script);
//     } else {
//       loadBotpressScript(); // If already loaded, initialize directly
//     }
//   }, []);

//   const handleDelete = async (messageId) => {
//     if (!messageId) return;
//     try {
//       await axios.delete(`http://localhost:5000/chat/messages/${messageId}`);
//       onDeleteMessage(messageId);
//     } catch (error) {
//       console.error("Error deleting message:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col p-4 space-y-3 overflow-y-auto max-h-[75vh] bg-gray-100 rounded-lg shadow-lg">
//       {messages
//         .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
//         .map((msg, index) => {
//           const messageId = msg._id || msg.id;
//           const isReceived = selectedFriend && msg.senderId === selectedFriend._id;
//           const isBot = msg.senderId === "bot";

//           return (
//             <div key={messageId || `${msg.senderId}-${index}`} className={`flex ${isReceived ? "justify-start" : "justify-end"}`}>
//               <div
//                 className={`relative max-w-[75%] p-4 rounded-xl text-white shadow-md transition-all duration-300 group ${
//                   isBot ? "bg-green-500 text-left rounded-bl-none" : 
//                   isReceived ? "bg-gray-700 text-left rounded-bl-none" : "bg-blue-600 text-right rounded-br-none"
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   {isBot && <FaRobot className="text-xl" />}
//                   {!isBot && isReceived && <FaUser className="text-xl" />}
//                   <span>{msg.text}</span>
//                 </div>

//                 {/* Delete button (appears on hover) */}
//                 <button
//                   onClick={() => handleDelete(messageId)}
//                   className="absolute top-1/2 -translate-y-1/2 text-xs bg-red-500 text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ right: isReceived ? "-2.5rem" : "auto", left: isReceived ? "auto" : "-2.5rem" }}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           );
//         })}

//       {/* AI Chatbot Widget */}
//       <div id="botpress-webchat"></div>
//     </div>
//   );
// };

// export default ChatMessages;
import React, { useEffect } from "react";
import axios from "axios";
import { FaRobot, FaUser, FaTrash } from "react-icons/fa";

const ChatMessages = ({ messages, selectedFriend, onDeleteMessage }) => {
  useEffect(() => {
    const loadBotpressScript = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: "20250220133411-61FE6YLJ",
          host: "https://cdn.botpress.cloud/webchat/v2.2",
          messagingUrl: "https://files.bpcontent.cloud",
          showPoweredBy: false,
          containerWidth: "100%",
          layoutWidth: "100%",
          // Move chatbot further down to prevent collision
          extraStyles: `
            #bp-web-widget-container {
              bottom: 2000px !important; /* Adjust this value as needed */
            }
          `,
        });
      }
    };
  
    if (!document.getElementById("botpress-webchat-script")) {
      const script = document.createElement("script");
      script.id = "botpress-webchat-script";
      script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      script.async = true;
      script.onload = loadBotpressScript;
      document.body.appendChild(script);
    } else {
      loadBotpressScript();
    }
  }, []);
  
  const handleDelete = async (messageId) => {
    if (!messageId) return;
    try {
      await axios.delete(`http://localhost:5000/chat/messages/${messageId}`);
      onDeleteMessage(messageId);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-3 overflow-y-auto max-h-[75vh] bg-gray-100 rounded-lg shadow-lg pb-20">
      {messages
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((msg, index) => {
          const messageId = msg._id || msg.id;
          const isReceived = selectedFriend && msg.senderId === selectedFriend._id;
          const isBot = msg.senderId === "bot";

          return (
            <div key={messageId || `${msg.senderId}-${index}`} className={`flex ${isReceived ? "justify-start" : "justify-end"}`}>
              <div
                className={`relative max-w-[75%] p-4 rounded-xl text-white shadow-md transition-all duration-300 group ${
                  isBot ? "bg-green-500 text-left rounded-bl-none" : 
                  isReceived ? "bg-gray-700 text-left rounded-bl-none" : "bg-blue-600 text-right rounded-br-none"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isBot && <FaRobot className="text-xl" />}
                  {!isBot && isReceived && <FaUser className="text-xl" />}
                  <span>{msg.text}</span>
                </div>

                {/* Delete button (adjusted position) */}
                <button
                  onClick={() => handleDelete(messageId)}
                  className="absolute top-1/2 -translate-y-1/2 text-xs bg-red-500 text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-10"
                  style={{ right: isReceived ? "-3rem" : "auto", left: isReceived ? "auto" : "-3rem" }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}

      {/* AI Chatbot Widget - Fixed Position */}
      <div id="botpress-webchat" className="fixed bottom-5 right-5 z-50"></div>
    </div>
  );
};

export default ChatMessages;
