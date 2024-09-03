import { SignIn, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-between bg-black bg-[url("/images/d3.jpg")] bg-cover bg-center gap-0'>
        <span className='w-full '>
          <Link href='/'>
            <Image src='/logo.png' width={80} height={80} alt='logo' className='hover:z-20'/>
          </Link>  
        </span>
        <div className='w-screen flex items-center justify-around'>
          <SignIn />
          <span className='w-32'>

          </span>
        </div>
        <span className='flex gap-2 text-slate-300 text-xs   mb-5'>
          <Link href='/privacy' className='hover:underline hover:text-white'>
            Privacy
          </Link>
          <Link href='/contact' className='hover:underline hover:text-white'>
           Contact
          </Link>
        </span>
    </div>
  )
}