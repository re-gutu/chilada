import Clients from '@/components/sections/home/Clients'
import Hero from '@/components/sections/home/Hero'
import Showreel from '@/components/sections/home/Showreel'
import React from 'react'

const HomeView = () => {
  return (
    <div className='relative w-full'>
        <Hero />
        <Showreel />
        <Clients />
    </div>
  )
}

export default HomeView