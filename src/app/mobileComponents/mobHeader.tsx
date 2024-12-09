import Image from 'next/image'
import React from 'react'
import { CiHeart, CiSearch, CiShoppingBasket } from 'react-icons/ci'


const MobHeader = () => {
  return (
    <header className="w-full h-[60px] px-[2%] flex items-center justify-between sm:flex-col sm:h-auto sm:gap-4">
    {/* Logo Section */}
    <div className="flex justify-start sm:justify-center sm:w-full">
      <Image src={"/assets/nike.png"} width={58.85} height={20.54} alt="nike" />
    </div>
  
    {/* Navigation Section */}
    <nav className="w-[520px] ml-36 sm:ml-0 sm:w-full">
      <ul className="flex gap-[20px] items-center justify-end font-medium text-[15px] sm:gap-4 sm:justify-center sm:flex-wrap sm:text-[14px]">
        <li>New & Featured</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
        <li>Sneakers</li>
      </ul>
    </nav>
  
    {/* Search and Icons Section */}
    <div className="flex w-[20%] h-[40px] justify-between items-center sm:w-full sm:flex-col sm:gap-2">
      {/* Search Bar */}
      <div className="relative w-[75%] bg-[#F5F5F5] h-[40px] rounded-[100px] flex items-center sm:w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full pl-10 bg-transparent outline-none text-[14px]"
        />
        <CiSearch className="absolute left-3 w-[24px] h-[24px] text-gray-500" />
      </div>
  
      {/* Icons */}
      <div className="flex gap-3 sm:gap-6">
        <CiHeart className="w-[24px] h-[24px]" />
        <CiShoppingBasket className="w-[24px] h-[24px]" />
      </div>
    </div>
  </header>
  
  )
}

export default MobHeader