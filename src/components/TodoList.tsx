import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Checkbox, List, message } from "antd";
import useAuthStore from "../stores/useAuthStore";
import useTaskStore from "../stores/useTaskStore";

const TodoList: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthStore();
  const { tasks, addTask, deleteTask, toggleTaskCompleted } = useTaskStore();

  const [newTitle, setNewTitle] = useState("");

  if (!currentUser) {
    navigate("/auth");
    return null;
  }

  const userTasks = tasks.filter((t) => t.userId === currentUser.id);

  const handleAddTask = () => {
    const title = newTitle.trim();
    if (!title) {
      message.warning("請輸入待辦事項");
      return;
    }

    addTask({
      userId: currentUser.id,
      title,
      description: "",
      deadline: "",
      completed: false,
    });

    setNewTitle("");
    message.success("已新增待辦事項");
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    message.success("已刪除待辦事項");
  };

  return (
    <div className="flex items-center justify-center my-15">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <div className="mt-6">
          <div className="flex w-full gap-3 mb-8">
            <Input
              placeholder="新增待辦事項"
              className="flex-1"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button type="primary" onClick={handleAddTask}>
              新增+
            </Button>
          </div>

          {/* tasks */}
          <List
            locale={{ emptyText: "目前沒有任務，先新增一個吧！" }}
            dataSource={userTasks}
            renderItem={(task) => (
              <List.Item
                actions={[
                  <Button
                    size="small"
                    onClick={() => navigate(`/task/${task.id}`)}
                    key="detail"
                  >
                    詳細
                  </Button>,
                  <Button
                    size="small"
                    danger
                    onClick={() => handleDeleteTask(task.id)}
                    key="delete"
                  >
                    刪除
                  </Button>,
                ]}
              >
                <div className="flex items-center gap-4 text-lg">
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTaskCompleted(task.id)}
                  >
                    <span
                      className={
                        "text-lg" +
                        (task.completed ? " line-through text-gray-400" : "")
                      }
                    >
                      {task.title}
                    </span>
                  </Checkbox>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
