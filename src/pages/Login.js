// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import '../style.css'
// const API_URL = "http://www.localhost:5000/auth";

// const Login = () => {
//   const [isRegistering, setIsRegistering] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [name, setName] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       redirectToDashboard(user.role);
//     }
//   }, [navigate]);

//   const redirectToDashboard = (role) => {
//     switch (role) {
//       case "teacher":
//         navigate("/teacher/home");
//         break;
//       case "student":
//         navigate("/student/home");
//         break;
//       default:
//         navigate("/login");
//     }
//   };

//   const handleRegister = async () => {
//     if (!name.trim() || !phoneNo.trim() || !username.trim() || !email.trim() || !password.trim() || !role.trim()) {
//       alert("Please fill all fields.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${API_URL}/register`,
//         { name, phoneNo, username, email, password, role },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 201) {
//         alert("Registration successful! Please login.");
//         setIsRegistering(false);
//       }
//     } catch (error) {
//       console.error("Registration failed:", error);
//       alert(error.response?.data?.message || "Registration failed. Try again.");
//     }
//   };

//   const handleLogin = async () => {
//     if (!username || !password || !role) {
//       alert("Please enter username, password, and select a role.");
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/login`, { username, password, role });

//       if (response.status === 200) {
//         console.log(response.data.user);
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         alert("Login successful!");
//         redirectToDashboard(response.data.user.role);
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Invalid username, password, or role.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
//       <div className="relative w-full max-w-md p-8 bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl">
//         <h2 className="text-3xl font-bold text-white text-center mb-6">
//           {isRegistering ? "Create an Account" : "Welcome Back"}
//         </h2>

//         {isRegistering ? (
//           <>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={phoneNo}
//               onChange={(e) => setPhoneNo(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               >
//               <option value="">-- Select Role --</option>
//               <option value="teacher">Teacher</option>
//               <option value="student">Student</option>
//             </select>

//             <button
//               onClick={handleRegister}
//               className="w-full px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md transition duration-300 hover:bg-yellow-500"
//             >
//               Register
//             </button>
//             <p className="text-white text-sm mt-4 text-center">
//               Already have an account?{" "}
//               <span
//                 onClick={() => setIsRegistering(false)}
//                 className="text-yellow-300 cursor-pointer hover:underline"
//               >
//                 Login here
//               </span>
//             </p>
//           </>
//         ) : (
//           <>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               />
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
//               >
//               <option value="">-- Select Role --</option>
//               <option value="teacher">Teacher</option>
//               <option value="student">Student</option>
//             </select>

//             <button
//               onClick={handleLogin}
//               className="w-full px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md transition duration-300 hover:bg-yellow-500"
//             >
//               Login
//             </button>
//             <p className="text-white text-sm mt-4 text-center">
//               Don't have an account?{" "}
//               <span
//                 onClick={() => setIsRegistering(true)}
//                 className="text-yellow-300 cursor-pointer hover:underline"
//               >
//                 Register here
//               </span>
//             </p>
//           </>
//         )}
//       </div>

//       {/* Tailwind Custom Styles */}
//       <style>
//         {`
//           .input-field {
//             @apply w-full px-4 py-2 mb-4 bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none;
//           }

//           .btn-primary {
//             @apply w-full px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md transition duration-300 hover:bg-yellow-500;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Login;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../style.css';

const API_URL = "http://www.localhost:5000/auth";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      redirectToDashboard(user.role);
    }
  }, [navigate]);

  const redirectToDashboard = (role) => {
    switch (role) {
      case "teacher":
        navigate("/teacher/home");
        break;
      case "student":
        navigate("/student/home");
        break;
      default:
        navigate("/login");
    }
  };

  const handleRegister = async () => {
    if (!name.trim() || !phoneNo.trim() || !username.trim() || !email.trim() || !password.trim() || !role.trim()) {
      alert("Please fill all fields.");
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/register`, { name, phoneNo, username, email, password, role });
      if (response.status === 201) {
        alert("Registration successful! Please login.");
        setIsRegistering(false);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  const handleLogin = async () => {
    if (!username || !password || !role) {
      alert("Please enter username, password, and select a role.");
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password, role });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert("Login successful!");
        redirectToDashboard(response.data.user.role);
      }
    } catch (error) {
      alert("Invalid username, password, or role.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('/loginback.jpg')" }}>
      <div className="bg-white shadow-lg rounded-lg flex w-3/4 max-w-4xl">
        
        {/* Left Section */}
        <div className="w-1/2 bg-[#9BA4B5] text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Education Portal</h2>
          <p className="text-lg">
            Empower your learning experience with interactive tools and resources. 
            Teachers can manage classes efficiently, and students can track their progress seamlessly.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">{isRegistering ? "Create an Account" : "Login"}</h2>
          
          {isRegistering ? (
            <>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded mb-2" />
              <input type="tel" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="w-full border p-2 rounded mb-2" />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border p-2 rounded mb-2" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded mb-2" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded mb-2" />
              <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border p-2 rounded mb-4">
                <option value="">-- Select Role --</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
              <button onClick={handleRegister} className="w-full bg-[#9BA4B5] text-white py-2 rounded font-bold hover:bg-gray-700">Register</button>
              <p className="text-gray-600 text-sm mt-4 text-center">Already have an account? <span onClick={() => setIsRegistering(false)} className="text-blue-500 cursor-pointer hover:underline">Login here</span></p>
            </>
          ) : (
            <>
              <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border p-2 rounded mb-2">
                <option value="">-- Select Role --</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border p-2 rounded mb-2" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded mb-4" />
              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-blue-500">Forgot Password?</a>
              </div>
              <button onClick={handleLogin} className="w-full bg-[#9BA4B5] text-white py-2 rounded font-bold hover:bg-gray-700">Login</button>
              <p className="text-gray-600 text-sm mt-4 text-center">Don't have an account? <span onClick={() => setIsRegistering(true)} className="text-blue-500 cursor-pointer hover:underline">Register here</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
