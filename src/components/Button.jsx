import React from 'react'


const Button = ({label, iconURL}) => {
  return (
    <button
    className="flex justify-center items-center bg-coral-red text-white gap-2 px-5 py-3
    border font-montserrat text-lg leading-none rounded-full border-coral-red">
{label}
<img 
src={iconURL}
/>
    </button>
  )
}

export default Button
