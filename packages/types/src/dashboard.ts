export interface StatCardI<TIcon = unknown> {
  title: string
  value: string | number
  change?: string
  trend?: "up" | "down"
  link?: string
  icon: TIcon
}

export interface ActivityLogI {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
}