import { getServerSession } from 'next-auth'
import Clock from '../components/Clock'
import Favorites from '../components/Favorites'
import Image from '../components/Image'
import News from '../components/News'
import Profile from '../components/Profile'
import Wheater from '../components/Weather'
import { authOptions } from '@/lib/auth'

export default async function Home () {
  const session = await getServerSession(authOptions)

  return (
    <div className='p-8 z-10 min-h-screen relative flex-col flex gap-8 max-w-[1440px] mx-auto'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-8'>
          <Clock />
          <Profile user={session?.user} />
        </div>
        <Wheater />
      </div>
      <div className='flex gap-8 flex-1'>
        <News />
        <Favorites />
        <div className='flex flex-col justify-end'>
          <Image />
        </div>
      </div>
    </div>
  )
}
