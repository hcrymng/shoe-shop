import React from 'react'
import { star } from '../assets/icons'
const CustomerReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex-1 flex sm:flex-col justify-center items-center'>
      <div className='flex justify-center items-center  w-[175px] h-[175px] mt-4' > <img src={imgURL} alt={customerName} width={130} className='rounded-full'/></div>
      <div><p className='text-center lg:max-w-lg info-text'>{feedback}</p></div>
      <div>
<div className='flex justify-start gap-3'><img src={star} alt="rating"  width={24} height={24}/><p className='info-text mt-4 text-2xl'>({rating})</p></div>
      </div>
     <h3 className='mt-1 text-3xl font-palanquin font-bold'>{customerName}</h3>
    </div>
  )
}

export default CustomerReviewCard
