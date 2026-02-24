import { IconShield } from "@repo/icons"
import { Card } from "@repo/ui"
import { roles } from "~/mock/user"

export const RoleBlock = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <IconShield size={24} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">Vai Trò</h2>
      </div>
      <div className="space-y-4 grid gap-4 lg:grid-cols-3">
        {roles.map((role) => (
          <Card
            key={role.name}
            className="p-4 h-full"
          >
            <h3 className="font-medium text-foreground mb-2">
              {role.name}
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Người Dùng: {role.users}</p>
              <p>Quyền: {role.permissions}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
