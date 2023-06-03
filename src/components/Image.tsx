import { BiImageAlt } from 'react-icons/bi'
import Card from './Card'

export default function Image () {
  return (
    <Card className='text-xl animate-fade-left animate-once animate-delay-150'>
      <BiImageAlt />
    </Card>
  )
}
