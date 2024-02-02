import React from "react"
import {footerLogo} from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
const Footer = () => {
  return (
    <footer className='max-container'>
<div className=' flex justify-between items-start gap-20 max-lg:flex-col flex-wrap'>
<div className='flex flex-col items-start'>
  <a href='/'>
<img src={footerLogo} width={200} height={95}
/>
  </a>
  <p className="text-white-400 font-montserrat mt-6 text-base leading-7 sm:max-w-sm">
  Yeni sezon için ayakkabılarını hazırla! Mağazamızda senin için mükemmel bedeni bul. Şimdi alışverişe başla!
  </p>
<div className="flex items-center gap-5 mt-8"> 
{socialMedia.map((icon) =>(
  <div className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-coral-red bg-white">
    <a href="/" ><img
    src={icon.src}
    alt={icon.alt}
    width={24}
    height={24} /></a>
  </div>
))}
</div>
</div>
<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
  {footerLinks.map((section) =>(
    <div key={section.title}>
      <h4 className="text-white text-2xl leading-normal font-montserrat font-medium mb-6">{section.title}
    </h4>
  <ul>
  {section.links.map((link) => (
        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray" key={link.name}><a href={link.link}>{link.name}</a></li>
      ))}
  </ul>
    </div>
    
  ))}
</div>

</div>

   </footer>
  )
}

export default Footer
