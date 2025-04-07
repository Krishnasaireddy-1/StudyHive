
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000";

// const FriendList = ({ selectedFriend, onSelectFriend }) => {
//   const [friends, setFriends] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);
  
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user._id : null;

//   useEffect(() => {
//     if (userId) {
//       fetchFriends();
//       fetchStudents();
//     }
//   }, [userId]);

//   const fetchFriends = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_URL}/friends/${userId}`);
//       setFriends(response.data);
//     } catch (error) {
//       console.error("Error fetching friends:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_URL}/friends/students/${userId}`);
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddFriend = async (friendId) => {
//     try {
//       await axios.post(`${API_URL}/friends/add-friend`, { userId, friendId });
//       alert("Friend added successfully!");
//       fetchFriends(); // Refresh friends list
//       fetchStudents(); // Refresh available students list
//     } catch (error) {
//       console.error("Error adding friend:", error);
//     }
//   };

//   return (
//     <div className="w-64 bg-white shadow-md rounded-lg p-4">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4">Friends</h3>
//       {loading ? (
//         <p className="text-gray-500 text-center">Loading...</p>
//       ) : friends.length > 0 ? (
//         <div className="space-y-2">
//           {friends.map((friend) => (
//             <div
//               key={friend._id}
//               className={`p-3 rounded-lg cursor-pointer transition duration-300 ${
//                 selectedFriend?._id === friend._id
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//               onClick={() => onSelectFriend(friend)}
//             >
//               {friend.username}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center">No friends yet.</p>
//       )}

//       <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Explore Students</h3>
//       {students.length > 0 ? (
//         <div className="space-y-2">
//           {students.map((student) => (
//             <div key={student._id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
//               <span>{student.username}</span>
//               <button
//                 className="bg-blue-500 text-white px-2 py-1 rounded"
//                 onClick={() => handleAddFriend(student._id)}
//               >
//                 Add Friend
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center">No students available.</p>
//       )}
//     </div>
//   );
// };

// export default FriendList;
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://studyhive-q61e.onrender.com";

const FriendItem = ({ data, onClick, isSelected }) => (
  <div
    className={`p-3 rounded-lg cursor-pointer transition duration-300 ${
      isSelected ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
    }`}
    onClick={() => onClick(data)}
  >
    {data.username}
  </div>
);

const FriendList = ({ selectedFriend, onSelectFriend }) => {
  const [friends, setFriends] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  useEffect(() => {
    if (userId) {
      fetchFriends();
      fetchStudents();
    }
  }, [userId]);

  const fetchFriends = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/friends/${userId}`);
      setFriends(response.data);
    } catch (error) {
      console.error("Error fetching friends:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/friends/students/${userId}`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFriend = async (friendId) => {
    try {
      await axios.post(`${API_URL}/friends/add-friend`, { userId, friendId });
      alert("Friend added successfully!");
      fetchFriends(); // Refresh friends list
      fetchStudents(); // Refresh available students list
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Friends</h3>
      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : friends.length > 0 ? (
        <div className="space-y-2">
          {friends.map((friend) => (
            <FriendItem
              key={friend._id}
              data={friend}
              onClick={onSelectFriend}
              isSelected={selectedFriend?._id === friend._id}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No friends yet.</p>
      )}

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Explore Students</h3>
      {students.length > 0 ? (
        <div className="space-y-2">
          {students.map((student) => (
            <div key={student._id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
              <span>{student.username}</span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => handleAddFriend(student._id)}
              >
                Add Friend
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No students available.</p>
      )}
    </div>
  );
};

export default FriendList;
