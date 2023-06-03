'use client'
import Card from './Card'
import Image from 'next/image'
import useWeather from '@/hooks/useWeather'
import { icons } from '@/icon'
import Loader from './Loader'

export default function Weather () {
  const { weather, loading } = useWeather()
  return (
    <Card className='flex-1 flex items-baseline justify-between flex-col relative w-full animate-fade-left animate-once'>
      {loading && (<Loader />)}
      {!loading && (
        <>
          <div className='flex gap-4 items-center'>
            <Image src={icons[weather?.weather[0]?.icon ?? ''] ?? icons['']} width={136} height={136} alt='Weather cloud' />
            <span className='text-8xl font-semibold'>{weather?.main.temp.toFixed(0)}°C</span>
          </div>
          <span className='font-thin text-4xl capitalize'>{weather?.weather[0].description}</span>
          <span className='text-xl font-normal -rotate-90 absolute -right-8 top-12'>{weather?.name}</span>
        </>
      )}
    </Card>
  )
}
