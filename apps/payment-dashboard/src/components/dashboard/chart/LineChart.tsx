import { formatCurrency } from "@repo/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartData } from "~/mock/dashboard";

export const LineChartRevenueExpenses = () => {
  return (
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
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#22c55e"
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#ef4444"
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            padding: "8px 12px",
          }}
          labelStyle={{
            color: "hsl(var(--foreground))",
            fontWeight: 600,
            marginBottom: 4,
          }}
          itemStyle={{
            color: "hsl(var(--foreground))",
          }}
          formatter={(value, name) => {
            const labelMap: Record<string, string> = {
              revenue: "Doanh thu",
              expense: "Chi phí",
            };

            return [
              formatCurrency(value as number),
              labelMap[name as string] ?? name,
            ];
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}