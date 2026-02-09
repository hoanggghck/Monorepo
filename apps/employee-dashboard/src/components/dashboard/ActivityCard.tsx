import { IconTrendingUp } from "@repo/icons"
import { Card } from "@repo/ui"
import { recentActivity } from "~/mock/dashboard"

export const ActivityCard = () => {
  return (
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
  )
}