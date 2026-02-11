import { Card } from "@repo/ui";
import { formatCurrency } from "@repo/utils"
import type { PropsWithChildren } from "react";

type CompProps = PropsWithChildren<{
  title: string;
  amount: number;
}>

export const CardDetail = ({title, amount, children}: CompProps) => {
  return (
    <Card className="p-6">
      <p className="text-sm font-medium text-muted-foreground">
        {title}
      </p>
      <p className="mt-2 text-2xl font-bold text-foreground">
        {formatCurrency(amount)}
      </p>
      {children}
    </Card>
  )
}