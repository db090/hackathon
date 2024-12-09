import React from 'react'

const MobNavigation = () => {
  return (
    <div className="w-full max-w-[880px] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mx-auto text-[14px] sm:text-[15px] mt-8 sm:mt-[100px] font-medium px-4 sm:px-0">
  {/* Icons Section */}
  <ul className="flex flex-col justify-between">
    <li className="text-[14px] sm:text-[15px] font-bold">Icons</li>
    <li>Air Force 1</li>
    <li>Huarache</li>
    <li>Air Max 90</li>
    <li>Air Max 95</li>
  </ul>

  {/* Shoes Section */}
  <ul className="flex flex-col justify-between">
    <li className="text-[14px] sm:text-[15px] font-bold">Shoes</li>
    <li>All Shoes</li>
    <li>Custom Shoes</li>
    <li>Jordan Shoes</li>
    <li>Running Shoes</li>
  </ul>

  {/* Clothing Section */}
  <ul className="flex flex-col justify-between">
    <li className="text-[14px] sm:text-[15px] font-bold">Clothing</li>
    <li>All Clothing</li>
    <li>Modest Wear</li>
    <li>Hoodies & Pullover</li>
    <li>Shirts & Tops</li>
  </ul>

  {/* Kid's Section */}
  <ul className="flex flex-col justify-between">
    <li className="text-[14px] sm:text-[15px] font-bold">Kid's</li>
    <li>Infant & Toddler Shoes</li>
    <li>Kids' Shoes</li>
    <li>Kids' Jordan Shoes</li>
    <li>Kids' Basketball Shoes</li>
  </ul>
</div>

  )
}

export default MobNavigation