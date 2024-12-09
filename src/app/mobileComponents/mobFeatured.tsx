import Image from 'next/image'
import React from 'react'


const MobFeatured = () => {
  return (
    <div className="w-full grid grid-rows-[58px,auto] mt-[100px] px-4 sm:px-8 md:px-[85px]">
    {/* Header Section */}
    <div className="w-full flex flex-col items-start justify-center">
      <h3 className="font-medium text-[20px] sm:text-[23px] ml-0 md:ml-[85px] text-center md:text-left">
        Featured
      </h3>
    </div>
  
    {/* Content Section */}
    <div className="grid grid-rows-[auto,277px] mx-auto gap-4">
      {/* Image Section */}
      <div className="w-full h-[300px] sm:h-[500px] md:h-[700px]">
        <Image
          src={"/assets/man.jpg"}
          alt="man"
          layout="responsive"
          width={1344}
          height={700}
          className="object-cover rounded-md"
        />
      </div>
  
      {/* Text and Button Section */}
      <div className="bg-blue100 flex flex-col items-center justify-center gap-4 px-4 py-6 text-center">
        <h1 className="font-medium text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-600">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <button className="bg-black text-white rounded-[30px] py-3 px-8 text-[14px] sm:text-[16px]">
          Find Your Shoes
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default MobFeatured