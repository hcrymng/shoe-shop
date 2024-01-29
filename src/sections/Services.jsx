import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap gap-9 justify-center'>

{services.map(()=> (

  <ServiceCard key={services.label} {...services} />
))}

    </section>
  )
}

export default Services
