import { formatCurrency } from "@repo/utils"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { mockProjects } from "~/mock/projects";

const BUDGET_COLORS = [
  "#2563EB", // blue-600
  "#16A34A", // green-600
  "#F59E0B", // amber-500
  "#9333EA", // violet-600
  "#DC2626", // red-600
  "#0D9488", // teal-600
];

export const PieChartPercent = () => {

  const budgetPieData = mockProjects.map((p) => ({
    name: p.name,
    value: p.budget,
  }));

  return (
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
  )
}