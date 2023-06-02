'use client'

import { Weather } from '@/types/types'
import { useEffect, useState } from 'react'

export default function useWeather () {
  const [weather, setWeather] = useState<Weather>()
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { coords: { latitude, longitude } } = position
      setLoading(true)
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&lang=es`)
      const data: Weather = await res.json()
      console.log(data)
      setWeather(data)
      setLoading(false)
    }, (err) => {
      if (err.code === err.PERMISSION_DENIED) setErr('Permiso denegado')
    })
  }, [])

  return { weather, loading, err }
}
