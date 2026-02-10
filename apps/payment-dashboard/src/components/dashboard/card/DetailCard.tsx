import { IconArrowDownRight, IconArrowUpRight, IconDollarSign, IconUsers } from "@repo/icons"
import type { DashboardDetailI } from "@repo/types"
import { Card, cn } from "@repo/ui"
import { formatCurrency } from "@repo/utils"

const IconWrapper = ({data} : { data: DashboardDetailI }) => {
  return (
    <div className={cn("rounded-lg p-3", data.bg)}>
      {{
        'dollar': <IconDollarSign className="h-6 w-6 text-secondary" />,
        'trending' : data.up ? <IconArrowUpRight className="h-6 w-6 text-success" /> : <IconArrowDownRight className="h-6 w-6 text-error" />,
        'user': <IconUsers className="h-6 w-6 text-primary" />
      }[data.sign]}
    </div>
  )
}

export const DetailCard = ({data}: {data: DashboardDetailI}) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{data.title}</p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {data.price ? formatCurrency(data.price) : data.count}
          </p>
          <p className={cn("mt-2 flex items-center gap-1 text-xs font-semibold", data.up ? "text-success" : "text-error" )}>
            { data.up ?
              <IconArrowUpRight className="h-3 w-3" />
              : <IconArrowDownRight className="h-3 w-3" />
            }
            {data.msg}
          </p>
        </div>
        <IconWrapper data={data} />
      </div>
    </Card>
  )
}