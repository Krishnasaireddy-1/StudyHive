import { Outlet } from "react-router-dom";
import Header from "./Header";

function TeacherLayout() {
  return (
    <div className="teacher-layout">
      <Header role="teacher" />
      <main className="p-4">
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  );
}

export default TeacherLayout;
