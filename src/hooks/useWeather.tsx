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
      console.log(position)
      setLoading(true)
      const res = await fetch(`${window.location.origin}/api/weather?lat=${latitude}&lon=${longitude}`)
      const data: Weather = await res.json()
      setWeather(data)
      setLoading(false)
    }, (err) => {
      if (err.code === err.PERMISSION_DENIED) setErr('Permiso denegado')
    })
  }, [])

  return { weather, loading, err }
}
