import { IconCheckCircle, IconClock } from "@repo/icons"
import type { ActivityLogI } from "@repo/types"

export const ActivityRecent = ({ activity }: { activity: ActivityLogI }) => {
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