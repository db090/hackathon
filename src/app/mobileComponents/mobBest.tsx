import Image from 'next/image'
import React from 'react'


const MobBest = () => {
  return (
    <div className="h-auto w-full grid grid-rows-[52px,auto] gap-4 px-4 sm:px-8 md:px-[80px]">
  {/* Header Section */}
  <div className="flex items-center justify-between">
    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-medium">Best of Air Max</h3>
    <div className="flex gap-3 items-center">
      <p className="text-[14px] sm:text-[15px]">Shop</p>
      <button className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-sm">
        {"<"}
      </button>
      <button className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-sm">
        {">"}
      </button>
    </div>
  </div>

  {/* Product Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* Product Card */}
    <div className="h-auto grid grid-rows-[auto,48px] gap-4">
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[441.36px]">
        <Image
          src={"/assets/shoes1.png"}
          alt="shoes1"
          layout="responsive"
          width={441.36}
          height={441.36}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[14px] sm:text-[15px] font-medium">
          <p>Nike Air Max Pulse</p>
          <p className=" text-[#757575]">Women's Shoes</p>
        </div>
        <p className="font-medium text-[14px] sm:text-[15px]">₹ 13 995</p>
      </div>
    </div>

    {/* Second Product Card */}
    <div className="h-auto grid grid-rows-[auto,48px] gap-4">
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[441.36px]">
        <Image
          src={"/assets/shoes1.png"}
          alt="shoes1"
          layout="responsive"
          width={441.36}
          height={441.36}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[14px] sm:text-[15px] font-medium">
          <p>Nike Air Max Pulse</p>
          <p className="text-[#757575]">Men's Shoes</p>
        </div>
        <p className="font-medium text-[14px] sm:text-[15px]">₹ 13 995</p>
      </div>
    </div>

    {/* Third Product Card */}
    <div className="h-auto grid grid-rows-[auto,48px] gap-4">
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[441.36px]">
        <Image
          src={"/assets/shoes2.png"}
          alt="shoes2"
          layout="responsive"
          width={441.36}
          height={441.36}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[14px] sm:text-[15px] font-medium">
          <p>Nike Air Max 97 SE</p>
          <p className=" text-[#757575]">Men's Shoes</p>
        </div>
        <p className="font-medium text-[14px] sm:text-[15px]">₹ 13 995</p>
      </div>
    </div>
  </div>
</div>


  )
}

export default MobBest