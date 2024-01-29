import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
<div className="flex flex-col justify-start gap-5">
<h2 className="text-black  font-bold font-palanquin leading-normal text-4xl "><span className="text-coral-red">Yeni</span> Gelen <span className="text-coral-red">Popüler</span> Ürünler</h2>
<p className="text-slate-gray font-montserrat lg:max-w-lg mt-2" >Müthiş kalite ve tarzı deneyimlemek için aradığınız seçenekler burada! Konfor, tasarım ve değer dünyasını keşfedin. Sadece en iyisi için buradayız ve sizin için en özel seçenekleri sunuyoruz. Artık konfor ve stil arasında bir seçim yapmanıza gerek yok, çünkü biz her ikisini de sunuyoruz. Sizi en iyi şekilde memnun edecek seçeneklerimizle tanışmaya hazır mısınız?</p>
</div>
<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
{products.map((product)=> (
  <PopularProductCard key={product.name} {...product} />
))}

</div>
    </section>
  )
}

export default PopularProducts
