import { IconBuilding2 } from "@repo/icons"
import { Button } from "@repo/ui"

const list = [
  "Kỹ Thuật",
  "Bán Hàng",
  "Tiếp Thị",
  "Nhân Sự",
  "Tài Chính",
  "Vận Hành",
]

export const PartBlock = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-foreground mb-4">Bộ Phận</h2>
      <div className="space-y-3">
        {list.map((dept) => (
          <div
            key={dept}
            className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <IconBuilding2 className="text-primary" size={20} />
              <span className="font-medium text-foreground">{dept}</span>
            </div>
            <Button variant="outline" size="sm">
              Xem
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}
