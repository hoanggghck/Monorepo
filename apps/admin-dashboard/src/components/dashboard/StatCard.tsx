import type { StatCardI } from "@repo/types";
import { Card } from "@repo/ui";
import {
  IconAlertCircle,
  IconDollarSign,
  IconTrendingUp,
  IconUsers,
} from "@repo/icons";

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
export const StatWrapper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card className="p-4 md:p-6" key={index}>
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gray-100 rounded-lg">{stat.icon}</div>
            {stat.trend && (
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  stat.trend === "up" ? "text-success" : "text-destructive"
                }`}
              >
                {stat.trend === "up" ? "↑" : "↓"}
                {stat.trend === "up" ? "12%" : "8%"}
              </div>
            )}
          </div>
          <h3 className="text-muted-foreground text-sm font-medium mb-2">
            {stat.title}
          </h3>
          <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
          <p className="text-xs text-muted-foreground">{stat.change}</p>
        </Card>
      ))}
    </div>
  )
}
