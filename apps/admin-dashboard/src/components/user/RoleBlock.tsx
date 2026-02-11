import { IconShield } from "@repo/icons"
import { Card } from "@repo/ui"
import { roles } from "~/mock/user"

export const RoleBlock = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <IconShield size={24} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">Vai Trò</h2>
      </div>
      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className="p-4 border border-border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <h3 className="font-medium text-foreground mb-2">
              {role.name}
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Người Dùng: {role.users}</p>
              <p>Quyền: {role.permissions}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}