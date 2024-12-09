import Image from 'next/image'
import React from 'react'

const Gear = () => {
  return (
    <div className='h-[561px] w-[1344px]  mx-auto mt-[50px] grid grid-rows-[1fr,509px]'>
        <div>
            <h1 className='font-medium text-[23px]'>Gear Up</h1>
        </div>
        <div className='grid grid-cols-2'>
            <div className='grid grid-rows-[48px,447px]'>
                <div className='flex items-center gap-2 justify-end'>
                <p className='text-[15px]'>Shop Men's</p>
                <button className='w-[28px] h-[28px] rounded-full bg-[#F5F5F5]'>{"<"}</button>
                <button className='w-[28px] h-[28px] rounded-full bg-[#F5F5F5]'>{">"}</button>
                </div>
                <div className='grid grid-cols-[1fr,300px,300px] gap-2'>
                    <div className='bgred-100'></div>
                    <div className='h-[393px] grid grid-rows-[300px,1fr] gap-5'>
                        <div>
                            <Image src={"/assets/gear1.png"} alt='gear1' width={300} height={300}/>
                        </div>
                        <div className='w-[284px] h-[72px] flex justify-between'>
                          <div  className='text-[15px] font-medium'>
                          <p>Nike Air Max Pulse</p>
                          <p className='font-normal text-[#757575]'>Men's Short-Sleeve</p>
                          <p className='font-normal text-[#757575]'>Running Top</p>
                          </div>
                         <p className='font-medium text-[15px]'>₹ 13 995</p>
                        </div>
                    </div>
                    <div className='h-[393px] grid grid-rows-[300px,1fr] gap-5'>
                        <div>
                            <Image src={"/assets/gear2.png"} alt='gear2' width={300} height={300}/>
                        </div>
                        <div className='w-[284px] h-[72px] flex justify-between'>
                          <div  className='text-[15px] font-medium'>
                          <p>Nike Air Max Pulse</p>
                          <p className='font-normal text-[#757575]'>Men's Short-Sleeve</p>
                          <p className='font-normal text-[#757575]'>Running Top</p>
                          </div>
                         <p className='font-medium text-[15px]'>₹ 13 995</p>
                        </div>
                    </div>
                   
                </div>

            </div>
            <div className='grid grid-rows-[48px,447px]'>
                <div className='flex items-center gap-2 justify-end'>
                <p className='text-[15px]'>Shop Women's</p>
                <button className='w-[28px] h-[28px] rounded-full bg-[#F5F5F5]'>{"<"}</button>
                <button className='w-[28px] h-[28px] rounded-full bg-[#F5F5F5]'>{">"}</button>
                </div>
                <div className='grid grid-cols-[1fr,300px,300px] gap-2'>
                    <div className='bgred-100'></div>
                    <div className='h-[393px] grid grid-rows-[300px,1fr] gap-5'>
                        <div className=''>
                            <Image src={"/assets/gear3.png"} alt='gear3' width={300} height={300}/>
                        </div>
                        <div className='w-[284px] h-[72px] flex justify-between'>
                          <div  className='text-[15px] font-medium'>
                          <p>Nike Dri-FIT ADV Run Division</p>
                          <p className='font-normal text-[#757575]'>Women's Long-Sleeve</p>
                          <p className='font-normal text-[#757575]'>Running Top</p>
                          </div>
                         <p className='font-medium text-[15px]'>₹ 5 295</p>
                        </div>
                    </div>
                    <div className='h-[393px] grid grid-rows-[300px,1fr] gap-5'>
                        <div className=''>
                            <Image src={"/assets/gear4.png"} alt='gear4' width={300} height={300}/>
                        </div>
                        <div className='w-[284px] h-[72px] flex justify-between'>
                          <div  className='text-[15px] font-medium'>
                          <p>Nike Fast</p>
                          <p className='font-normal text-[#757575]'>Women's Mid-Rise 7/8 Running</p>
                          <p className='font-normal text-[#757575]'>Leggings with Pockets</p>
                          </div>
                         <p className='font-medium text-[15px]'>₹ 3 795</p>
                        </div>
                    </div>
                   
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Gear