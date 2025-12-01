import React from "react";
import Navbar from "../components/Navbar";
import TaskDetail from "../components/TaskDetail";
import Footer from "../components/Footer";

const TaskDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <TaskDetail />
      </div>
      <Footer />
    </div>
  );
};

export default TaskDetailPage;
