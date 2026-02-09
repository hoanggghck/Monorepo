import type { NotificationI } from "@repo/types";

export const mockNotification: NotificationI[] = [
  {
    id: 1,
    type: "task",
    title: "Giao Công Việc",
    message: "Bạn được giao công việc 'Tích Hợp API'",
    timestamp: "2024-02-09T14:30:00",
    read: false,
  },
  {
    id: 2,
    type: "approval",
    title: "Đơn Xin Nghỉ Được Phê Duyệt",
    message: "Đơn xin nghỉ từ 2024-02-15 đến 2024-02-18 của bạn đã được phê duyệt",
    timestamp: "2024-02-09T10:15:00",
    read: false,
  },
  {
    id: 3,
    type: "team",
    title: "Cuộc Họp Nhóm",
    message: "Cuộc họp nhóm được lên lịch hôm nay lúc 3:00 chiều tại Phòng Họp A",
    timestamp: "2024-02-09T09:00:00",
    read: false,
  },
  {
    id: 4,
    type: "system",
    title: "Cập Nhật Hệ Thống",
    message: "Hệ thống sẽ được bảo trì vào 2024-02-12",
    timestamp: "2024-02-08T16:45:00",
    read: true,
  },
  {
    id: 5,
    type: "task",
    title: "Công Việc Hoàn Thành",
    message: "Thành viên nhóm 'Nguyễn Thị B' hoàn thành công việc 'Tối Ưu Hóa Cơ Sở Dữ Liệu'",
    timestamp: "2024-02-08T14:20:00",
    read: true,
  },
  {
    id: 6,
    type: "approval",
    title: "Yêu Cầu Đi Muộn",
    message: "Yêu cầu đi muộn từ 'Hoàng Duy' chờ duyệt",
    timestamp: "2024-02-08T08:30:00",
    read: true,
  },
]