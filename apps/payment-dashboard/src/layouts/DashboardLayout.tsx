import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./dashboard/Sidebar"
import { IconMenu } from "@repo/icons"

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex lg:h-screen bg-background">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-1 shadow-sm flex items-center justify-between gap-4 border-b border-border px-4 h-14 lg:hidden bg-background">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <IconMenu size={20} />
          </button>
          <h2 className="font-bold text-primary text-lg">
            FinanceHub
          </h2>
        </header>
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
