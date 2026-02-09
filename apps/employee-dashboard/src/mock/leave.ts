import type { LeaveRequestI } from "@repo/types";

export const leaveRequests: LeaveRequestI[] = [
  {
    id: "1",
    type: "vacation",
    startDate: "2024-02-15",
    endDate: "2024-02-18",
    days: 4,
    status: "approved",
    reason: "Kỳ nghỉ hàng năm",
  },
  {
    id: "2",
    type: "sick",
    startDate: "2024-02-10",
    endDate: "2024-02-10",
    days: 1,
    status: "pending",
    reason: "Khám bệnh định kỳ",
  },
  {
    id: "3",
    type: "personal",
    startDate: "2024-02-05",
    endDate: "2024-02-05",
    days: 1,
    status: "approved",
    reason: "Việc cá nhân",
  },
  {
    id: "4",
    type: "casual",
    startDate: "2024-01-25",
    endDate: "2024-01-26",
    days: 2,
    status: "approved",
    reason: "Sự kiện gia đình",
  },
];

export const listStatusLeave = [
  {
    label: "Nghỉ Phép",
    days: 12,
    textColor: "text-blue-600"
  },
  {
    label: "Nghỉ Ốm",
    days: 3,
    textColor: "text-red-600"
  },
  {
    label: "Việc Cá Nhân",
    days: 2,
    textColor: "text-orange-600"
  },
  {
    label: "Nghỉ Thường",
    days: 15,
    textColor: "text-yellow-600"
  }
]