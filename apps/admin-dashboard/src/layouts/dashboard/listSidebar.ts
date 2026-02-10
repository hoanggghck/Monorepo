import {
  IconLayoutDashboard,
  IconUsers,
  IconClipboardList,
  IconSettings,
  IconMail,
  IconBookMarked,
  IconBuilding2
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
    label: "Công ty",
    path: "/organization",
    icon: IconBuilding2,
  },
  {
    label: "Nhân viên & vai trò",
    icon: IconUsers,
    path: "/users",
    children: [
      { label: "Nhân viên", path: "/users" },
      { label: "Vai trò", path: "/roles" },
    ],
  },
  {
    label: "Công việc & Tiến độ",
    path: "/workflows",
    icon: IconSettings,
    children: [
      { label: "Workflow", path: "/workflows" },
      { label: "Phòng ban", path: "/organization/departments" },
      { label: "Sơ đồ tổ chức", path: "/organization/org-chart" },
    ],
  },
  {
    label: "Yêu cầu",
    path: "/requests",
    icon: IconClipboardList,
  },
  {
    label: "Liên hệ",
    path: "/email",
    icon: IconMail,
  },
  {
    label: "Nhật ký kiểm toán",
    path: "/audit",
    icon: IconBookMarked,
  },
]
