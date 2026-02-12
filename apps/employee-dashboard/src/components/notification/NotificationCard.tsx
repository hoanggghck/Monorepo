import { IconX } from "@repo/icons";
import type { NotificationI } from "@repo/types";
import { Button, Card, cn } from "@repo/ui";
import { mockNotification } from "~/mock/notification";

interface PageProps {
  notif: NotificationI;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationI[]>>;
}

export const NotificationCard = ({notif, setNotifications}: PageProps) => {
  const handleMarkAsRead = (id: number) => {
    setNotifications(
      mockNotification.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const getTypeColor = (type: NotificationI["type"]) => {
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

  const getTypeLabel = (type: NotificationI["type"]) => {
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
  const handleDelete = (id: number) => {
    setNotifications(mockNotification.filter((n) => n.id !== id));
  };
  return (
    <Card
      className={cn(
        "cursor-pointer p-4 md:p-6",
        !notif.read && "border-blue-200 bg-blue-50 hover:border-blue-200"
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
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(notif.id);
            }}
            className="bg-error text-white hover:bg-error-hover p-2"
            size="icon"
          >
            <IconX className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
