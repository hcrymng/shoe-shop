import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
   <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
<div className='flex flex-1 flex-col'>
  <h2 className="mt-10 font-palanquin 
text-4xl max-sm:text-[72px] max-sm:leading-[70px] font-bold"><span className='text-coral-red'>Süper kaliteli</span> <br/>ayakkabılarımızla sizi buluşturuyoruz!<br/>Hemen gel ve tarzını keşfet!</h2>
  <p className='mt-4 lg:max-w-lg info-text'>Premium konfor ve stil sağlamak için titizlikle tasarlanmış ayakkabılarımız, deneyiminizi yükseltmek üzere tasarlanmıştır ve size eşsiz kalite, yenilik ve biraz da zarafet sunar. Her adımda rahatlığı ve şıklığı hissetmek için tasarlanmış olan ayakkabılarımız, her detayıyla özenle üretilmiştir.</p>
  <p className='info-text mt-6 lg:max-w-lg'>Kalite ve şıklığı bir arada sunan ayakkabılarımız, tarzınızı tamamlayacak ve her adımda kendinizi özel hissetmenizi sağlayacak. Bu ayakkabılarla her adımınızda kendinizi özel ve özgün hissedeceksiniz.</p>
<div className='mt-11'><Button label="Deytay İçin Tıklayınız"/></div>
</div>
<div className='flex-1 flex justify-center items-center'> <img  src={shoe8} width={570} height={522} className='object-contain'/></div>

   </section>
  )
}

export default SuperQuality
