export interface PayrollI {
  id: number;
  name: string;
  position: string;
  baseSalary: number;
  bonus: number;
  penalty: number;
  totalSalary: number;
  status: "paid" | "pending" | "processing";
}