import React from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

const TasksPage = () => {
  return (
    <div>
      <Navbar />
      <TodoList />
      <Footer />
    </div>
  );
};

export default TasksPage;
