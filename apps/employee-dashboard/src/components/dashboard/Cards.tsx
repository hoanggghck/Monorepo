import { IconAlertCircle, IconBell, IconCheckCircle } from "@repo/icons"
import { Card } from "@repo/ui"
import { notifications, todaysTasks, user, userStatus } from "~/mock/dashboard"

export const EmployeeCard = () => {
  return (
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
  )
}

export const StatusCard = () => {
  return (
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
  )
}

export const TaskCard = () => {
  return (
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
  )
}

export const NotificationCard = () => {
  return (
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
  )
}