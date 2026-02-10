import { Card } from "@repo/ui"
import { formatCurrency } from "@repo/utils"
import { balanceSheet } from "~/mock/overview"

export const CardAsset = ({totalAssets} : {totalAssets: number}) => {
  
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">TÀI SẢN</h2>
        <p className="text-lg font-bold text-foreground">
          {formatCurrency(totalAssets)}
        </p>
      </div>
      <div className="space-y-4">
        {balanceSheet.assets.map((category, idx) => (
          <div key={idx}>
            <p className="text-sm font-semibold text-primary mb-2">
              {category.category}
            </p>
            <div className="space-y-2">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between text-sm">
                  <p className="text-muted-foreground">{item.name}</p>
                  <p className="font-medium text-foreground">
                    {formatCurrency(item.value)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export const CardLiabilities = ({totalLiabilities} : {totalLiabilities: number}) => {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">NỢ</h2>
        <p className="text-lg font-bold text-destructive">
          {formatCurrency(totalLiabilities)}
        </p>
      </div>
      <div className="space-y-4">
        {balanceSheet.liabilities.map((category, idx) => (
          <div key={idx}>
            <p className="text-sm font-semibold text-destructive mb-2">
              {category.category}
            </p>
            <div className="space-y-2">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between text-sm">
                  <p className="text-muted-foreground">{item.name}</p>
                  <p className="font-medium text-foreground">
                    {formatCurrency(item.value)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export const CardOwner = ({totalEquity, totalLiabilities, totalAssets} : {totalEquity: number, totalLiabilities: number, totalAssets: number}) => {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          VỐN CHỦ SỞ HỮU
        </h2>
        <p className="text-lg font-bold text-secondary">
          {formatCurrency(totalEquity)}
        </p>
      </div>
      <div className="space-y-4">
        {balanceSheet.equity.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <p className="text-sm text-muted-foreground">{item.name}</p>
            <p className="text-sm font-medium text-foreground">
              {formatCurrency(item.value)}
            </p>
          </div>
        ))}
        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">Kiểm tra:</p>
          <p className="text-sm text-muted-foreground">
            Nợ + Vốn = {formatCurrency(totalLiabilities + totalEquity)}
          </p>
          <p className="text-sm text-muted-foreground">
            Tài sản = {formatCurrency(totalAssets)}
          </p>
          <p
            className={`mt-2 text-xs font-semibold ${totalAssets === totalLiabilities + totalEquity ? "text-secondary" : "text-destructive"}`}
          >
            {totalAssets === totalLiabilities + totalEquity
              ? "✓ Cân bằng"
              : "✗ Không cân bằng"}
          </p>
        </div>
      </div>
    </Card>
  )
}