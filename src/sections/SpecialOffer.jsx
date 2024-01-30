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
  <h2 className="mt-10 font-palanquin 
text-4xl max-sm:text-[72px] max-sm:leading-[70] font-bold text-coral-red">Süper İndirim</h2>
  <p className='mt-4 lg:max-w-lg info-text'>Premium konfor ve stil sağlamak için titizlikle tasarlanmış ayakkabılarımız, deneyiminizi yükseltmek üzere tasarlanmıştır ve size eşsiz kalite, yenilik ve biraz da zarafet sunar. Her adımda rahatlığı ve şıklığı hissetmek için tasarlanmış olan ayakkabılarımız, her detayıyla özenle üretilmiştir.</p>
  <p className='info-text mt-3 lg:max-w-lg'>Kalite ve şıklığı bir arada sunan ayakkabılarımız, tarzınızı tamamlayacak ve her adımda kendinizi özel hissetmenizi sağlayacak. Bu ayakkabılarla her adımınızda kendinizi özel ve özgün hissedeceksiniz.</p>
  <div className='mt-11 flex justify-start items-center gap-10'><Button label="Staın Al" iconURL={arrowRight} /> <Button label="Daha fazla"  bgColor="bg-white" borderColor="border-slate-gray" textColor={"text-slate-gray"}/></div> 
</div>
    </section>
  )
}

export default SpecialOffer
