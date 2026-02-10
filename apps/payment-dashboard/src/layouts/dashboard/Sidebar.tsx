import { Link, useLocation } from "react-router-dom"
import { cn } from "@repo/ui/utils";
import { Button } from "@repo/ui";
import { IconLogOut } from "@repo/icons";
import { useTheme } from "../../../../payment-dashboard/src/provider/theme-provider";
import { SIDEBAR_ITEMS } from "./listSidebar";

export default function Sidebar() {
  const { toggleTheme } = useTheme();
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out z-40 lg:z-0 lg:static lg:translate-x-0 -translate-x-full",
      )}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <p className="text-white font-bold text-xs">Goldz</p>
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground text-lg">FinanceHub</h1>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-2">
          {SIDEBAR_ITEMS.map((item, index) => <SidebarItem key={index} item={item} />)}
        </nav>
        <div className="p-4 border-t border-sidebar-border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              H
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-sidebar-foreground">Hoang Duy</p>
              <p className="text-xs text-gray-100 capitalize">Kế toán</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={toggleTheme}
          >
            <IconLogOut size={20} />
            <span>Đăng Xuất</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}

function SidebarItem({ item }: { item: any }) {
  const Icon = item.icon ? item.icon : () => null;
  const location = useLocation();
  
  const active = location.pathname === item.path || location.pathname.startsWith(item.path + "/");

  return (
    <Link
      key={item.path}
      to={item.path ?? ""}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200",
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent"
      )}
    >
      <Icon size={20} />
      <span className="font-medium text-sm">{item.label}</span>
    </Link>
  );
}
