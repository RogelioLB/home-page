import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET () {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (session == null) return NextResponse.json({ auth: false, message: 'No has iniciado session' })
  const res = await fetch(`https://api.github.com/users/${session?.user?.name}`)
  const data = await res.json()
  const resStarred = await fetch(`https://api.github.com/users/${session.user?.name}/starred`)
  const dataStarred = await resStarred.json()
  const repos = data.public_repos
  return NextResponse.json({
    repos,
    stars: dataStarred.length
  })
}
