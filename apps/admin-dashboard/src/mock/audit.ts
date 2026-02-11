import { AUDIT_ACTION, type AuditI } from "@repo/types";

export const AUDIT_ACTION_LABEL: Record<number, string> = {
  [AUDIT_ACTION.CREATE_DEPARTMENT]: "Tạo phòng ban mới",
  [AUDIT_ACTION.APPROVE_LEAVE]: "Phê duyệt đơn xin nghỉ",
  [AUDIT_ACTION.UPDATE_PERMISSION]: "Thay đổi quyền người dùng",
  [AUDIT_ACTION.SCHEDULE_WORKFLOW]: "Lên lịch quy trình",
  [AUDIT_ACTION.CREATE_USER]: "Tạo người dùng mới",
  [AUDIT_ACTION.UPDATE_POLICY]: "Cập nhật chính sách công ty",
  [AUDIT_ACTION.SUBMIT_EXPENSE]: "Gửi báo cáo chi phí",
  [AUDIT_ACTION.UPDATE_WORKFLOW]: "Chỉnh sửa quy trình",
};

export const AUDIT_ACTION_COLOR: Record<number, string> = {
  [AUDIT_ACTION.CREATE_DEPARTMENT]: "bg-green-100 text-green-700",
  [AUDIT_ACTION.APPROVE_LEAVE]: "bg-blue-100 text-blue-700",
  [AUDIT_ACTION.UPDATE_PERMISSION]: "bg-yellow-100 text-yellow-700",
  [AUDIT_ACTION.SCHEDULE_WORKFLOW]: "bg-gray-100 text-gray-700",
  [AUDIT_ACTION.CREATE_USER]: "bg-emerald-100 text-emerald-700",
  [AUDIT_ACTION.UPDATE_POLICY]: "bg-indigo-100 text-indigo-700",
  [AUDIT_ACTION.SUBMIT_EXPENSE]: "bg-orange-100 text-orange-700",
  [AUDIT_ACTION.UPDATE_WORKFLOW]: "bg-red-100 text-red-700",
};

export const auditLogs: AuditI[] = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: AUDIT_ACTION.CREATE_DEPARTMENT,
    target: "Kỹ thuật",
    timestamp: "2024-02-05 10:30 AM",
    details: "Đã tạo phòng ban Kỹ thuật mới với 5 thành viên ban đầu",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: AUDIT_ACTION.APPROVE_LEAVE,
    target: "John Smith - 5 ngày",
    timestamp: "2024-02-05 09:15 AM",
    details: "Đã phê duyệt đơn nghỉ phép năm cho John Smith từ ngày 10–16/02",
  },
  {
    id: 3,
    user: "Emily Davis",
    action: AUDIT_ACTION.UPDATE_PERMISSION,
    target: "Alex Rodriguez",
    timestamp: "2024-02-04 03:45 PM",
    details:
      "Đã thay đổi vai trò từ Nhân viên sang Quản lý và thêm 12 quyền mới",
  },
  {
    id: 4,
    user: "Hệ thống",
    action: AUDIT_ACTION.SCHEDULE_WORKFLOW,
    target: "Xử lý bảng lương",
    timestamp: "2024-02-04 02:00 PM",
    details: "Đã khởi động quy trình xử lý bảng lương hàng tháng",
  },
  {
    id: 5,
    user: "Lisa Wong",
    action: AUDIT_ACTION.CREATE_USER,
    target: "David Park",
    timestamp: "2024-02-04 11:20 AM",
    details:
      "Đã tạo tài khoản nhân viên mới cho David Park (david.park@company.com)",
  },
  {
    id: 6,
    user: "Robert Taylor",
    action: AUDIT_ACTION.UPDATE_POLICY,
    target: "Chính sách làm việc từ xa",
    timestamp: "2024-02-03 04:30 PM",
    details:
      "Đã cập nhật chính sách làm việc từ xa với giờ làm việc linh hoạt mới",
  },
  {
    id: 7,
    user: "Jessica Brown",
    action: AUDIT_ACTION.SUBMIT_EXPENSE,
    target: "1.250 USD",
    timestamp: "2024-02-03 01:15 PM",
    details:
      "Đã gửi yêu cầu hoàn ứng chi phí tham dự hội nghị",
  },
  {
    id: 8,
    user: "Chris Wilson",
    action: AUDIT_ACTION.UPDATE_WORKFLOW,
    target: "Quy trình xin nghỉ phép",
    timestamp: "2024-02-02 10:00 AM",
    details:
      "Đã thay đổi SLA từ 5 xuống còn 3 ngày làm việc cho việc phê duyệt nghỉ phép",
  },
];
