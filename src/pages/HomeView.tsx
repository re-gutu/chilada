import About from '@/components/sections/home/About'
import Clients from '@/components/sections/home/Clients'
import Hero from '@/components/sections/home/Hero'
import Showreel from '@/components/sections/home/Showreel'
import React from 'react'

const HomeView = () => {
  return (
    <main className='relative w-full'>
        <Hero />
        <Showreel />
        <Clients />
        <About />
    </main>
  )
}

export default HomeView