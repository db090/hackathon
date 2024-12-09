import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <header className='w-[100%] h-[36px] px-[2%] bg-[#F5F5F5] flex justify-between'>
        <div>
            <Image src={"/assets/jordan.png"} alt='jordan' width={24} height={24}/>
        </div>
       
        <div className='w-[300px]  flex items-center'>
            <ul className='flex gap-[22px] text-[11px]'>
                <li>Find a store</li>
                <li>|</li>
                <li>Help</li>
                <li>|</li>
                <li>Join Us</li>
                <li>|</li>
                <li>Sign In</li>
            </ul>
        </div>

    </header>
  )
}

export default TopHeader