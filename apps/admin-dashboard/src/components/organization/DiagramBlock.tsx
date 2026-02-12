import { Button, Card } from "@repo/ui"

export const DiagramBlock = () => {
  return (
    <Card className="p-4 md:p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">
        Sơ Đồ Tổ Chức
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Cấu trúc cây trực quan của phân cấp tổ chức của bạn với khả năng mở
        rộng/thu gọn.
      </p>
      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Xem Sơ Đồ Tổ Chức
      </Button>
    </Card>
  )
}
