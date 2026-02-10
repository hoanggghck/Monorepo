import { IconArrowUpRight, IconTrendingDown, IconTrendingUp, IconZap } from "@repo/icons";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 4200000, expense: 2400000, profit: 1800000 },
  { month: "Feb", revenue: 3800000, expense: 2100000, profit: 1700000 },
  { month: "Mar", revenue: 5200000, expense: 2800000, profit: 2400000 },
  { month: "Apr", revenue: 4900000, expense: 2600000, profit: 2300000 },
  { month: "May", revenue: 6100000, expense: 3200000, profit: 2900000 },
  { month: "Jun", revenue: 7200000, expense: 3500000, profit: 3700000 },
  { month: "Jul", revenue: 8100000, expense: 3800000, profit: 4300000 },
  { month: "Aug", revenue: 7800000, expense: 3600000, profit: 4200000 },
  { month: "Sep", revenue: 8900000, expense: 4100000, profit: 4800000 },
  { month: "Oct", revenue: 9200000, expense: 4200000, profit: 5000000 },
  { month: "Nov", revenue: 9800000, expense: 4500000, profit: 5300000 },
  { month: "Dec", revenue: 10500000, expense: 4800000, profit: 5700000 },
];

const expenseBreakdown = [
  { name: "Nhân công", value: 45, amount: 21600000 },
  { name: "Công nghệ", value: 25, amount: 12000000 },
  { name: "Tiếp thị", value: 15, amount: 7200000 },
  { name: "Vận hành", value: 10, amount: 4800000 },
  { name: "Khác", value: 5, amount: 2400000 },
];

const departmentMetrics = [
  { department: "Development", revenue: 4500000, cost: 2700000, efficiency: "85%" },
  { department: "Sales", revenue: 3200000, cost: 1200000, efficiency: "92%" },
  { department: "Operations", revenue: 2800000, cost: 1800000, efficiency: "78%" },
  { department: "Support", revenue: 1500000, cost: 900000, efficiency: "75%" },
];

const growthMetrics = [
  { label: "Tăng trưởng Doanh thu", value: "+32.5%", change: "+8.2%", icon: IconTrendingUp, color: "text-secondary" },
  { label: "Tăng trưởng Lợi nhuận", value: "+28.3%", change: "+5.1%", icon: IconTrendingUp, color: "text-secondary" },
  { label: "Cải thiện Hiệu suất", value: "+18.7%", change: "+2.3%", icon: IconZap, color: "text-primary" },
  { label: "Giảm Chi phí", value: "-12.4%", change: "-3.2%", icon: IconTrendingDown, color: "text-primary" },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(value);
};

const formatPercent = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "percent",
    minimumFractionDigits: 1,
  }).format(value / 100);
};

