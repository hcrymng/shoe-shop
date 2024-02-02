import React from 'react'
import { star } from '../assets/icons'
const CustomerReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex-1 flex justify-center items-center flex-col'>
       <img src={imgURL} alt={customerName}  className='rounded-full object-cover w-[120px] h-[120px]'/>
       <p className=' mt-6 max-w-sm text-center info-text'>{feedback}</p>
     
<div className='mt-3 flex justify-center  items-center gap-2.5'>
  <img src={star} alt="rating"  width={24} height={24} className='object-contain m-0'/><p className='text-slate-gray font-montserrat text-xl'>({rating})</p>
      </div>
     <h3 className='mt-1 text-3xl font-palanquin font-bold text-center'>{customerName}</h3>
    </div>
  )
}

export default CustomerReviewCard
