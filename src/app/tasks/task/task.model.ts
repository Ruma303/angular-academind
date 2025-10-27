export type TaskModel = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export type NewTaskModel = {
  title: string;
  summary: string;
  dueDate: string;
}