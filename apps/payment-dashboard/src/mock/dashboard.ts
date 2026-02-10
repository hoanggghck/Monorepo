import type { DashboardDetailI } from "@repo/types";

export const chartData = [
  { month: "Tháng một", revenue: 4000, expense: 2400 },
  { month: "Tháng hai", revenue: 3000, expense: 1398 },
  { month: "Tháng ba", revenue: 2000, expense: 9800 },
  { month: "Tháng tư", revenue: 2780, expense: 3908 },
  { month: "Tháng năm", revenue: 1890, expense: 4800 },
  { month: "Tháng sáu", revenue: 2390, expense: 3800 },
];

export const topEmployees = [
  { name: "Nguyễn Văn A", salary: 27500000, dept: "Development" },
  { name: "Trần Thị B", salary: 23000000, dept: "Management" },
  { name: "Lê Văn C", salary: 19000000, dept: "Design" },
];

export const mockDetails: DashboardDetailI[] = [
  {
    title: "Tổng Doanh Thu",
    price: 25000000,
    up: true,
    msg: "+12.5% so với tháng trước",
    sign: "dollar",
    bg: "bg-secondary/10"
  },
  {
    title: "Tổng Chi Tiêu",
    price: 25000000,
    up: false,
    msg: "-8.3% so với tháng trước",
    sign: "trending",
    bg: "bg-destructive/10"
  },
  {
    title: "Lợi Nhuận Ròng",
    price: 70000000,
    up: true,
    msg: "+18.2% so với tháng trước",
    sign: "trending",
    bg: "bg-success/10"
  },
  {
    title: "Tổng Nhân Viên",
    count: 250,
    up: true,
    msg: "+5 nhân viên mới",
    sign: "user",
    bg: "bg-primary/10"
  },
]