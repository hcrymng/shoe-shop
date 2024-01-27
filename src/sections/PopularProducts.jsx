import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
<div className="flex flex-col justify-start gap-5">
<h2 className="text-black  font-bold font-palanquin leading-normal text-4xl "><span className="text-coral-red">Yeni</span> Gelen <span className="text-coral-red">Popüler</span> Ürünler</h2>
<p className="font-slate-gray" >Müthiş kalite ve tarzı 
  deneyimlemek için aradığınız seçenekler burada! Konfor, 
  tasarım ve değer dünyasını keşfedin. Sadece en iyisi için buradayız 
  ve sizin için en özel seçenekleri sunuyoruz. Artık konfor ve stil arasında bir 
  seçim yapmanıza gerek yok, çünkü biz her ikisini de sunuyoruz. Sizi en iyi şekilde 
  memnun edecek seçeneklerimizle tanışmaya hazır mısınız?</p>


</div>
    </section>
  )
}

export default PopularProducts
