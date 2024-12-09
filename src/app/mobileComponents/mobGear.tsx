import Image from 'next/image'
import React from 'react'


const MobGear = () => {
  return (
    <div className="h-auto w-full mx-auto mt-[50px] px-4 sm:px-8 lg:px-0 grid grid-rows-[auto,auto] gap-6">
  {/* Heading Section */}
  <div>
    <h1 className="font-medium text-[20px] sm:text-[23px] text-center sm:text-left">Gear Up</h1>
  </div>

  {/* Product Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Men's Section */}
    <div className="grid grid-rows-[48px,auto] gap-4">
      {/* Header */}
      <div className="flex items-center justify-between sm:justify-end">
        <p className="text-[15px]">Shop Men's</p>
        <div className="flex gap-2">
          <button className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5] flex items-center justify-center">{"<"}</button>
          <button className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5] flex items-center justify-center">{">"}</button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,300px,300px] gap-4">
        <div className="hidden sm:block bg-red-100"></div>
        <div className="h-auto grid grid-rows-[auto,auto] gap-4">
          <Image
            src={"/assets/gear1.png"}
            alt="gear1"
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          <div className="flex justify-between items-start">
            <div className="text-[14px] sm:text-[15px] font-medium">
              <p>Nike Air Max Pulse</p>
              <p className="font-normal text-[#757575]">Men's Short-Sleeve</p>
              <p className="font-normal text-[#757575]">Running Top</p>
            </div>
            <p className="font-medium text-[14px] sm:text-[15px]">₹ 13 995</p>
          </div>
        </div>
        <div className="h-auto grid grid-rows-[auto,auto] gap-4">
          <Image
            src={"/assets/gear2.png"}
            alt="gear2"
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          <div className="flex justify-between items-start">
            <div className="text-[14px] sm:text-[15px] font-medium">
              <p>Nike Air Max Pulse</p>
              <p className="font-normal text-[#757575]">Men's Short-Sleeve</p>
              <p className="font-normal text-[#757575]">Running Top</p>
            </div>
            <p className="font-medium text-[14px] sm:text-[15px]">₹ 13 995</p>
          </div>
        </div>
      </div>
    </div>

    {/* Women's Section */}
    <div className="grid grid-rows-[48px,auto] gap-4">
      {/* Header */}
      <div className="flex items-center justify-between sm:justify-end">
        <p className="text-[15px]">Shop Women's</p>
        <div className="flex gap-2">
          <button className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5] flex items-center justify-center">{"<"}</button>
          <button className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5] flex items-center justify-center">{">"}</button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,300px,300px] gap-4">
        <div className="hidden sm:block bg-red-100"></div>
        <div className="h-auto grid grid-rows-[auto,auto] gap-4">
          <Image
            src={"/assets/gear3.png"}
            alt="gear3"
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          <div className="flex justify-between items-start">
            <div className="text-[14px] sm:text-[15px] font-medium">
              <p>Nike Dri-FIT ADV Run Division</p>
              <p className="font-normal text-[#757575]">Women's Long-Sleeve</p>
              <p className="font-normal text-[#757575]">Running Top</p>
            </div>
            <p className="font-medium text-[14px] sm:text-[15px]">₹ 5 295</p>
          </div>
        </div>
        <div className="h-auto grid grid-rows-[auto,auto] gap-4">
          <Image
            src={"/assets/gear4.png"}
            alt="gear4"
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          <div className="flex justify-between items-start">
            <div className="text-[14px] sm:text-[15px] font-medium">
              <p>Nike Fast</p>
              <p className="font-normal text-[#757575]">Women's Mid-Rise 7/8 Running</p>
              <p className="font-normal text-[#757575]">Leggings with Pockets</p>
            </div>
            <p className="font-medium text-[14px] sm:text-[15px]">₹ 3 795</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MobGear