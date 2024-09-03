import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen'>
        <Image src='/images/404.png' width={300} height={300} alt='404' />
        <h2 className='text-6xl text-destructive font-sans '>404</h2>
        <h1 className='text-3xl font-bold'>Sorry, We don&apos;t have any idea :(</h1>
        <Link href='/'>
            <Button>Go back to home</Button>
        </Link>
    </div>
  )
}

export default NotFound