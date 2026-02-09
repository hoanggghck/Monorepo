import type { StatCardI } from "@repo/types";
import { Card } from "@repo/ui";

export const StatCard = ({ stat }: { stat: StatCardI<React.ReactNode> }) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gray-100 rounded-lg">{stat.icon}</div>
        {stat.trend && (
          <div
            className={`flex items-center gap-1 text-sm font-semibold ${
              stat.trend === "up" ? "text-success" : "text-destructive"
            }`}
          >
            {stat.trend === "up" ? "↑" : "↓"}
            {stat.trend === "up" ? "12%" : "8%"}
          </div>
        )}
      </div>
      <h3 className="text-muted-foreground text-sm font-medium mb-2">
        {stat.title}
      </h3>
      <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
      <p className="text-xs text-muted-foreground">{stat.change}</p>
    </Card>
  );
};
