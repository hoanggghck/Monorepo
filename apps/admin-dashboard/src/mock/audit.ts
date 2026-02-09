import type { AuditI } from "@repo/types";

export const auditLogs: AuditI[] = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "Created new department",
    target: "Engineering",
    timestamp: "2024-02-05 10:30 AM",
    details: "Created new Engineering department with 5 initial members",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: "Approved leave request",
    target: "John Smith - 5 days",
    timestamp: "2024-02-05 09:15 AM",
    details: "Approved annual leave for John Smith from Feb 10-16",
  },
  {
    id: 3,
    user: "Emily Davis",
    action: "Modified user permissions",
    target: "Alex Rodriguez",
    timestamp: "2024-02-04 03:45 PM",
    details:
      "Changed role from Employee to Manager, added 12 new permissions",
  },
  {
    id: 4,
    user: "System",
    action: "Scheduled workflow",
    target: "Payroll Processing",
    timestamp: "2024-02-04 02:00 PM",
    details: "Monthly payroll processing workflow started",
  },
  {
    id: 5,
    user: "Lisa Wong",
    action: "Created new user",
    target: "David Park",
    timestamp: "2024-02-04 11:20 AM",
    details:
      "Created new employee account for David Park (david.park@company.com)",
  },
  {
    id: 6,
    user: "Robert Taylor",
    action: "Updated company policy",
    target: "Remote Work Policy",
    timestamp: "2024-02-03 04:30 PM",
    details: "Updated remote work policy with new flexible working hours",
  },
  {
    id: 7,
    user: "Jessica Brown",
    action: "Submitted expense report",
    target: "$1,250.00",
    timestamp: "2024-02-03 01:15 PM",
    details:
      "Submitted expense reimbursement request for conference attendance",
  },
  {
    id: 8,
    user: "Chris Wilson",
    action: "Modified workflow",
    target: "Leave Request Workflow",
    timestamp: "2024-02-02 10:00 AM",
    details: "Changed SLA from 5 to 3 business days for leave approvals",
  },
];