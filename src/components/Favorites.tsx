import Card from './Card'
import { BsBookmarkFill, BsPlusCircle } from 'react-icons/bs'

export default function Favorites () {
  return (
    <Card className='animate-once animate-fade-down animate-delay-300'>
      <h4 className='font-regular flex gap-2 items-center'><BsBookmarkFill /> Marcadores <BsPlusCircle /></h4>
    </Card>
  )
}
