import { formatCurrency } from "@repo/utils";
import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { expenseBreakdown } from "~/mock/analyctics";

const EXPENSE_PIE_COLORS = [
  "#2563EB", // blue
  "#16A34A", // green
  "#F59E0B", // amber
  "#9333EA", // violet
  "#DC2626", // red
  "#0D9488", // teal
]

export const AnalyticsPieChart = () => {
  return (
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
            percent && name ? `${name} ${(percent * 100).toFixed(0)}%` : ""
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
  );
};
