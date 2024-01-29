import React from 'react'

{/* eğer icon varsa button da icon gösterilecek eğer icon verilmediyse iconsız render edilecek */}
const Button = ({label, iconURL}) => {
  return (
    <button
    className="flex justify-center items-center bg-coral-red text-white gap-2 px-5 py-3
    border font-montserrat text-lg leading-none rounded-full border-coral-red">
{label}
{
  iconURL && 
<img 


src={iconURL}
/>}
    </button>
  )
}

export default Button
