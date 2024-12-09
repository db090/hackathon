import Image from 'next/image'
import React from 'react'


const MobHero = () => {
  return (
    <div className="w-full grid grid-rows-[58px,977px] sm:grid-rows-[auto,auto]">
  {/* Top Section */}
  <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center text-center px-4 py-2">
    <h3 className="font-medium text-[15px] sm:text-[13px]">Hello Nike App</h3>
    <p className="font-medium text-[11px] sm:text-[10px]">
      Download the app to access everything Nike.{" "}
      <span className="underline font-medium text-[11px] sm:text-[10px]">
        Get Your Great
      </span>
    </p>
  </div>

  {/* Main Section */}
  <div className="grid grid-rows-[700px,277px] mx-auto sm:grid-rows-[auto,auto] sm:gap-4">
    {/* Image Section */}
    <Image
      src={"/assets/shoes.png"}
      alt="shoes"
      width={1344}
      height={700}
      className="overflow-hidden w-full h-auto sm:h-[300px] object-cover"
    />

    {/* Text and Buttons Section */}
    <div className="bg-blue100 flex flex-col items-center justify-center gap-6 sm:gap-4 px-4 py-6 sm:py-4">
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="font-medium text-[15px] sm:text-[13px]">First Look</h3>
        <h1 className="font-medium text-[56px] sm:text-[28px] leading-tight">
          Nike Air Max Pulse
        </h1>
        <p className="text-[14px] sm:text-[12px]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br className="hidden sm:block" />
          —designed to push you past your limits and help you go to the max.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2 sm:flex-col sm:gap-2 w-full justify-center">
        <button className="bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px] sm:w-full sm:py-2">
          Notify Me
        </button>
        <button className="bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px] sm:w-full sm:py-2">
          Shop Air Max
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default MobHero