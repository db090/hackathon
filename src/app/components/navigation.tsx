import React from 'react'

const Navigation = () => {
  return (
    <div className='w-[880px] h-[192px] grid grid-cols-4  mx-auto text-[15px] mt-[100px] font-medium'>
        <ul className='flex flex-col justify-between'>
            <li  className='text-[15px] font-bold'>Icons</li>
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
        </ul>
        <ul className='flex flex-col justify-between'>
            <li className='text-[15px] font-bold'>Shoes</li>
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
        </ul>
        <ul className='flex flex-col justify-between'>
            <li className='text-[15px] font-bold'>Clothing</li>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullover</li>
            <li>Shirts & Tops</li>
        </ul>
        <ul className='flex flex-col justify-between'>
            <li className='text-[15px] font-bold'>Kid's</li>
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
        </ul>
       
    </div>
  )
}

export default Navigation