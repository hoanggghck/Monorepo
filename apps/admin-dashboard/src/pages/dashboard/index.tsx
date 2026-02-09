import {
  IconAlertCircle,
  IconCheckCircle,
  IconDollarSign,
  IconFileText,
  IconTrendingUp,
  IconUsers,
} from "@repo/icons";
import type { StatCardI } from "@repo/types";
import { Button, Card } from "@repo/ui";
import { Link } from "react-router-dom";
import { activities } from "~/mock/dashboard";
import { StatCard } from "~/components/dashboard/StatCard";
import { ActivityRecent } from "~/components/dashboard/ActivityRecent";

const stats: StatCardI<React.ReactNode>[] = [
  {
    title: "Tổng Nhân Viên",
    value: "1,248",
    change: "+12 tháng này",
    icon: <IconUsers className="text-primary" size={24} />,
    trend: "up",
    link: "/users",
  },
  {
    title: "Yêu Cầu Đang Chờ",
    value: "23",
    change: "5 cần phê duyệt",
    icon: <IconAlertCircle className="text-warning" size={24} />,
    trend: "down",
    link: "/requests",
  },
  {
    title: "Bảng Lương (Tháng Này)",
    value: "$847,532",
    change: "Còn 2 ngày hạn chót",
    icon: <IconDollarSign className="text-success" size={24} />,
    link: "/payroll",
  },
  {
    title: "Trạng Thái Hệ Thống",
    value: "99.9%",
    change: "Tất cả hệ thống hoạt động",
    icon: <IconTrendingUp className="text-blue-600" size={24} />,
    trend: "up",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Bảng Điều Khiển</h1>
        <p className="text-muted-foreground mt-2">
          Chào mừng bạn quay lại! Đây là tổng quan hệ thống HR của bạn.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
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
                <ActivityRecent key={activity.id} activity={activity} />
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Thao Tác Nhanh
            </h3>
            <div className="space-y-3">
              <Link to="/users" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <IconUsers size={18} className="mr-2" />
                  Thêm Nhân Viên Mới
                </Button>
              </Link>
              <Link to="/requests" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <IconAlertCircle size={18} className="mr-2" />
                  Xem Xét Yêu Cầu
                </Button>
              </Link>
              <Link to="/workflows" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <IconFileText size={18} className="mr-2" />
                  Cấu Hình Quy Trình
                </Button>
              </Link>
              <Link to="/email" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <IconTrendingUp size={18} className="mr-2" />
                  Gửi Tin Nhắn
                </Button>
              </Link>
            </div>
          </Card>
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
        </div>
      </div>
    </div>
  );
}
