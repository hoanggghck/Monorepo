import { IconBell } from "@repo/icons";
import type { NotificationI } from "@repo/types";
import { Button } from "@repo/ui";
import { useState } from "react";
import { TitleBlock } from "~/components/common/TitleBlock";
import { NotificationCard } from "~/components/notification/NotificationCard";
import { mockNotification } from "~/mock/notification";



export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationI[]>(mockNotification);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      <TitleBlock
        title="Thông Báo"
        description={`Bạn có ${unreadCount} thông báo chưa đọc`}
      >
        {unreadCount > 0 && (
          <Button onClick={handleMarkAllAsRead}>
            Đánh dấu tất cả là đã đọc
          </Button>
        )}
      </TitleBlock>
      <div className="space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <NotificationCard notif={notif} key={notif.id} setNotifications={setNotifications}/>
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
