import { formatCurrency } from "@repo/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { quarterlyData } from "~/mock/overview";

const QUARTER_LINE_COLORS = {
  revenue: "#2563EB",      // blue-600 – Doanh thu
  profit: "#16A34A",       // green-600 – Lợi nhuận
  grid: "#E5E7EB",         // gray-200
  axis: "#64748B",         // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
}

export const OverviewLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={quarterlyData}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={QUARTER_LINE_COLORS.grid}
        />
        <XAxis
          dataKey="quarter"
          stroke={QUARTER_LINE_COLORS.axis}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          stroke={QUARTER_LINE_COLORS.axis}
          tick={{ fontSize: 12 }}
          tickFormatter={(v) => `${v / 1_000_000}tr`}
        />
        <Tooltip
          formatter={(value) => formatCurrency(value as number)}
          contentStyle={{
            backgroundColor: QUARTER_LINE_COLORS.tooltipBg,
            border: `1px solid ${QUARTER_LINE_COLORS.tooltipBorder}`,
            borderRadius: "10px",
            fontSize: "0.875rem",
          }}
          labelStyle={{ fontWeight: 600, color: "#0F172A" }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Doanh Thu"
          stroke={QUARTER_LINE_COLORS.revenue}
          strokeWidth={2.5}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="profit"
          name="Lợi Nhuận"
          stroke={QUARTER_LINE_COLORS.profit}
          strokeWidth={2.5}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
