
import {star} from "../assets/icons"
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img 
      src={imgURL} alt={name} className="w-[380px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating"  width={24} height={24}
        />
<p className="font-montserrat font-semibold leading-normal text-slate-gray text-lg">(4.7)</p> </div>
<h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
<p className="mt-2 font-montserrat text-coral-red text-2xl leading-normal font-semibold">{price}</p>
     
    </div>
  )
}

export default PopularProductCard
