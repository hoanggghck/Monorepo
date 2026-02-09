export interface UserI {
  id: string | number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}