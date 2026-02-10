import { formatCurrency } from "@repo/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlyData } from "~/mock/analyctics";

const FINANCE_COLORS = {
  revenue: "#2563EB",   // blue-600
  expense: "#DC2626",   // red-600
  grid: "#E5E7EB",      // gray-200
  axis: "#64748B",      // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}

export const AnalyticsBarChart = () => {
  return (
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
  )
}