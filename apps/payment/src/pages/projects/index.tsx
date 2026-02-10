import {
  IconFilter,
  IconPlus,
  IconSearch,
  IconTrendingDown,
  IconTrendingUp,
} from "@repo/icons";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Project {
  id: number;
  name: string;
  client: string;
  budget: number;
  spent: number;
  revenue: number;
  status: "ongoing" | "completed" | "on-hold";
  progress: number;
  startDate: string;
  endDate: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    client: "TechCorp Vietnam",
    budget: 500000000,
    spent: 380000000,
    revenue: 600000000,
    status: "ongoing",
    progress: 76,
    startDate: "2024-01-15",
    endDate: "2024-12-31",
  },
  {
    id: 2,
    name: "CRM System",
    client: "Sales International",
    budget: 300000000,
    spent: 280000000,
    revenue: 400000000,
    status: "completed",
    progress: 100,
    startDate: "2023-06-01",
    endDate: "2024-06-30",
  },
  {
    id: 3,
    name: "Mobile App Development",
    client: "FinanceApp Inc",
    budget: 200000000,
    spent: 160000000,
    revenue: 280000000,
    status: "ongoing",
    progress: 80,
    startDate: "2024-02-01",
    endDate: "2024-10-30",
  },
  {
    id: 4,
    name: "Data Analytics Dashboard",
    client: "Analytics Plus",
    budget: 150000000,
    spent: 75000000,
    revenue: 0,
    status: "on-hold",
    progress: 50,
    startDate: "2024-08-01",
    endDate: "2024-11-30",
  },
  {
    id: 5,
    name: "Cloud Migration",
    client: "Enterprise Solutions",
    budget: 400000000,
    spent: 390000000,
    revenue: 500000000,
    status: "completed",
    progress: 100,
    startDate: "2023-10-01",
    endDate: "2024-05-31",
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(value);
};

const statusColors = {
  ongoing: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-300",
    badge: "bg-blue-100 dark:bg-blue-900",
  },
  completed: {
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-700 dark:text-green-300",
    badge: "bg-green-100 dark:bg-green-900",
  },
  "on-hold": {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    text: "text-yellow-700 dark:text-yellow-300",
    badge: "bg-yellow-100 dark:bg-yellow-900",
  },
};

