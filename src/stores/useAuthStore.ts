import { create } from "zustand";
import { persist } from "zustand/middleware";
import userData from "../data/users.json";
import type { User } from "../types/user";

interface AuthState {
  users: User[];
  currentUser: User | null;
  isAuth: boolean;
  error: string | null;
}

interface AuthAction {
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

type AuthType = AuthState & AuthAction;

const useAuthStore = create<AuthType>()(
  persist<AuthType>(
    (set, get) => ({
      users: userData as User[],
      currentUser: null,
      isAuth: false,
      error: null,

      login: (email, password) => {
        const { users } = get();
        const found = users.find(
          (u) => u.email === email && u.password === password
        );

        if (!found) {
          set({ error: "帳號或密碼錯誤" });
          return false;
        }

        set({
          currentUser: found,
          isAuth: true,
          error: null,
        });
        return true;
      },

      register: (name, email, password) => {
        const { users } = get();

        if (users.some((u) => u.email === email)) {
          set({ error: "此email已被註冊" });
          return false;
        }

        const newUser: User = {
          id: Date.now(), // 沒後端，用隨機的毫秒數產生id
          name,
          email,
          password,
          createDate: new Date().toISOString().slice(0, 10),
        };
        const updated = [...users, newUser];

        set({
          users: updated,
          currentUser: newUser,
          isAuth: true,
          error: null,
        });
        return true;
      },
      logout: () => {
        set({
          currentUser: null,
          isAuth: false,
          error: null,
        });
      },
    }),
    {
      name: "auth-storage", // 存在 localStorage 的 key
    }
  )
);

export default useAuthStore;
