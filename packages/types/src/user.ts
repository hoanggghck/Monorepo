export interface UserI {
  id: string | number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  department?: string;
}

export interface UserStatusI {
  checkedIn: boolean;
  checkInTime?: string;
  workingHours?: string;
  checkedOutTime?: string;
}