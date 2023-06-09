import Image from 'next/image'
import bg from '../../public/bg.jpg'
import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from '@/providers/session-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Home page for browsers.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='overflow-hidden'>
      <body className={inter.className}>
        <main className='min-h-screen min-w-full relative overflow-hidden'>
          <NextAuthProvider>{children}</NextAuthProvider>
          <Image src={bg} blurDataURL={bg.blurDataURL} alt='Background Image' className='absolute z-0 object-cover min-w-full h-full inset-0' />
        </main>
      </body>
    </html>
  )
}
