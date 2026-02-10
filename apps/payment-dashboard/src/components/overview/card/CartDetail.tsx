import { Card } from "@repo/ui";
import type { PropsWithChildren } from "react";

type CompProps = PropsWithChildren<{
  title: string;
  subTitle: string;
}>

export const CartDetail = ({title, subTitle, children}: CompProps) => {
  return (
    <Card className="p-6">
      <p className="text-xs font-medium text-muted-foreground uppercase">
        {title}
      </p>
      <p className="mt-2 text-2xl font-bold text-foreground">
        {subTitle}
      </p>
      {children}
    </Card>
  )
}