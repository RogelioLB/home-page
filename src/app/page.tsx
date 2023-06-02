import Card from './components/Card'
import Clock from './components/Clock'
import Profile from './components/Profile'
import Wheater from './components/Weather'

export default function Home () {
  return (
    <div className='p-8 z-10 min-h-full relative flex-col flex gap-8'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-8'>
          <Clock />
          <Profile />
        </div>
        <Wheater />
      </div>
      <div className='flex gap-8'>
        <Card>Noticias</Card>
      </div>
    </div>
  )
}
