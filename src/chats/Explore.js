// import React, { useState } from "react";

// const Explore = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPostText, setNewPostText] = useState("");
//   const [newPostImage, setNewPostImage] = useState(null);



//   return (
//     <div className="flex flex-col items-center bg-gray-50 min-h-screen p-6">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore</h2>

//       {/* New Post Section */}
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-4 mb-6">
//         <textarea
//           className="w-full h-20 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           placeholder="Share your achievement..."
//           value={newPostText}
//           onChange={(e) => setNewPostText(e.target.value)}
//         />
        
//         <div className="flex items-center justify-between mt-4">
//           <input
//             type="file"
//             accept="image/*"
//             className="text-sm text-gray-600"
//             onChange={(e) => setNewPostImage(e.target.files[0])}
//           />
//           <button
//             onClick={handlePostSubmit}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Post
//           </button>
//         </div>
//       </div>

//       {/* Posts Feed */}
//       <div className="w-full max-w-lg space-y-6">
//         {posts.length === 0 ? (
//           <p className="text-gray-500 text-center">No posts yet. Be the first to share!</p>
//         ) : (
//           posts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white shadow-lg rounded-xl overflow-hidden"
//             >
//               <div className="p-4">
//                 <p className="text-gray-700">{post.text}</p>
//               </div>
//               {post.image && (
//                 <img src={post.image} alt="User post" className="w-full object-cover" />
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Explore;
import React, { useState } from "react";

const Explore = ({ onNavigateToChat }) => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  // Handle new post submission
  const handlePostSubmit = () => {
    if (newPostText.trim() || newPostImage) {
      const newPost = {
        id: Date.now(),
        text: newPostText,
        image: newPostImage ? URL.createObjectURL(newPostImage) : null,
      };
      setPosts([newPost, ...posts]);
      setNewPostText("");
      setNewPostImage(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <button
          onClick={onNavigateToChat}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Go to Chat
        </button>
      </div>

      {/* New Post Section */}
      <div className="w-full bg-white p-4 shadow-md rounded-lg mb-6">
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          placeholder="Share your thoughts..."
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <div className="flex justify-between items-center mt-3">
          <input
            type="file"
            accept="image/*"
            className="text-sm"
            onChange={(e) => setNewPostImage(e.target.files[0])}
          />
          <button
            onClick={handlePostSubmit}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Post
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="w-full">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts yet. Be the first to share something!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white p-4 shadow-md rounded-lg mb-4">
              <p className="text-gray-800">{post.text}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="User post"
                  className="mt-3 w-full max-w-full h-auto rounded-md"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
