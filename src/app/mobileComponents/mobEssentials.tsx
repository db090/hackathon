import React from 'react'

const MobEssentials = () => {
  return (
    <div className="w-full grid grid-rows-[auto,auto] gap-6 sm:gap-8 px-4 sm:px-8 lg:px-0">
  {/* Title Section */}
  <div className="w-full flex flex-col items-start justify-center">
    <h3 className="font-medium text-[20px] sm:text-[23px] ml-4 sm:ml-[85px] text-center sm:text-left">
      The Essentials
    </h3>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[10px] mx-auto">
    {/* Men's Section */}
    <div
      className={`bg-blue-100 bg-[url('/assets/essen1.png')] bg-no-repeat bg-center bg-cover flex items-end px-6 sm:px-[45px] py-6 sm:py-[55px]`}
    >
      <button className="bg-white text-black rounded-[30px] py-[7px] px-[20px] sm:py-[7.5px] sm:px-[21.5px] text-[14px] sm:text-[16px]">
        Men's
      </button>
    </div>

    {/* Women's Section */}
    <div
      className={`bg-blue-100 bg-[url('/assets/essen2.png')] bg-no-repeat bg-center bg-cover flex items-end px-6 sm:px-[45px] py-6 sm:py-[55px]`}
    >
      <button className="bg-white text-black rounded-[30px] py-[7px] px-[20px] sm:py-[7.5px] sm:px-[21.5px] text-[14px] sm:text-[16px]">
        Women's
      </button>
    </div>

    {/* Kid's Section */}
    <div
      className={`bg-blue-100 bg-[url('/assets/essen3.png')] bg-no-repeat bg-center bg-cover flex items-end px-6 sm:px-[45px] py-6 sm:py-[55px]`}
    >
      <button className="bg-white text-black rounded-[30px] py-[7px] px-[20px] sm:py-[7.5px] sm:px-[21.5px] text-[14px] sm:text-[16px]">
        Kid's
      </button>
    </div>
  </div>
</div>

  )
}

export default MobEssentials