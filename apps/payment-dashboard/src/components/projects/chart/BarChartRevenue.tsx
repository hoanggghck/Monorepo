import { formatCurrency } from "@repo/utils";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"
import { mockProjects } from "~/mock/projects";

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

export const BarChartRevenue = () => {
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

  const shortName = (name: string) => name.length > 14 ? name.slice(0, 14) + "…" : name;
  
  return (
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
  )
}