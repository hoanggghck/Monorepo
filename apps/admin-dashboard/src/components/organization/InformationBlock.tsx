import { Card, Label } from "@repo/ui"

export const InformationBlock = () => {
  return (
    <Card>
      <h2 className="text-xl font-bold text-foreground mb-4">
        Thông Tin Công Ty
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="text-sm text-muted-foreground">
            Tên Công Ty
          </Label>
          <p className="text-lg font-medium text-foreground">
            TechCorp Inc.
          </p>
        </div>
        <div>
          <Label className="text-sm text-muted-foreground">
            Trụ Sở Chính
          </Label>
          <p className="text-lg font-medium text-foreground">
            San Francisco, CA
          </p>
        </div>
        <div>
          <Label className="text-sm text-muted-foreground">Thành Lập</Label>
          <p className="text-lg font-medium text-foreground">2015</p>
        </div>
        <div>
          <Label className="text-sm text-muted-foreground">
            Tổng Nhân Viên
          </Label>
          <p className="text-lg font-medium text-foreground">1,248</p>
        </div>
      </div>
    </Card>
  )
}