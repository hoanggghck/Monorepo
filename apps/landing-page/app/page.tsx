import { getUserLabel } from '@repo/utils'
import type { User } from '@repo/types'

export default function Home() {
  const user: User = {
    id: 1,
    name: 'Landing Page'
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Monorepo Ready 🚀</h1>
      <p className="mt-4">{getUserLabel(user)}</p>
    </main>
  )
}
