import Card from './Card'
import perfil from '../../../public/perfil.jpg'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

export default function Profile () {
  return (
    <Card>
      <div className='flex gap-4'>
        <Image src={perfil} alt='Imagen perfil' width={168} height={168} className='rounded-full' />
        <div className='p-4 flex flex-col gap-4'>
          <h2 className='text-4xl'>RogelioLB</h2>
          <p className='flex gap-4 text-2xl items-center'><AiFillStar className='text-yellow-300' /><span className='font-light'>1 estrella</span></p>
        </div>
      </div>
    </Card>
  )
}
