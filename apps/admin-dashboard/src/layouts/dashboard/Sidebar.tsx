import { Link, useLocation } from "react-router-dom"
import { SIDEBAR_ITEMS } from "./listSidebar"
import { cn } from "@repo/ui/utils";
import { Button } from "@repo/ui";
import { IconX } from "@repo/icons";
import { useTheme } from "~/provider/theme-provider";

interface SidebarProps {
  open: boolean
  setOpen: (v: boolean) => void
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { toggleTheme } = useTheme();
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out z-40 overflow-y-auto",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:translate-x-0 lg:z-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-sidebar-border flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <p className="text-white font-bold text-xs">Goldz</p>
              </div>
              <div>
                <h2 className="font-bold text-sidebar-foreground text-lg">
                  AdminHub
                </h2>
                <p className="text-xs text-sidebar-foreground/60">
                  Cổng Thông Tin HR
                </p>
              </div>
            </div>
            <Button
              className="lg:hidden"
              onClick={() => setOpen(false)}
              size={"icon"}
            >
              <IconX />
            </Button>
          </div>
          <nav className="flex-1 px-3 py-6 space-y-2">
            {SIDEBAR_ITEMS.map((item, index) => (
              <SidebarItem key={index} item={item} setOpen={setOpen} />
            ))}
          </nav>
          <div className="p-4 border-t border-sidebar-border space-y-3">
            <div className="px-4 py-3 bg-sidebar-accent rounded-lg">
              <p className="text-sm font-medium text-sidebar-accent-foreground">
                Người Dùng Quản Trị
              </p>
              <p className="text-xs text-sidebar-accent-foreground/70">
                system@company.com
              </p>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={toggleTheme}
            >
              <span>Đăng Xuất</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

const SidebarItem = ({ item, setOpen }: { item: any, setOpen: (v: boolean) => void })=> {
  const Icon = item.icon ? item.icon : () => null;
  const location = useLocation();

  const active = location.pathname === item.path || location.pathname.startsWith(item.path + "/");

  return (
    <Link
      key={item.path}
      to={item.path ?? ""}
      onClick={() => setOpen(false)}
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
