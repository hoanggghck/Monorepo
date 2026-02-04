import type { User } from '@repo/types'

export function getUserLabel(user: User) {
  return `${user.id} - ${user.name}`
}
