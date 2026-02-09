import type { UserI } from "@repo/types";

export const users: UserI[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@company.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@company.com",
    role: "Employee",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@company.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    email: "alex@company.com",
    role: "Employee",
    status: "Inactive",
  },
];

export const roles = [
  { name: "Admin", users: 5, permissions: 45 },
  { name: "Manager", users: 24, permissions: 28 },
  { name: "Employee", users: 1219, permissions: 8 },
];