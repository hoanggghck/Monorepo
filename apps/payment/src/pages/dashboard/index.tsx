import { IconDollarSign, IconTrendingUp, IconArrowUpRight, IconArrowDownRight, IconUsers, IconTrendingDown } from "@repo/icons";
import { formatCurrency } from "@repo/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const chartData = [
  { month: "Jan", revenue: 4000, expense: 2400 },
  { month: "Feb", revenue: 3000, expense: 1398 },
  { month: "Mar", revenue: 2000, expense: 9800 },
  { month: "Apr", revenue: 2780, expense: 3908 },
  { month: "May", revenue: 1890, expense: 4800 },
  { month: "Jun", revenue: 2390, expense: 3800 },
];

const topEmployees = [
  { name: "Nguyễn Văn A", salary: 27500000, dept: "Development" },
  { name: "Trần Thị B", salary: 23000000, dept: "Management" },
  { name: "Lê Văn C", salary: 19000000, dept: "Design" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bảng Điều Khiển</h1>
        <p className="mt-2 text-muted-foreground">
          Chào mừng trở lại! Đây là tổng quan tài chính của bạn.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tổng Doanh Thu</p>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {formatCurrency(250000000)}
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-success">
                <IconArrowUpRight className="h-3 w-3" />
                +12.5% so với tháng trước
              </p>
            </div>
            <div className="rounded-lg bg-secondary/10 p-3">
              <IconDollarSign className="h-6 w-6 text-secondary" />
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tổng Chi Tiêu</p>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {formatCurrency(180000000)}
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-destructive">
                <IconArrowDownRight className="h-3 w-3" />
                +8.3% so với tháng trước
              </p>
            </div>
            <div className="rounded-lg bg-destructive/10 p-3">
              <IconTrendingDown className="h-6 w-6 text-destructive" />
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Lợi Nhuận Ròng</p>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {formatCurrency(70000000)}
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-success">
                <IconArrowUpRight className="h-3 w-3" />
                +18.2% so với tháng trước
              </p>
            </div>
            <div className="rounded-lg bg-success/10 p-3">
              <IconTrendingUp className="h-6 w-6 text-success" />
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tổng Nhân Viên</p>
              <p className="mt-2 text-2xl font-bold text-foreground">250</p>
              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-primary">
                <IconArrowUpRight className="h-3 w-3" />
                +5 nhân viên mới
              </p>
            </div>
            <div className="rounded-lg bg-primary/10 p-3">
              <IconUsers className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Doanh Thu vs Chi Tiêu</h2>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: "0.875rem" }}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: "0.875rem" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => formatCurrency(value as number)}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#22c55e" // xanh lá
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#ef4444" // đỏ
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Nhân Viên Hàng Đầu</h2>
          <div className="mt-4 space-y-4">
            {topEmployees.map((emp, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-border pb-4 last:border-b-0">
                <div>
                  <p className="font-medium text-foreground">{emp.name}</p>
                  <p className="text-xs text-muted-foreground">{emp.dept}</p>
                </div>
                <p className="font-semibold text-secondary">{formatCurrency(emp.salary)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Dự Án Đang Thực Hiện</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            {
              name: "Dự án E-commerce",
              progress: 75,
              status: "Đang thực hiện",
              budget: 500000000,
            },
            {
              name: "Hệ thống CRM",
              progress: 45,
              status: "Đang thực hiện",
              budget: 300000000,
            },
            {
              name: "Mobile App",
              progress: 90,
              status: "Sắp hoàn thành",
              budget: 200000000,
            },
          ].map((project, idx) => (
            <div key={idx} className="rounded-lg bg-muted/40 p-4">
              <p className="font-semibold text-foreground">{project.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{project.status}</p>
              <div className="mt-3 h-2 w-full rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">
                {formatCurrency(project.budget)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}