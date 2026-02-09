import { IconBell, IconX } from "@repo/icons";
import { Button, Card, cn } from "@repo/ui";
import { useState } from "react";

interface Notification {
  id: string;
  type: "task" | "approval" | "team" | "system";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "task",
      title: "Giao Công Việc",
      message: "Bạn được giao công việc 'Tích Hợp API'",
      timestamp: "2024-02-09T14:30:00",
      read: false,
    },
    {
      id: "2",
      type: "approval",
      title: "Đơn Xin Nghỉ Được Phê Duyệt",
      message: "Đơn xin nghỉ từ 2024-02-15 đến 2024-02-18 của bạn đã được phê duyệt",
      timestamp: "2024-02-09T10:15:00",
      read: false,
    },
    {
      id: "3",
      type: "team",
      title: "Cuộc Họp Nhóm",
      message: "Cuộc họp nhóm được lên lịch hôm nay lúc 3:00 chiều tại Phòng Họp A",
      timestamp: "2024-02-09T09:00:00",
      read: false,
    },
    {
      id: "4",
      type: "system",
      title: "Cập Nhật Hệ Thống",
      message: "Hệ thống sẽ được bảo trì vào 2024-02-12",
      timestamp: "2024-02-08T16:45:00",
      read: true,
    },
    {
      id: "5",
      type: "task",
      title: "Công Việc Hoàn Thành",
      message: "Thành viên nhóm 'Nguyễn Thị B' hoàn thành công việc 'Tối Ưu Hóa Cơ Sở Dữ Liệu'",
      timestamp: "2024-02-08T14:20:00",
      read: true,
    },
    {
      id: "6",
      type: "approval",
      title: "Yêu Cầu Đi Muộn",
      message: "Yêu cầu đi muộn từ 'Hoàng Duy' chờ duyệt",
      timestamp: "2024-02-08T08:30:00",
      read: true,
    },
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getTypeColor = (type: Notification["type"]) => {
    switch (type) {
      case "task":
        return "bg-blue-100 text-blue-700";
      case "approval":
        return "bg-green-100 text-green-700";
      case "team":
        return "bg-purple-100 text-purple-700";
      case "system":
        return "bg-orange-100 text-orange-700";
    }
  };

  const getTypeLabel = (type: Notification["type"]) => {
    switch (type) {
      case "task":
        return "Công Việc";
      case "approval":
        return "Phê Duyệt";
      case "team":
        return "Nhóm";
      case "system":
        return "Hệ Thống";
    }
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Thông Báo</h1>
          <p className="text-gray-500 mt-1">
            Bạn có {unreadCount} thông báo chưa đọc
          </p>
        </div>
        {unreadCount > 0 && (
          <Button onClick={handleMarkAllAsRead}>
            Đánh dấu tất cả là đã đọc
          </Button>
        )}
      </div>
      <div className="space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <Card
              key={notif.id}
              className={cn(
                "p-5 cursor-pointer",
                !notif.read && "border-blue-200 bg-blue-50"
              )}
              onClick={() => !notif.read && handleMarkAsRead(notif.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 flex items-start gap-4">
                  <span
                    className={cn(
                      "inline-block px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap mt-1",
                      getTypeColor(notif.type)
                    )}
                  >
                    {getTypeLabel(notif.type)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900">
                      {notif.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{notif.message}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      {new Date(notif.timestamp).toLocaleDateString()} at{" "}
                      {new Date(notif.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  {!notif.read && (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                  )}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(notif.id);
                    }}
                    className="bg-error text-white hover:bg-error-hover"
                    size="icon"
                  >
                    <IconX className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <IconBell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Không có thông báo</p>
          </div>
        )}
      </div>
    </div>
  );
}
