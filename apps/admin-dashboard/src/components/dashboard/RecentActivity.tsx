import { IconCheckCircle, IconClock } from "@repo/icons"
import { Button, Card } from "@repo/ui"
import { Link } from "react-router-dom"
import { activities } from "~/mock/dashboard"
import type { ActivityLogI } from "@repo/types"

const RecentActivity = ({ activity }: { activity: ActivityLogI }) => {
  return (
    <div
      className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0"
    >
      <div className="mt-1">
        {activity.status === "success" ? (
          <IconCheckCircle className="text-success" size={20} />
        ) : (
          <IconClock className="text-warning" size={20} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-sm font-medium text-foreground">
              {activity.user}
            </p>
            <p className="text-sm text-muted-foreground break-words">
              {activity.action}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          {activity.timestamp}
        </p>
      </div>
    </div>
  )
}

export const RecentActivityWrapper = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Hoạt Động Gần Đây
          </h2>
          <p className="text-sm text-muted-foreground">
            Xem trước nhật ký kiểm toán
          </p>
        </div>
        <Link to="/audit">
          <Button variant="outline" size="sm">
            Xem Tất Cả
          </Button>
        </Link>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <RecentActivity key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  )
}