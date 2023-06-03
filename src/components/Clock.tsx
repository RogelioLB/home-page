'use client'
import { useEffect, useState } from 'react'
import Card from './Card'

export default function Clock () {
  const [date, setDate] = useState(new Date().toLocaleTimeString().slice(0, 5))

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date()
      setDate(dateNow.toLocaleTimeString().slice(0, 5))
    }, 1000)

    return function cleanup () { clearInterval(interval) }
  }, [])

  return (
    <Card className='animate-fade-right animate-once'>
      <span className='font-semibold text-5xl flex justify-center gap-4 items-baseline'>{date}</span>
    </Card>
  )
}
