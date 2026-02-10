import {
  IconLayoutDashboard,
  IconBarChart3,
  IconUsers,
  IconBriefcase,
  IconBell
} from "@repo/icons";

export type SidebarItem = {
  label: string
  path?: string
  icon?: React.ComponentType<any>;
  children?: SidebarItem[]
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: "Bảng điều khiển",
    path: "/",
    icon: IconLayoutDashboard,
  },
  {
    label: "Quản lý Lương",
    path: "/payroll",
    icon: IconUsers,
  },
  {
    label: "Quản lý Dự Án",
    icon: IconBriefcase,
    path: "/projects",
  },
  {
    label: "Phân Tích Kinh Doanh",
    path: "/analytics",
    icon: IconBarChart3,
  },
  {
    label: "Tổng Quan Tài Chính",
    path: "/overview",
    icon: IconBell,
  }
]
