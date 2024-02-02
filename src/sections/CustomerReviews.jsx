import React from 'react'
import { reviews } from '../constants'
import CustomerReviewCard from '../components/CustomerReviewCard'
const CustomerReviews = () => {
  return (
   <section className='max-container'>
  
    <h3 className="font-palanquin 
text-4xl text-center font-bold "><span className='text-coral-red'>Müşteri</span> Yorumları</h3>
  <p className=' m-auto mt-4 lg:max-w-lg text-center info-text'>Değerli müşterilerimizin olağanüstü deneyimleri hakkında gerçek hikayeleri dinleyin. Sizi de memnun edecek bir deneyim yaşamak için hemen bizimle iletişime geçin.</p>
    
    <div className='flex mt-24 flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review) => (
        <CustomerReviewCard key={review.customerName} {...review} />
      ))}
    </div>
   </section>
  )
}

export default CustomerReviews
