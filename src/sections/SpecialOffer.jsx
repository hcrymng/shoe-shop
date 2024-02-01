import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'> 
      <img src={offer} width={770} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
  px
  <p className='info-text mt-3 lg:max-w-lg'>Kalite ve şıklığı bir arada sunan ayakkabılarımız, tarzınızı tamamlayacak ve her adımda kendinizi özel hissetmenizi sağlayacak. Bu ayakkabılarla her adımınızda kendinizi özel ve özgün hissedeceksiniz.</p>
  <div className='mt-11 flex justify-start items-center gap-10'><Button label="Staın Al" iconURL={arrowRight} /> <Button label="Daha fazla"  bgColor="bg-white" borderColor="border-slate-gray" textColor={"text-slate-gray"}/></div> 
</div>
    </section>
  )
}

export default SpecialOffer
