import { IconAlertCircle, IconCalendar, IconCheckCircle, IconClock, IconPlus } from "@repo/icons";
import { Button, Card } from "@repo/ui";
import { cn } from "@repo/ui/utils";
import { useState } from "react";

interface LeaveRequest {
  id: string;
  type: "sick" | "vacation" | "personal" | "casual";
  startDate: string;
  endDate: string;
  days: number;
  status: "pending" | "approved" | "rejected";
  reason: string;
}

export default function LeavePage() {
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [newRequestType, setNewRequestType] = useState<"vacation" | "sick" | "personal" | "casual">("vacation");
  const [newRequestStartDate, setNewRequestStartDate] = useState("");
  const [newRequestEndDate, setNewRequestEndDate] = useState("");
  const [newRequestReason, setNewRequestReason] = useState("");

  const leaveRequests: LeaveRequest[] = [
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

  const getStatusColor = (status: LeaveRequest["status"]) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusLabel = (status: LeaveRequest["status"]) => {
    switch (status) {
      case "approved":
        return "Đã Phê Duyệt";
      case "rejected":
        return "Từ Chối";
      case "pending":
        return "Chờ Duyệt";
    }
  };

  const getTypeLabel = (type: LeaveRequest["type"]) => {
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

  const getStatusIcon = (status: LeaveRequest["status"]) => {
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
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Nghỉ Phép</h1>
          <p className="text-gray-500 mt-1">
            Quản lý đơn xin nghỉ và xem lịch sử
          </p>
        </div>
        <Button
          onClick={() => setIsNewRequestModalOpen(true)}
        >
          <IconPlus className="w-5 h-5" />
          Đơn Xin Mới
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <p className="text-gray-600 text-sm mb-2">Nghỉ Phép</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-gray-500 text-sm">ngày còn lại</p>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 text-sm mb-2">Nghỉ Ốm</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-red-600">3</p>
            <p className="text-gray-500 text-sm">ngày còn lại</p>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 text-sm mb-2">Việc Cá Nhân</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-orange-600">2</p>
            <p className="text-gray-500 text-sm">ngày còn lại</p>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 text-sm mb-2">Nghỉ Thường</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-purple-600">5</p>
            <p className="text-gray-500 text-sm">ngày còn lại</p>
          </div>
        </Card>
      </div>
      <Card className="border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
          <IconCalendar className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-900">Đơn Xin Nghỉ</h2>
        </div>
        <div className="divide-y divide-gray-200">
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
        </div>
      </Card>
    </div>
  );
}
