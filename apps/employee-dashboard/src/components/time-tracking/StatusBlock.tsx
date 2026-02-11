import { IconClock } from "@repo/icons"
import { Card } from "@repo/ui"

export const StatusBlock = () => {
  return (
    <Card className="">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Trạng Thái Hôm Nay</h2>
      <div className="text-center p-6 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg">
        <IconClock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
        <p className="text-gray-600 text-sm mb-2">Giờ Vào</p>
        <p className="text-3xl font-bold text-blue-600">"08:30 AM"</p>
      </div>
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-800 text-sm font-medium">✓ Bạn đã chấm công vào</p>
      </div>
    </Card>
  )
}