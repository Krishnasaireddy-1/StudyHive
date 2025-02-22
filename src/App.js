
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import TeacherLayout from "./layouts/TeacherLayout";
// import StudentLayout from "./layouts/StudentLayout";
// import TeacherDashboard from "./pages/TeacherDashboard";
// import Home from "./pages/Home";
// import StudyTools from "./pages/StudyTools";
// import Subjects from "./pages/Subjects";
// import Profile from "./pages/Profile";
// import Social from "./chats/Social";
// import PrivateRoute from "./components/PrivateRoute";
// import Teachhome from "./teachpages/Teachhome";
// import Conductquiz from "./teachpages/Conductquiz";
// import Coursedeatils from "./teachpages/Coursedeatils";
// import Mycourses from "./teachpages/Mycourses";
// import Stuleaderboard from "./teachpages/Stuleaderboard";
// import TeachProfile from "./teachpages/TeachProfile";
// import TeachSettings from "./teachpages/TeachSettings";
// import Math from "./pages/Math";
// import Programming from "./pages/Programming";
// import Development from "./pages/Development";
// import MatDet from "./pages/MatDet";
// import Diff from "./pages/Diff";
// // Import StudyTools sub-pages
// import Learn from "./pages/Learn";
// import Practice from "./pages/Practice";
// import Test from "./pages/Test";

// // Function to get the user's role
// const getUserRole = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage
//   return user ? user.role : null; // Return user role if available, otherwise null
// };

// function App() {
//   const role = getUserRole();

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect to login if no user is found */}
//         {!role && <Route path="*" element={<Navigate to="/login" replace />} />}

//         {/* Public Route */}
//         <Route path="/login" element={<Login />} />

//         {/* Role-Based Redirection */}
//         {role === "teacher" && <Route path="*" element={<Navigate to="/teacher/home" replace />} />}
//         {role === "student" && <Route path="*" element={<Navigate to="/student/home" replace />} />}

//         {/* Teacher Routes */}
//         <Route
//           path="/teacher/*"
//           element={<PrivateRoute element={<TeacherLayout />} allowedRoles={["teacher"]} />}
//         >
//           <Route path="home" element={<Teachhome />} />
//           <Route path="conductquiz" element={<Conductquiz />} />
//           <Route path="coursedetails" element={<Coursedeatils />} />
//           <Route path="mycourses" element={<Mycourses />} />
//           <Route path="leaderboard" element={<Stuleaderboard />} />
//           <Route path="profile" element={<TeachProfile />} />
//           <Route path="settings" element={<TeachSettings />} />
//         </Route>

//         {/* Student Routes */}
//         <Route
//           path="/student/*"
//           element={<PrivateRoute element={<StudentLayout />} allowedRoles={["student"]} />}
//         >
//           <Route path="home" element={<Home />} />
//           <Route path="studytools" element={<StudyTools />} />
//           <Route path="social" element={<Social />} />

//           {/* Subjects Section */}
//           <Route path="subjects" element={<Subjects />} />
//         <Route path="subjects/learn" element={<Learn />} />
//         {/* Nested Routes Under Learn */}
//         <Route path="subjects/learn/math" element={<Math />} />
//         <Route path="subjects/learn/programming" element={<Programming />} />
//         <Route path="subjects/learn/development" element={<Development />} />
        
//         <Route path="subjects/practice" element={<Practice />} />
//         <Route path="subjects/test" element={<Test />} />

//           {/* Profile (Only if logged in) */}
//           {role && <Route path="profile" element={<Profile />} />}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";
import TeacherDashboard from "./pages/TeacherDashboard";
import Home from "./pages/Home";
import StudyTools from "./pages/StudyTools";
import Subjects from "./pages/Subjects";
import Profile from "./pages/Profile";
import Social from "./chats/Social";
import PrivateRoute from "./components/PrivateRoute";
import Teachhome from "./teachpages/Teachhome";
import Conductquiz from "./teachpages/Conductquiz";
import Coursedeatils from "./teachpages/Coursedeatils";
import Mycourses from "./teachpages/Mycourses";
import Stuleaderboard from "./teachpages/Stuleaderboard";
import TeachProfile from "./teachpages/TeachProfile";
import TeachSettings from "./teachpages/TeachSettings";
import Math from "./pages/Math";
import Programming from "./pages/Programming";
import Development from "./pages/Development";
import MatDet from "./pages/MatDet";
import Diff from "./pages/Diff";
import QnAGenerator from "./pages/QnAGenerator";
// Import StudyTools sub-pages
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Test from "./pages/Test";

// Function to get the user's role
const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage
  return user ? user.role : null; // Return user role if available, otherwise null
};

function App() {
  const role = getUserRole();

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to login if no user is found */}
        {!role && <Route path="*" element={<Navigate to="/login" replace />} />}

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Role-Based Redirection */}
        {role === "teacher" && <Route path="*" element={<Navigate to="/teacher/home" replace />} />}
        {role === "student" && <Route path="*" element={<Navigate to="/student/home" replace />} />}

        {/* Teacher Routes */}
        <Route
          path="/teacher/*"
          element={<PrivateRoute element={<TeacherLayout />} allowedRoles={["teacher"]} />}
        >
          <Route path="home" element={<Teachhome />} />
          <Route path="conductquiz" element={<Conductquiz />} />
          <Route path="coursedetails" element={<Coursedeatils />} />
          <Route path="mycourses" element={<Mycourses />} />
          <Route path="leaderboard" element={<Stuleaderboard />} />
          <Route path="profile" element={<TeachProfile />} />
          <Route path="settings" element={<TeachSettings />} />
        </Route>

        {/* Student Routes */}
        <Route
          path="/student/*"
          element={<PrivateRoute element={<StudentLayout />} allowedRoles={["student"]} />}
        >
          <Route path="home" element={<Home />} />
          <Route path="qns" element={<QnAGenerator/>}/>
          <Route path="studytools" element={<StudyTools />} />
          <Route path="social" element={<Social />} />

          {/* Subjects Section */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects/learn" element={<Learn />} />
          
          {/* Nested Routes Under Learn */}
          <Route path="subjects/learn/math" element={<Math />} />
          <Route path="subjects/learn/math/matdet" element={<MatDet />} />
          <Route path="subjects/learn/math/diff" element={<Diff />} />

          <Route path="subjects/learn/programming" element={<Programming />} />
          <Route path="subjects/learn/development" element={<Development />} />

          <Route path="subjects/practice" element={<Practice />} />
          <Route path="subjects/test" element={<Test />} />

          {/* Profile (Only if logged in) */}
          {role && <Route path="profile" element={<Profile />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
