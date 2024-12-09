import Image from 'next/image'
import React from 'react'


const MobDont = () => {
  return (
    <div>
      <div className="w-full grid grid-rows-[auto,auto] gap-6 sm:gap-8 px-4 sm:px-8 lg:px-0">
  {/* Title Section */}
  <div className="w-full flex flex-col items-start justify-center">
    <h3 className="font-medium text-[20px] sm:text-[23px] ml-4 sm:ml-[85px] text-center sm:text-left">
      Don't Miss
    </h3>
  </div>

  {/* Content Section */}
  <div className="grid grid-rows-[auto,auto] gap-6">
    {/* Image */}
    <Image
      src={"/assets/dontmiss.png"}
      alt="man"
      width={1344}
      height={700}
      className="overflow-hidden w-full h-auto object-cover"
    />

    {/* Text and CTA */}
    <div className="flex flex-col items-center justify-around gap-4 sm:gap-6 text-center px-4 sm:px-0">
      <h1 className="font-medium text-[32px] sm:text-[56px]">FLIGHT ESSENTIALS</h1>
      <p className="text-[14px] sm:text-[16px] max-w-[600px]">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div>
        <button className="bg-black text-white rounded-[30px] py-[8px] px-[22px] text-[14px] sm:text-[16px]">
          Shop
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default MobDont