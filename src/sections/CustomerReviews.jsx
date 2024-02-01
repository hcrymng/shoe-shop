import React from 'react'
import { reviews } from '../constants'
import CustomerReviewCard from '../components/CustomerReviewCard'
const CustomerReviews = () => {
  return (
   <section className='max-container'>
    <div className='flex flex-col justify-center items-center'>
    <h2 className="mt-10 font-palanquin 
text-4xl max-sm:text-[72px] max-sm:leading-[70px] font-bold "><span className='text-coral-red'>Müşteri</span> Yorumları</h2>
  <p className='mt-4 lg:max-w-lg text-center info-text'>Değerli müşterilerimizin olağanüstü deneyimleri hakkında gerçek hikayeleri dinleyin. Sizi de memnun edecek bir deneyim yaşamak için hemen bizimle iletişime geçin.</p>
    </div>
    <div className='flex mt-10 max-lg:flex-col'>
      {reviews.map((review) => (
        <CustomerReviewCard key={review.customerName} {...review} />
      ))}
    </div>
   </section>
  )
}

export default CustomerReviews
