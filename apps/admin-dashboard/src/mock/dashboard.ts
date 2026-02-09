import type { ActivityLogI } from "@repo/types";

export const activities: ActivityLogI[] = [
  {
    id: "1",
    user: "Sarah Johnson",
    action: "Tạo bộ phận mới",
    timestamp: "2 giờ trước",
    status: "success",
  },
  {
    id: "2",
    user: "Michael Chen",
    action: "Phê duyệt yêu cầu nghỉ phép cho John Smith",
    timestamp: "4 giờ trước",
    status: "success",
  },
  {
    id: "3",
    user: "Emily Davis",
    action: "Sửa đổi quyền người dùng",
    timestamp: "5 giờ trước",
    status: "success",
  },
  {
    id: "4",
    user: "Hệ Thống",
    action: "Đang chờ: Kiểm tra cấu hình quy trình",
    timestamp: "6 giờ trước",
    status: "pending",
  },
  {
    id: "5",
    user: "Alex Rodriguez",
    action: "Nộp yêu cầu hoàn lại chi phí",
    timestamp: "8 giờ trước",
    status: "success",
  },
  {
    id: "6",
    user: "Lisa Wong",
    action: "Tạo tài khoản người dùng mới",
    timestamp: "1 ngày trước",
    status: "success",
  },
];