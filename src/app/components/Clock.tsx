'use client'
import { useEffect, useState } from 'react'
import Card from './Card'

export default function Clock () {
  const [date, setDate] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date()
      const index = dateNow.toLocaleTimeString().lastIndexOf(':')
      setDate(dateNow.toLocaleTimeString().slice(0, index))
    }, 1000)

    return function cleanup () { clearInterval(interval) }
  }, [])

  return (
    <Card>
      <span className='font-semibold text-8xl flex justify-between items-baseline'>{date}<small className='text-6xl'>PM</small></span>
    </Card>
  )
}
