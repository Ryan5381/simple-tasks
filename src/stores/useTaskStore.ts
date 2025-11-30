import { create } from "zustand";
import { persist } from "zustand/middleware";
import taskData from "../data/task.json";
import type { Task } from "../types/task";

interface TaskState {
  tasks: Task[];
}

interface TaskAction {
  addTask: (taskData: Omit<Task, "id" | "createDate">) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompleted: (id: number) => void;
  getTaskById: (id: number) => Task | undefined;
}

type TaskType = TaskState & TaskAction;

const useTaskStore = create<TaskType>()(
  persist<TaskType>(
    (set, get) => ({
      tasks: taskData as Task[],
      addTask: (taskData) => {
        const { tasks } = get();

        const newTask: Task = {
          id: Date.now(), // 沒後端，用隨機數字當id
          createDate: new Date().toISOString().slice(0, 10),
          ...taskData,
        };
        set({ tasks: [...tasks, newTask] });
      },

      updateTask: (id, updates) => {
        const { tasks } = get();
        const updated = tasks.map((t) =>
          t.id === id ? { ...t, ...updates } : t
        );
        set({ tasks: updated });
      },

      deleteTask: (id) => {
        const { tasks } = get();
        set({ tasks: tasks.filter((t) => t.id !== id) });
      },

      toggleTaskCompleted: (id) => {
        const { tasks } = get();
        const updated = tasks.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        );
        set({ tasks: updated });
      },
      getTaskById: (id) => {
        const { tasks } = get();
        return tasks.find((t) => t.id === id);
      },
    }),
    { name: "task-storage" } // 存在localstorage的key
  )
);

export default useTaskStore;
