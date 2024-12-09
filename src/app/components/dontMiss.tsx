import Image from 'next/image'
import React from 'react'


const DontMiss = () => {
  return (
    <div className='w-[100%] grid grid-rows-[58px,977px]'>
    <div className='w-[100%]  flex flex-col items-start justify-center'>
        <h3 className='font-medium text-[23px] ml-[85px]'>Dont Miss</h3>
    </div>
    <div className='grid grid-rows-[700px,277px] mx-auto'>
        <Image src={"/assets/dontmiss.png"} alt='man' width={1344} height={700} className='overflow-hidden'/>
        <div className='bg-blue100 flex flex-col items-center justify-around gap-'>
            <h1 className='font-medium text-[56px] flex flex-col items-center justify-center'>FLIGHT ESSENTIALS</h1>
            <p className='flex flex-col items-center justify-center'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <div className=''>
               <button className='bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px]'>Shop</button>
            </div>
        </div>

    </div>

</div>
  )
}

export default DontMiss