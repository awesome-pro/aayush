import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-between bg-[url("/image.png")] bg-cover bg-center'>
      <span className='w-full '>
          <Link href='/'>
            <Image src='/logo.svg' width={100} height={100} alt='logo' className='hover:z-20'/>
          </Link>  
        </span>
        <SignUp />
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