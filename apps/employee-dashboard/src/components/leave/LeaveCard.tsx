import { IconAlertCircle, IconCalendar, IconCheckCircle, IconClock } from "@repo/icons"
import type { LeaveRequestI } from "@repo/types";
import { Card, cn } from "@repo/ui"
import { leaveRequests } from "~/mock/leave"

export const LeaveCard = () => {
  const getStatusColor = (status: LeaveRequestI["status"]) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusLabel = (status: LeaveRequestI["status"]) => {
    switch (status) {
      case "approved":
        return "Đã Phê Duyệt";
      case "rejected":
        return "Từ Chối";
      case "pending":
        return "Chờ Duyệt";
    }
  };

  const getTypeLabel = (type: LeaveRequestI["type"]) => {
    switch (type) {
      case "vacation":
        return "Nghỉ Phép";
      case "sick":
        return "Nghỉ Ốm";
      case "personal":
        return "Việc Cá Nhân";
      case "casual":
        return "Nghỉ Thường";
    }
  };

  const getStatusIcon = (status: LeaveRequestI["status"]) => {
    switch (status) {
      case "approved":
        return <IconCheckCircle className="w-4 h-4" />;
      case "rejected":
        return <IconAlertCircle className="w-4 h-4" />;
      case "pending":
        return <IconClock className="w-4 h-4" />;
    }
  };
  return (
    <div>
      <div className="mb-6 flex items-center gap-2">
      <IconCalendar className="w-5 h-5 text-blue-500" />
      <h2 className="text-lg font-bold text-gray-900">Đơn Xin Nghỉ</h2>
    </div>
    <Card className="divide-y divide-gray-200 md:p-0">
      {leaveRequests.map((request) => (
        <div key={request.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-gray-900">
                  {getTypeLabel(request.type)}
                </h3>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                    getStatusColor(request.status)
                  )}
                >
                  {getStatusIcon(request.status)}
                  {getStatusLabel(request.status)}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{request.reason}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-500">
              {new Date(request.startDate).toLocaleDateString("vi-VN")} -{" "}
              {new Date(request.endDate).toLocaleDateString("vi-VN")} ({request.days}{" "}
              {request.days === 1 ? "ngày" : "ngày"})
            </div>
          </div>
        </div>
      ))}
    </Card>
  </div>
  )
}