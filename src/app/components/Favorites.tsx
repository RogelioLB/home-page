import Card from './Card'
import { BsBookmarkFill } from 'react-icons/bs'

export default function Favorites () {
  return (
    <Card>
      <h4 className='font-regular flex gap-2 items-center'><BsBookmarkFill /> Marcadores</h4>
    </Card>
  )
}
