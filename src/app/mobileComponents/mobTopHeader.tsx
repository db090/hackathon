import Image from 'next/image'
import React from 'react'


const MobTopHeader = () => {
  return (
    <header className="w-full h-[36px] px-[2%] bg-[#F5F5F5] flex justify-between items-center sm:flex-col sm:h-auto sm:gap-2">
    {/* Logo Section */}
    <div className="flex justify-center sm:w-full">
      <Image src={"/assets/jordan.png"} alt="jordan" width={24} height={24} />
    </div>

    {/* Navigation Links */}
    <div className="w-[300px] flex items-center justify-center sm:w-full sm:justify-center">
      <ul className="flex gap-[22px] text-[11px] sm:gap-4 sm:text-[10px] sm:flex-wrap sm:justify-center">
        <li>Find a store</li>
        <li>|</li>
        <li>Help</li>
        <li>|</li>
        <li>Join Us</li>
        <li>|</li>
        <li>Sign In</li>
      </ul>
    </div>
  </header>
  )
}

export default MobTopHeader