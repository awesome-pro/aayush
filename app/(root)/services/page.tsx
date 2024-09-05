import ServiceCard from '@/components/service-card'
import { servisesList } from '@/data'
import React from 'react'

function Services() {
  return (
    <div className=''>
        <h1 className='text-4xl font-bold text-center text-primary'>Our Services</h1>
        <section className='min-h-screen p-3 md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
        {
            servisesList.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} href={service.href} image={service.image}/>
            ))
        }
        </section>
    </div>
  )
}

export default Services