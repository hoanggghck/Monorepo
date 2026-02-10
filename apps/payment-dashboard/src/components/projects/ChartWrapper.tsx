import { cn } from "@repo/ui"
import type { PropsWithChildren } from "react"

type ChartWrapperProps = PropsWithChildren<{
  title: string
  subtitle?: string
  className: string
}>

export const ChartWrapper = ({
  title,
  subtitle,
  className,
  children,
}: ChartWrapperProps) => {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white p-6 shadow-sm', className)}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <span className="text-sm text-slate-500">
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