const COLORS = ["#3B5BEE", "#22C55E", "#F59E0B", "#EF4444", "#8B5CF6"];
const LINE_CHART_COLORS = {
  revenue: "#2563EB",        // blue-600 – Doanh thu
  profit: "#16A34A",         // green-600 – Lợi nhuận
  grid: "#E5E7EB",           // gray-200
  axis: "#64748B",           // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}
const FINANCE_COLORS = {
  revenue: "#2563EB",   // blue-600
  expense: "#DC2626",   // red-600
  grid: "#E5E7EB",      // gray-200
  axis: "#64748B",      // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}

const EXPENSE_PIE_COLORS = [
  "#2563EB", // blue
  "#16A34A", // green
  "#F59E0B", // amber
  "#9333EA", // violet
  "#DC2626", // red
  "#0D9488", // teal
]

export default function AnalyticsPage() {
  const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);
  const totalExpense = monthlyData.reduce((sum, m) => sum + m.expense, 0);
  const totalProfit = totalRevenue - totalExpense;
  const avgProfitMargin = (totalProfit / totalRevenue) * 100;

  const previousMonthRevenue = monthlyData[monthlyData.length - 2].revenue;
  const currentMonthRevenue = monthlyData[monthlyData.length - 1].revenue;
  const revenueTrend = ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100;

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Phân Tích Kinh Doanh</h1>
        <p className="mt-2 text-muted-foreground">
          Thống kê tăng trưởng, phân tích thu chi và theo dõi biến động tài chính
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {growthMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">{metric.label}</p>
                  <p className={`mt-2 text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{metric.change} so với tháng trước</p>
                </div>
                <div className={`rounded-lg p-3 ${metric.color === "text-secondary" ? "bg-secondary/10" : "bg-primary/10"}`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Xu Hướng Doanh Thu & Lợi Nhuận
        </h2>

        <div className="mt-4">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={LINE_CHART_COLORS.grid}
              />

              <XAxis
                dataKey="month"
                stroke={LINE_CHART_COLORS.axis}
                tick={{ fontSize: 12 }}
              />

              <YAxis
                stroke={LINE_CHART_COLORS.axis}
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `${v / 1_000_000}tr`}
              />

              <Tooltip
                formatter={(value) => formatCurrency(value as number)}
                contentStyle={{
                  backgroundColor: LINE_CHART_COLORS.tooltipBg,
                  border: `1px solid ${LINE_CHART_COLORS.tooltipBorder}`,
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                }}
                labelStyle={{ fontWeight: 600, color: "#0F172A" }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="revenue"
                name="Doanh Thu"
                stroke={LINE_CHART_COLORS.revenue}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5 }}
              />

              <Line
                type="monotone"
                dataKey="profit"
                name="Lợi Nhuận"
                stroke={LINE_CHART_COLORS.profit}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Bar chart */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Doanh Thu vs Chi Tiêu Hàng Tháng
          </h2>

          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData} barGap={8}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={FINANCE_COLORS.grid}
                />

                <XAxis
                  dataKey="month"
                  stroke={FINANCE_COLORS.axis}
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  stroke={FINANCE_COLORS.axis}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(v) => `${v / 1_000_000}tr`}
                />

                <Tooltip
                  formatter={(value) => formatCurrency(value as number)}
                  contentStyle={{
                    backgroundColor: FINANCE_COLORS.tooltipBg,
                    border: `1px solid ${FINANCE_COLORS.tooltipBorder}`,
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                  }}
                  labelStyle={{ fontWeight: 600, color: "#0F172A" }}
                />

                <Legend />

                <Bar
                  dataKey="revenue"
                  name="Doanh Thu"
                  fill={FINANCE_COLORS.revenue}
                  radius={[6, 6, 0, 0]}
                />

                <Bar
                  dataKey="expense"
                  name="Chi Tiêu"
                  fill={FINANCE_COLORS.expense}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Phân Bổ Chi Phí
          </h2>

          <div className="mt-4">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={expenseBreakdown}
                  dataKey="amount"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={3}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  labelLine={false}
                  label={({ name, percent }) =>
                    percent && name
                      ? `${name} ${(percent * 100).toFixed(0)}%`
                      : ""
                  }
                >
                  {expenseBreakdown.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={EXPENSE_PIE_COLORS[index % EXPENSE_PIE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value) => formatCurrency(value as number)}
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                  }}
                  labelStyle={{ fontWeight: 600, color: "#0F172A" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">TỔNG DOANH THU (12 THÁNG)</p>
          <p className="mt-2 text-2xl font-bold text-foreground">{formatCurrency(totalRevenue)}</p>
          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-secondary">
            <IconArrowUpRight className="h-3 w-3" />
            {revenueTrend > 0 ? "+" : ""}{revenueTrend.toFixed(1)}% từ tháng trước
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">TỔNG CHI TIÊU (12 THÁNG)</p>
          <p className="mt-2 text-2xl font-bold text-foreground">{formatCurrency(totalExpense)}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {formatPercent(totalExpense / totalRevenue)} của doanh thu
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">TỔNG LỢI NHUẬN (12 THÁNG)</p>
          <p className="mt-2 text-2xl font-bold text-secondary">{formatCurrency(totalProfit)}</p>
          <p className="mt-2 text-xs text-secondary">{avgProfitMargin.toFixed(1)}% lợi nhuận ròng</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">TĂNG TRỎNG TRUNG BÌNH</p>
          <p className="mt-2 text-2xl font-bold text-primary">
            {(((monthlyData[monthlyData.length - 1].revenue - monthlyData[0].revenue) / monthlyData[0].revenue) * 100).toFixed(1)}%
          </p>
          <p className="mt-2 text-xs text-muted-foreground">So với tháng đầu tiên</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Hiệu Suất Theo Phòng Ban</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Phòng Ban</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Doanh Thu</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Chi Phí</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">Hiệu Suất</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {departmentMetrics.map((dept, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{dept.department}</td>
                  <td className="px-6 py-4 text-right text-sm text-secondary font-semibold">
                    {formatCurrency(dept.revenue)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-foreground">
                    {formatCurrency(dept.cost)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {dept.efficiency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Chi Tiết Phân Bổ Chi Phí</h2>
        <div className="mt-6 space-y-3">
          {expenseBreakdown.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.amount.toLocaleString("vi-VN")} ₫</p>
                </div>
              </div>
              <p className="font-semibold text-foreground">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
