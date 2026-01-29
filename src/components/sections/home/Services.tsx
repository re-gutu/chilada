import ServiceCard from '@/components/cards/ServiceCard'
import React from 'react'

const Services = () => {
  return (
    <div className='p-24 flex flex-col items-center'>
        <h5>our services</h5>
        <h2 className='pt-4'>Sustainable Digital Solutions</h2>
        <div className='grid grid-cols-2 gap-x-24 gap-y-12 pt-20'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>
  )
}

export default Services