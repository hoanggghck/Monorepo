import {
  IconLayoutDashboard,
  IconCalendar,
  IconCheckSquare,
  IconClock,
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
    label: "Công Việc Của Tôi",
    path: "/tasks",
    icon: IconCheckSquare,
  },
  {
    label: "Chấm Công",
    icon: IconClock,
    path: "/time-tracking",
  },
  {
    label: "Nghỉ Phép",
    path: "/leave",
    icon: IconCalendar,
  },
  {
    label: "Thông Báo",
    path: "/notification",
    icon: IconBell,
  }
]
