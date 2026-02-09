import { IconBell } from "@repo/icons"
import { Card, cn } from "@repo/ui"
import { notifications } from "~/mock/dashboard"

export const RecentCard = () => {
  return (
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
  )
}