export interface LeaveRequestI {
  id: string;
  type: "sick" | "vacation" | "personal" | "casual";
  startDate: string;
  endDate: string;
  days: number;
  status: "pending" | "approved" | "rejected";
  reason: string;
}