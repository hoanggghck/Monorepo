import type { TaskI } from "@repo/types";

export const taskMock: TaskI[] = [
  {
    id: "1",
    title: "Tích Hợp API",
    status: "doing",
    priority: "high",
    dueDate: "2024-02-10",
    description: "Tích hợp API thanh toán với ứng dụng chính",
    comments: 3,
  },
  {
    id: "2",
    title: "Xem Xét Thiết Kế UI",
    status: "done",
    priority: "medium",
    dueDate: "2024-02-08",
    description: "Xem xét và phê duyệt thiết kế bảng điều khiển mới",
    comments: 2,
  },
  {
    id: "3",
    title: "Tối Ưu Hóa Cơ Sở Dữ Liệu",
    status: "todo",
    priority: "high",
    dueDate: "2024-02-15",
    description: "Tối ưu hóa hiệu suất truy vấn cho phân tích người dùng",
    comments: 5,
  },
  {
    id: "4",
    title: "Tài Liệu",
    status: "todo",
    priority: "low",
    dueDate: "2024-02-20",
    description: "Viết tài liệu kỹ thuật cho các API mới",
    comments: 1,
  },
]