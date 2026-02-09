export interface TaskI {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
  description: string;
  comments: number;
}