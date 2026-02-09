import type { ActivityI, NotificationI, UserI, UserStatusI } from "@repo/types";

export const user: UserI = {
  id: "1",
  name: "Hoàng Duy",
  role: "employee",
  department: "Kỹ Thuật",
  email: "hoang@company.com",
  status: "Active",
};

export const userStatus: UserStatusI = {
  checkedIn: true,
  checkInTime: "08:30 AM",
  workingHours: "7.5 giờ",
  checkedOutTime: "04:00 PM",
};

export const todaysTasks = {
  total: 8,
  completed: 3,
  dueToday: 2,
  overdue: 0,
};

export const notifications: NotificationI[] = [
  {
    id: 1,
    title: '',
    type: "task",
    message: "Công việc 'Tích Hợp API' sắp hết hạn hôm nay",
    timestamp: "2 giờ trước",
    read: false,
  },
  {
    id: 2,
    title: '',
    type: "approval",
    message: "Đơn xin nghỉ của bạn đã được phê duyệt",
    timestamp: "5 giờ trước",
    read: false,
  },
  {
    id: 3,
    title: '',
    type: "info",
    message: "Cuộc họp nhóm được lên lịch lúc 3 giờ chiều",
    timestamp: "1 ngày trước",
    read: true,
  },
];

export const recentActivity: ActivityI[] = [
  {
    id: 1,
    employee: "Hoàng Duy",
    action: "hoàn thành công việc",
    task: "Xem Xét Thiết Kế UI",
    time: "2 giờ trước",
  },
  {
    id: 2,
    employee: "Nguyễn Thị B",
    action: "tạo công việc",
    task: "Tối Ưu Hóa Cơ Sở Dữ Liệu",
    time: "4 giờ trước",
  },
  {
    id: 3,
    employee: "Trần Văn C",
    action: "đã chấm công",
    task: "",
    time: "6 giờ trước",
  },
];