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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { monthlyData } from "~/mock/analyctics";

const LINE_CHART_COLORS = {
  revenue: "#2563EB", // blue-600 – Doanh thu
  profit: "#16A34A", // green-600 – Lợi nhuận
  grid: "#E5E7EB", // gray-200
  axis: "#64748B", // slate-500
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E7EB",
};

export const AnalyticsLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" stroke={LINE_CHART_COLORS.grid} />
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
  );
};
