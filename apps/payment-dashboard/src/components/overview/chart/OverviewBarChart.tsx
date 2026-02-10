import { formatCurrency } from "@repo/utils";
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
} from "recharts";
import { annualComparison } from "~/mock/overview";

const ANNUAL_BAR_COLORS = {
  revenue: "#2563EB", // blue-600
  profit: "#16A34A",  // green-600
  grid: "#E5E7EB",    // gray-200
  axis: "#64748B",    // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}

export const OverviewBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={annualComparison} barGap={8}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={ANNUAL_BAR_COLORS.grid}
        />
        <XAxis
          dataKey="year"
          stroke={ANNUAL_BAR_COLORS.axis}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          stroke={ANNUAL_BAR_COLORS.axis}
          tick={{ fontSize: 12 }}
          tickFormatter={(v) => `${v / 1_000_000}tr`}
        />
        <Tooltip
          formatter={(value) => formatCurrency(value as number)}
          contentStyle={{
            backgroundColor: ANNUAL_BAR_COLORS.tooltipBg,
            border: `1px solid ${ANNUAL_BAR_COLORS.tooltipBorder}`,
            borderRadius: "10px",
            fontSize: "0.875rem",
          }}
          labelStyle={{ fontWeight: 600, color: "#0F172A" }}
        />
        <Bar
          dataKey="revenue"
          name="Doanh Thu"
          fill={ANNUAL_BAR_COLORS.revenue}
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="profit"
          name="Lợi Nhuận"
          fill={ANNUAL_BAR_COLORS.profit}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}