import { IconCheckCircle } from "@repo/icons";
import { Card } from "@repo/ui";

export const SystemStatus = () => {
  return (
    <Card className="p-6 bg-linear-to-br from-green-50 to-green-100 border-green-200">
      <h3 className="text-lg font-bold text-green-900 mb-3">
        Trạng Thái Hệ Thống
      </h3>
      <div className="space-y-2 text-sm text-green-800">
        <div className="flex items-center gap-2">
          <IconCheckCircle className="text-green-600" size={16} />
          <span>Tất cả dịch vụ hoạt động</span>
        </div>
        <div className="flex items-center gap-2">
          <IconCheckCircle className="text-green-600" size={16} />
          <span>Cơ Sở Dữ Liệu: 99.9% thời gian hoạt động</span>
        </div>
        <div className="flex items-center gap-2">
          <IconCheckCircle className="text-green-600" size={16} />
          <span>API: Phản hồi bình thường</span>
        </div>
      </div>
    </Card>
  )
}