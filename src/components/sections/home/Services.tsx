import ServiceCard from '@/components/cards/ServiceCard'
import React from 'react'

const Services = () => {
  const serviceData = [
    {
      number: "01",
      title: "Strategy & Audit",
      description: "Data-driven roadmaps designed to identify growth opportunities and define your brand's digital trajectory."
    },
    {
      number: "02",
      title: "Design Systems",
      description: "Scalable visual languages that balance aesthetic sophistication with functional performance."
    },
    {
      number: "03",
      title: "Performance Marketing",
      description: "Surgical marketing execution focused on high-conversion funnels and measurable brand impact."
    },
    {
      number: "04",
      title: "Social Architecture",
      description: "Developing strategies to grow your presence and engage with your target audience across digital ecosystems."
    }
  ];

  return (
    <div className='bg-[#1A0A07] p-8 md:p-24 flex flex-col items-start'>
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#712C1D]/30 pb-12">
            <div className="max-w-2xl">
                <h5 className="text-[#1D6171] font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">
                  Capabilities
                </h5>
                <h2 className='text-5xl md:text-7xl font-black text-[#EEE5CA] uppercase tracking-tighter leading-[0.9]'>
                  Sustainable <br /> Digital Solutions
                </h2>
            </div>
            <p className="text-[#EEE5CA]/40 text-sm max-w-xs text-right hidden lg:block">
              Merging technical precision with creative endurance to solve complex digital challenges.
            </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 w-full'>
            {serviceData.map((service, index) => (
                <ServiceCard 
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
            ))}
        </div>

        {/* Bottom Decorative Branding */}
        <div className="w-full mt-20 flex justify-center opacity-10">
            <span className="text-[#EEE5CA] font-black text-[12vw] uppercase leading-none select-none">
              Capabilities
            </span>
        </div>
    </div>
  )
}

export default Services