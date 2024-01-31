import React from "react"
import {footerLogo} from "../assets/images"
const Footer = () => {
  return (
    <footer className='max-container'>
<div className=' flex justify-between items-start gap-20 max-lg:flex-col flex-wrap'>
<div className='flex flex-col items-start'>
  <a href='/'>
<img src={footerLogo} width={200} height={95}
/>
  </a>

</div>
</div>



    </footer>
  )
}

export default Footer
