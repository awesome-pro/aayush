import React from 'react'
import { FooterLink, footerLinks } from '@/data'
import Link from 'next/link'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import { socialLinks, SocialLink } from '@/data'
import Image from 'next/image'


function Footer() {
  return (
    <footer className='bg-slate-100 dark:bg-gray-900 p-1 text-center flex flex-col items-center justify-between'>
        <span className="bg-slate-100 dark:bg-gray-900 p-1 text-center flex gap-0 items-center justify-between w-full">
            <p className='text-xs'> &copy; 2024 GetIdea Inc.</p>
            <nav className="flex md:flex-row justify-center gap-0 md:gap-2 flex-col ">
                {footerLinks.map((link: FooterLink) => (
                    <Link href={link.href} key={link.title}>
                        <Button variant={'link'} className='text-xs'>{link.title}</Button>
                    </Link>
                ))}
            </nav>
            
            <div className='flex items-center justify-between gap-1'>
                {socialLinks.map((link: SocialLink) => (
                    
                    <Link href={link.href} key={link.icon} className='p-2 rounded-3xl hover:bg-slate-100' target='_blank'>
                        <Image src={link.icon} alt='image' width={20} height={20}/>
                    </Link>
                ))}
            </div>
        </span>
        <span className='text-xs flex'>
            Made with 💙 by <Link href={'https://abhinandan-v.vercel.app/'} target='_blank' className='hover:text-primary hover:underline ml-1'>Abhinandan</Link>
                <ThemeToggle/>
        </span>
    </footer>
  )
}

export default Footer