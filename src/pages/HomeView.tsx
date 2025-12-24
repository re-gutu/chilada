import Hero from '@/components/sections/home/Hero'
import Showreel from '@/components/sections/home/Showreel'
import React from 'react'

const HomeView = () => {
  return (
    <div className='relative w-full'>
        <Hero />
        <Showreel />
    </div>
  )
}

export default HomeView