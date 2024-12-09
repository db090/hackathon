import Image from 'next/image'
import React from 'react'


const Featured = () => {
  return (
    <div className='w-[100%] grid grid-rows-[58px,977px] mt[100px]'>
    <div className='w-[100%]  flex flex-col items-start justify-center'>
        <h3 className='font-medium text-[23px] ml-[85px]'>Featured</h3>
    </div>
    <div className='grid grid-rows-[700px,277px] mx-auto'>
        <Image src={"/assets/man.jpg"} alt='man' width={1344} height={700} className='overflow-hidden'/>
        <div className='bg-blue100 flex flex-col items-center justify-around gap-'>
            <h1 className='font-medium text-[56px] flex flex-col items-center justify-center'>STEP INTO WHAT FEELS GOOD</h1>
            <p className='flex flex-col items-center justify-center'>Cause everyone should know the feeling of running in that perfect pair.</p>
            <div className=''>
               <button className='bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px]'>Find Your Shoes</button>
            </div>
        </div>

    </div>

</div>
  )
}

export default Featured