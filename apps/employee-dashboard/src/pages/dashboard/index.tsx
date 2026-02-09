import {
  IconAlertCircle,
  IconBell,
  IconCheckCircle,
  IconClock,
  IconDollarSign,
  IconFileText,
  IconTrendingUp,
  IconUsers,
} from "@repo/icons";
import { Card, cn } from "@repo/ui";

export default function DashboardPage() {
  const user = {
    id: "1",
    name: "Hoàng Duy",
    role: "employee" as const,
    department: "Kỹ Thuật",
    email: "hoang@company.com",
  };
  const userStatus = {
    checkedIn: true,
    checkInTime: "08:30 AM",
    workingHours: "7.5 giờ",
    checkedOutTime: "04:00 PM",
  };

  const todaysTasks = {
    total: 8,
    completed: 3,
    dueToday: 2,
    overdue: 0,
  };

  const notifications = [
    {
      id: 1,
      type: "task",
      message: "Công việc 'Tích Hợp API' sắp hết hạn hôm nay",
      time: "2 giờ trước",
      read: false,
    },
    {
      id: 2,
      type: "approval",
      message: "Đơn xin nghỉ của bạn đã được phê duyệt",
      time: "5 giờ trước",
      read: false,
    },
    {
      id: 3,
      type: "info",
      message: "Cuộc họp nhóm được lên lịch lúc 3 giờ chiều",
      time: "1 ngày trước",
      read: true,
    },
  ];

  const recentActivity = [
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
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Chào mừng trở lại, {user?.name.split(" ")[0]}!
        </h1>
        <p className="text-gray-500 mt-2">
          {new Date().toLocaleDateString("vi-VN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Tên</p>
              <p className="text-gray-900 text-lg font-semibold mt-1">
                {user?.name}
              </p>
              <p className="text-gray-500 text-xs mt-2">{user?.department}</p>
              <p className="text-blue-600 text-xs font-medium mt-1 capitalize">
                Nhân Viên
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 text-sm font-medium mb-3">
            Trạng Thái Chấm Công
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {userStatus.checkedIn ? (
                <>
                  <IconCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-900 font-semibold">
                    {userStatus.checkInTime}
                  </span>
                </>
              ) : (
                <>
                  <IconAlertCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900 font-semibold">
                    Chưa chấm công
                  </span>
                </>
              )}
            </div>
            <p className="text-gray-500 text-sm">
              Đã làm: {userStatus.workingHours}
            </p>
            {userStatus.checkedOutTime && (
              <p className="text-gray-500 text-xs">
                Giờ về: {userStatus.checkedOutTime}
              </p>
            )}
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 text-sm font-medium mb-3">
            Công Việc Hôm Nay
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Tổng Cộng</span>
              <span className="text-gray-900 font-bold text-lg">
                {todaysTasks.total}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Hoàn Thành</span>
              <span className="text-green-600 font-bold">
                {todaysTasks.completed}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Sắp Hết Hạn</span>
              <span className="text-orange-600 font-bold">
                {todaysTasks.dueToday}
              </span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 text-sm font-medium mb-3">Thông Báo</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <IconBell className="w-5 h-5 text-blue-500" />
              <span className="text-gray-900 font-semibold">
                {notifications.filter((n) => !n.read).length} mới
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Bạn có {notifications.filter((n) => !n.read).length} tin nhắn chưa
              đọc
            </p>
          </div>
        </Card>
      </div>
      <Card className="mb-8 border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
          <IconBell className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-900">Thông Báo Gần Đây</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={cn(
                "px-6 py-4 hover:bg-gray-50 transition-colors",
                !notif.read && "bg-blue-50",
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-gray-900 font-medium text-sm">
                    {notif.message}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{notif.time}</p>
                </div>
                {!notif.read && (
                  <div className="w-2 h-2 rounded-full bg-blue-500 ml-2 mt-1 flex-shrink-0"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
          <IconTrendingUp className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-bold text-gray-900">Hoạt Động Nhóm</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900 font-medium text-sm">
                    <span className="font-bold">{activity.employee}</span>{" "}
                    {activity.action}
                    {activity.task && (
                      <span className="text-blue-600"> "{activity.task}"</span>
                    )}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
