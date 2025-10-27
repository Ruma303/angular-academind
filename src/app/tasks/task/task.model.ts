export type TaskModel = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export type NewTaskType = {
  title: string;
  summary: string;
  dueDate: string;
}