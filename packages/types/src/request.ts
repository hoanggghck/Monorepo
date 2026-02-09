export enum StatusRequest {
  Approved = "Approved",
  Pending = "Pending",
  UnderReview = "Under Review",
  Rejected = "Rejected",
}
export interface RequestI {
  id: number;
  type: string;
  employee: string;
  dates?: string;
  amount?: string;
  description?: string;
  status: StatusRequest;
  submitted: string;
}