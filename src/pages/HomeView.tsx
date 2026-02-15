import About from '@/components/sections/home/About'
import Clients from '@/components/sections/home/Clients'
import Hero from '@/components/sections/home/Hero'
import Projects from '@/components/sections/home/Projects'
import Services from '@/components/sections/home/Services'
import Showreel from '@/components/sections/home/Showreel'

const HomeView = () => {
  return (
    <main className='relative w-full'>
        <Hero />
        <Showreel />
        {/* <Clients /> */}
        <About />
        <Services />
        <Projects />
    </main>
  )
}

export default HomeView