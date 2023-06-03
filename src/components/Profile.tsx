'use client'
import { signIn } from 'next-auth/react'
import Card from './Card'
import Image from 'next/image'
import { AiFillGithub, AiFillStar } from 'react-icons/ai'
import { FaBookmark } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Profile ({ user }: { user?: { email?: string | null, name?: string | null, image?: string | null } }) {
  const [userData, setUserData] = useState<{ repos: number, stars: number }>()
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://homepage-browser.vercel.app/api/user')
      const data = await res.json()
      setUserData(data)
    }
    getData()
  }, [])
  const handleLogin = async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' })
  }
  return (
    <Card className='animate-fade-right animate-once animate-delay-150'>
      {(user != null)
        ? <div className='flex gap-4 items-center'>
          <div className='rounded-full w-28 aspect-square relative overflow-hidden'>
            <Image src={user?.image as string} alt='Imagen perfil' className='object-cover' fill />
          </div>
          <div className='p-1 flex flex-col gap-2'>
            <h2 className='text-2xl'>{user?.name}</h2>
            {
              (userData != null) && <div className='flex flex-col'>
                <p className='flex gap-4 text-2xl items-center animate-once animate-fade-right'><AiFillStar className='text-yellow-300' /><span className='font-light'> {userData.stars} estrellas</span></p>
                <p className='flex gap-4 text-2xl items-center animate-once animate-fade-right animate-delay-100'><FaBookmark className='text-slate-100' /><span className='font-light'> {userData.repos} repositorios</span></p>
              </div>
            }
          </div>
        </div>
        : <button onClick={async () => await handleLogin('github')} className='bg-black border-slate-500 rounded-lg px-3 py-4 capitalize font-bold text-gray-50 flex gap-3 items-center'>
          <AiFillGithub /> Iniciar sesión
        </button>}
    </Card>
  )
}
