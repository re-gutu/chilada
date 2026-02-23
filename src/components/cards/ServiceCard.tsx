import React from 'react'

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

const ServiceCard = ({ number, title, description }: ServiceCardProps) => {
  return (
    <div className='group relative bg-transparent border-t border-hero-subtle p-9 w-full min-h-[280px] flex flex-col gap-4 justify-end transition-all duration-500 hover:bg-primary/5'>
      
      {/* Index Number - The 10% Teal Accent */}
      <span className="absolute top-9 left-9 font-mono text-secondary text-xs font-bold tracking-widest uppercase">
        {number}
      </span>

      {/* Decorative Corner Hook (Visible on Hover) */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-secondary border-l-[20px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <h3 className='text-3xl font-black text-hero uppercase tracking-tighter leading-none'>
        {title}
      </h3>
      
      <p className='text-hero text-sm leading-relaxed max-w-[400px] opacity-50'>
        {description}
      </p>

      {/* Subtle Bottom Bar */}
      <div className="w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full" />
    </div>
  )
}

export default ServiceCard