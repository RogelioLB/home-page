import { Weather } from '@/types/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest) {
  const params = req.nextUrl.searchParams
  const lat = params.get('lat')
  const lon = params.get('lon')
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric&lang=es`)
  const data: Weather = await res.json()
  return NextResponse.json(data)
}
