import { IconBuilding2, IconPlus } from "@repo/icons";
import { Button, Card, Label } from "@repo/ui";

export default function OrganizationPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Quản Lý Tổ Chức
            </h1>
            <p className="text-muted-foreground mt-2">
              Quản lý cấu trúc công ty, bộ phận và hệ thống phân cấp tổ chức.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <IconPlus size={18} className="mr-2" />
            Thêm Bộ Phận
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-3">
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
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-foreground mb-4">Bộ Phận</h2>
          <div className="space-y-3">
            {[
              "Kỹ Thuật",
              "Bán Hàng",
              "Tiếp Thị",
              "Nhân Sự",
              "Tài Chính",
              "Vận Hành",
            ].map((dept) => (
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
        </Card>
        <Card className="p-6">
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
      </div>
    </div>
  );
}
