export interface ProjectI {
  id: number;
  name: string;
  client: string;
  budget: number;
  spent: number;
  revenue: number;
  status: "ongoing" | "completed" | "on-hold";
  progress: number;
  startDate: string;
  endDate: string;
}