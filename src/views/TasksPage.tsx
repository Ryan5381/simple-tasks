import React from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

const TasksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <TodoList />
      </div>
      <Footer />
    </div>
  );
};

export default TasksPage;
