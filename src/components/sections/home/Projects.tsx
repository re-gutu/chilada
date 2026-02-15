'use client'

import ProjectCard, { type ProjectCardProps } from '@/components/cards/ProjectCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef, useCallback } from 'react'

const projects: ProjectCardProps[] = [
  {
    category: 'Hospitality',
    title: 'Project Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['Digital Marketing', 'Photography & Visual Production'],
    href: '#',
  },
  {
    category: 'Retail',
    title: 'Brand Refresh',
    description:
      'A full brand identity and digital experience for a growing retailer.',
    tags: ['Branding', 'Web Design', 'Strategy'],
    href: '#',
  },
  {
    category: 'Technology',
    title: 'Product Launch',
    description:
      'End-to-end campaign and product site for a new software platform.',
    tags: ['Digital Marketing', 'UX', 'Content'],
    href: '#',
  },
  {
    category: 'Hospitality',
    title: 'Project Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['Digital Marketing', 'Photography & Visual Production'],
    href: '#',
  },
]

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByCard = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>('[data-project-card]')
    const cardWidth = firstCard?.offsetWidth ?? el.clientWidth
    const amount = direction === 'right' ? cardWidth : -cardWidth
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }, [])

  return (
    <div className='py-24 px-24 flex flex-col'>
      <h5>Featured Projects</h5>
      <h2 className='pt-4'>Results you can feel</h2>
      <p className='pt-8 text-muted-foreground w-2/3'>
        We believe in work that's not just built to function, but built to shift
        brand perception, elevate experience, and drive measurable results.
        That's the standard we create for.
      </p>
      <div
        ref={scrollRef}
        className='pt-16 flex gap-16 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide'
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <div className='pt-12 flex justify-end gap-4'>
        <button
          type='button'
          onClick={() => scrollByCard('left')}
          className='p-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
          aria-label='Previous project'
        >
          <ChevronLeft className='size-6' />
        </button>
        <button
          type='button'
          onClick={() => scrollByCard('right')}
          className='p-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
          aria-label='Next project'
        >
          <ChevronRight className='size-6' />
        </button>
      </div>
    </div>
  )
}

export default Projects
