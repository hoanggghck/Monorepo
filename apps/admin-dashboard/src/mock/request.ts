import { StatusRequest, type RequestI } from "@repo/types";

export const requests: RequestI[] = [
  {
    id: 1,
    type: "Leave",
    employee: "John Smith",
    dates: "2024-02-10 - 2024-02-16",
    status: StatusRequest.Pending,
    submitted: "1 day ago",
  },
  {
    id: 2,
    type: "Reimbursement",
    employee: "Sarah Johnson",
    amount: "$450.00",
    status: StatusRequest.Approved,
    submitted: "2 days ago",
  },
  {
    id: 3,
    type: "Leave",
    employee: "Michael Chen",
    dates: "2024-02-20 - 2024-02-23",
    status: StatusRequest.Pending,
    submitted: "3 hours ago",
  },
  {
    id: 4,
    type: "Task Assignment",
    employee: "Emily Davis",
    description: "Project Alpha - Phase 2",
    status: StatusRequest.UnderReview,
    submitted: "5 hours ago",
  },
  {
    id: 5,
    type: "Reimbursement",
    employee: "Alex Rodriguez",
    amount: "$200.50",
    status: StatusRequest.Rejected,
    submitted: "1 week ago",
  },
];