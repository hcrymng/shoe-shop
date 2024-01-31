import React from 'react'

{/* eğer icon varsa button da icon gösterilecek eğer icon verilmediyse iconsız render edilecek */}
const Button = ({label, iconURL, bgColor, textColor, borderColor, fullWidth}) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-5 py-3
    border font-montserrat text-lg leading-none rounded-full ${bgColor ? `${bgColor}`:  'bg-coral-red'}  ${borderColor ? `${borderColor}`: 'border-coral-red' } ${textColor ? `${textColor}` :   'text-white'} ${fullWidth && 'w-full'}`}>
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
{/**
 */}