import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center
     min-h-screen gap-10 max-container border-2 border-red-600 p-2"
    >
      <div
      className="relative xl:w-2/5 flex flex-col justify-center
       items-start w-full max-xl:padding-x pt-28"
      >
      <p>Son Bahar Colleksiyonu</p>
      <h1>
<span>Yeni Gelenler</span><br />
<span>Moda Ayakkabı Dünyası</span></h1>
<p>Aktif yaşamınız için şık Moda'nın yeni ürünlerini, kaliteli konforunu ve yeniliğini keşfedin.</p>
<Button label={"AlIŞVERİŞE BAŞLA"} iconURL={arrowRight}/>
      </div>


    </section>
  )
}

export default Hero
