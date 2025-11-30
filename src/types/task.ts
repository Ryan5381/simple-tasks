export interface Task {
  id: number;
  userId: number;
  title: string;
  description: string;
  completed: boolean;
  deadline: string | null;
  createDate: string;
}
