import { ReactNode } from 'react'

export default function Card ({
  children,
  className
}:
{
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`${className ?? ''} bg-black bg-opacity-25 backdrop-blur-sm p-6 rounded`}>
      {children}
    </div>
  )
}
