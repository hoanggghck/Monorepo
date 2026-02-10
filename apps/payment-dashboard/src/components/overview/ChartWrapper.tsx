import { Card, cn } from "@repo/ui"
import type { PropsWithChildren } from "react"

type ChartWrapperProps = PropsWithChildren<{
  title: string
  className?: string
}>

export const ChartWrapper = ({
  title,
  className,
  children,
}: ChartWrapperProps) => {
  return (
    <Card className={cn("p-6", className)}>
      <h2 className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <div className="mt-4">
        {children}
      </div>
    </Card>
  )
}
