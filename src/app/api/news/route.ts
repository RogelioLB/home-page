import { NewsResponse } from '@/types/types'
import { NextResponse } from 'next/server'

export async function GET () {
  const res = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&apikey=${process.env.NEWS_API_KEY}&lang=en`)
  const data: NewsResponse = await res.json()
  return NextResponse.json(data)
}
