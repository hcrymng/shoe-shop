import React, { useState } from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center
     min-h-screen gap-10 max-container  p-5"
    >
      <div
      className="relative xl:w-2/5 flex flex-col justify-center
       items-start w-full max-xl:padding-x pt-28"
      >
      <p className="text-coral-red font-montserrat text-xl ">Son Bahar koleksiyonu</p>
      <h1 className="mt-10 font-palanquin 
text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">En Şık ve </span><br/>

<span className="text-coral-red inline-block mt-3">Moda</span> Ayakkabı Dünyası

</h1>
<p className="font-montserrat mt-6 mb-14 leading-8 text-slate-gray text-lg">Aktif yaşamınız için şık Moda'nın yeni ürünlerini, kaliteli konforunu ve yeniliğini keşfedin.</p>
<Button label={"ALIŞVERİŞE BAŞLA"} iconURL={arrowRight}/>
<div className="flex justify-start items-start flex-wrap w-full  mb-4 gap-16 mt-20">
  {statistics.map((data,index) =>(
    <div key={index}><p className="font-bold text-4xl font-palanquin">{data.value}</p>
    <p className="font-montserrat text-slate-gray leading-7">{data.label}</p>
    </div>
  ))}
</div>
      </div>
<div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-center bg-hero bg-cover">
  <img src={bigShoeImage} alt="Ayakkabı koleksiyonu" className="relative z-10 object-contain"
  />
  <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[5%]">
    {shoes.map((shoe) => (
      <div key={shoe}>
       <ShoeCard imgURL={shoe} changeBigShoeImage = {(shoe)=> setBigShoeImage(shoe)} bigShoeImage={bigShoeImage} /> 
       
      </div>
    ))}
  </div>

</div>

    </section>
  )
}

export default Hero
