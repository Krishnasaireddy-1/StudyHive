import { Outlet } from "react-router-dom";
import Header from "./Header";

function StudentLayout() {
  return (
    <div className="student-layout">
      <Header role="student" />
      <main className="p-4">
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  );
}

export default StudentLayout;
