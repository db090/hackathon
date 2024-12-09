import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-[100%] grid grid-rows-[58px,977px]'>
        <div className='w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-center'>
            <h3 className='font-medium text-[15px]'>Hello Nike App</h3>
            <p className=' font-medium text-[11px]'>Download the app to access everything Nike. <span className='underline font-medium text-[11px]'>Get Your Great</span></p>
        </div>
        <div className='grid grid-rows-[700px,277px] mx-auto'>
            <Image src={"/assets/shoes.png"} alt='shoes' width={1344} height={700} className='overflow-hidden'/>
            <div className='bg-blue100 flex flex-col items-center justify-center gap-10'>
                <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium text-[15px]'>First Look</h3>
                <h1 className='font-medium text-[56px]'>Nike Air Max Pulse</h1>
                <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                —designed to push you past your limits and help you go to the max.</p>
                </div>
                <div className='flex gap-2'>
                   <button className='bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px]'>Notify Me</button>
                   <button className='bg-black text-white rounded-[30px] py-[7.5px] px-[21.5px]'>Shop Air Max</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero