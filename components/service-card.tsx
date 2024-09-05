"use client";

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
  
export interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    image: string;
}

function ServiceCard({title, description, href, image} : ServiceCardProps) {

    const router = useRouter();
  return (
    <Card onClick={() => router.push(href)} className={cn("max-w-[420px] cursor-pointer overflow-hidden bg-cover bg-opacity-50 hover:z-20 hover:shadow-lg text-primary")} style={{ backgroundImage: `url(${image})` }}>
            <CardHeader className='z-550'>
                <CardTitle className='font-bold lg:text-4xl '>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='text-4xl lg:text-4xl'>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
    </Card>
  )
}

export default ServiceCard