const statusLabels = {
  ongoing: "Đang thực hiện",
  completed: "Hoàn thành",
  "on-hold": "Tạm dừng",
};
const CHART_COLORS = {
  spent: "#94A3B8", // slate-400 – Chi phí (trung tính)
  revenue: "#2563EB", // blue-600 – Doanh thu
  profitPositive: "#16A34A", // green-600 – Lãi
  profitNegative: "#DC2626", // red-600 – Lỗ
  grid: "#E5E7EB", // gray-200
  axis: "#64748B", // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
};
const BUDGET_COLORS = [
  "#2563EB", // blue-600
  "#16A34A", // green-600
  "#F59E0B", // amber-500
  "#9333EA", // violet-600
  "#DC2626", // red-600
  "#0D9488", // teal-600
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "ongoing" | "completed" | "on-hold"
  >("all");

  const filteredProjects = mockProjects.filter((proj) => {
    const matchesSearch =
      proj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || proj.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const budgetPieData = filteredProjects.map((p) => ({
    name: p.name,
    value: p.budget,
  }));
  const projectProfitChart = mockProjects.map((p) => {
    const profit = p.revenue - p.spent;

    return {
      name: p.name,
      spent: p.spent,
      revenue: p.revenue,
      profit,
      status: p.status,
    };
  });
  const shortName = (name: string) =>
    name.length > 14 ? name.slice(0, 14) + "…" : name;
  const totalBudget = filteredProjects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = filteredProjects.reduce((sum, p) => sum + p.spent, 0);
  const totalRevenue = filteredProjects.reduce((sum, p) => sum + p.revenue, 0);
  const totalProfit = totalRevenue - totalSpent;

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Quản lý Dự Án</h1>
        <p className="mt-2 text-muted-foreground">
          Theo dõi chi phí, doanh thu và lợi nhuận từng dự án
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">
            Tổng Ngân Sách
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {formatCurrency(totalBudget)}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {filteredProjects.length} dự án
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">
            Tổng Chi Tiêu
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {formatCurrency(totalSpent)}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {((totalSpent / totalBudget) * 100).toFixed(1)}% ngân sách
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">
            Tổng Doanh Thu
          </p>
          <p className="mt-2 text-2xl font-bold text-secondary">
            {formatCurrency(totalRevenue)}
          </p>
          <p className="mt-2 text-xs text-secondary">
            +{formatCurrency(totalRevenue - totalSpent)}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">
            Tổng Lợi Nhuận
          </p>
          <p
            className={`mt-2 text-2xl font-bold ${totalProfit >= 0 ? "text-secondary" : "text-destructive"}`}
          >
            {formatCurrency(totalProfit)}
          </p>
          <p
            className={`mt-2 flex items-center gap-1 text-xs font-semibold ${totalProfit >= 0 ? "text-secondary" : "text-destructive"}`}
          >
            {totalProfit >= 0 ? (
              <>
                <IconTrendingUp className="h-3 w-3" />
                Lợi nhuận
              </>
            ) : (
              <>
                <IconTrendingDown className="h-3 w-3" />
                Lỗ
              </>
            )}
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Lợi Nhuận Theo Dự Án
            </h2>
            <span className="text-sm text-slate-500">
              Chi phí · Doanh thu · Lợi nhuận
            </span>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={projectProfitChart}
              barGap={8}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
              <XAxis
                dataKey="name"
                tickFormatter={shortName}
                stroke={CHART_COLORS.axis}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickFormatter={(v) => `${v / 1_000_000}tr`}
                stroke={CHART_COLORS.axis}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value) => formatCurrency(value as number)}
                contentStyle={{
                  backgroundColor: CHART_COLORS.tooltipBg,
                  border: `1px solid ${CHART_COLORS.tooltipBorder}`,
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                }}
                labelStyle={{ fontWeight: 600, color: "#0F172A" }}
              />
              <Bar
                dataKey="spent"
                name="Chi phí"
                fill={CHART_COLORS.spent}
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="revenue"
                name="Doanh thu"
                fill={CHART_COLORS.revenue}
                radius={[6, 6, 0, 0]}
              />
              <Bar dataKey="profit" name="Lợi nhuận" radius={[6, 6, 0, 0]}>
                {projectProfitChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.profit >= 0
                        ? CHART_COLORS.profitPositive
                        : CHART_COLORS.profitNegative
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Phân Bổ Ngân Sách
            </h2>
            <p className="text-sm text-slate-500">
              Tỷ trọng ngân sách theo từng dự án
            </p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={budgetPieData}
                dataKey="value"
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
                  percent && percent > 0.08 && name
                    ? `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`
                    : ""
                }
              >
                {budgetPieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={BUDGET_COLORS[index % BUDGET_COLORS.length]}
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

      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-border bg-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-64"
            />
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
            <IconFilter className="h-4 w-4" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="bg-transparent"
            >
              <option value="all">Tất cả Trạng thái</option>
              <option value="ongoing">Đang thực hiện</option>
              <option value="completed">Hoàn thành</option>
              <option value="on-hold">Tạm dừng</option>
            </select>
          </button>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
          <IconPlus className="h-4 w-4" />
          Dự Án Mới
        </button>
      </div>
      <div className="space-y-4">
        {filteredProjects.map((project) => {
          const colors = statusColors[project.status];
          const profit = project.revenue - project.spent;
          return (
            <div
              key={project.id}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    DỰ ÁN
                  </p>
                  <p className="mt-2 font-semibold text-foreground">
                    {project.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.client}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    NGÂN SÁCH / CHI TIÊU
                  </p>
                  <p className="mt-2 font-semibold text-foreground">
                    {formatCurrency(project.spent)}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    / {formatCurrency(project.budget)}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    DOANH THU
                  </p>
                  <p className="mt-2 font-semibold text-foreground">
                    {formatCurrency(project.revenue)}
                  </p>
                  <p className="mt-1 text-xs text-secondary">
                    +{((project.revenue / project.budget) * 100).toFixed(0)}%
                    ngân sách
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    LỢI NHUẬN
                  </p>
                  <p
                    className={`mt-2 font-semibold ${profit >= 0 ? "text-secondary" : "text-destructive"}`}
                  >
                    {formatCurrency(profit)}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {((profit / project.budget) * 100).toFixed(1)}% margin
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    TRẠNG THÁI
                  </p>
                  <span
                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
                  >
                    {statusLabels[project.status]}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <p className="text-xs text-muted-foreground">
                      Tiến độ: {project.progress}%
                    </p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground sm:ml-4">
                  {project.startDate} → {project.endDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
