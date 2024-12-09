import Image from 'next/image'
import React from 'react'

const Best = () => {
  return (
    <div className="h-[596.36px] w-[100%] grid grid-rows-[52px,540.36px] gap-[4px] px-[80px] mt-[100px]">
        <div className="bg flex items-center justify-between">
            <h3 className="text-[22px] font-medium">Best of Air Max</h3>
            <div className="flex gap-3 items-center ">
                <p className="text-[15px]">shop</p>
                <button className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5]">{"<"}</button>
                <button className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5]">{">"}</button>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
            <div className='  h-[510.36px] grid grid-rows-[441.36px,48px] gap-5'>
                <div>
                    <Image src={"/assets/shoes1.png"} alt='shoes1' width={441.36} height={441.36}/>
                </div>
                
                <div className='w-[425.36px] flex justify-between'>
                    <div  className='text-[15px] font-medium'>
                        <p>Nike Air Max Pulse</p>
                        <p className='font-normal text-[#757575]'>Women's Shoes</p>
                    </div>
                    <p className='font-medium text-[15px]'>₹ 13 995</p>
                </div>

            </div>
            <div className='h-[510.36px] grid grid-rows-[441.36px,48px] gap-5'>
                <div>
                    <Image src={"/assets/shoes1.png"} alt='shoes1' width={441.36} height={441.36}/>
                </div>
                
                <div className='w-[425.36px] flex justify-between'>
                    <div  className='text-[15px] font-medium'>
                        <p>Nike Air Max Pulse</p>
                        <p className='font-normal text-[#757575]'>Men's Shoes</p>
                    </div>
                    <p className='font-medium text-[15px]'>₹ 13 995</p>
                </div>

            </div>
            <div className='h-[510.36px] grid grid-rows-[441.36px,48px] gap-5'>
                <div>
                    <Image src={"/assets/shoes2.png"} alt='shoes1' width={441.36} height={441.36}/>
                </div>
                
                <div className='w-[425.36px] flex justify-between'>
                    <div  className='text-[15px] font-medium'>
                        <p>Nike Air Max 97 SE</p>
                        <p className='font-normal text-[#757575]'>Men's Shoes</p>
                    </div>
                    <p className='font-medium text-[15px]'>₹ 13 995</p>
                </div>

            </div>
           
           
        </div>

    </div>
  )
}

export default Best