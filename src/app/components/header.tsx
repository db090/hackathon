import Image from 'next/image'
import React from 'react'
import { CiHeart, CiSearch, CiShoppingBasket } from 'react-icons/ci'


const Header = () => {
  return (
    <header className='w-[100%] h-[60px] px-[2%] flex items-center justify-between'>
        <div >
        <Image src={"/assets/nike.png"} width={58.85} height={20.54} alt='nike' />
        </div>
        <nav className='w-[520px] ml-36'>
            <ul className='flex gap-[20px] items-center justify-end font-medium text-[15px]'>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>Sneakers</li>
            </ul>
        </nav>
        <div className='flex w-[20%] h-[40px] justify-between items-center'>
            <input type="text" placeholder='search' className='w-[75%] bg-[#F5F5F5] h-[40px] rounded-[100px] pl-10' />
            <CiSearch className='ml-[-420px] w-[24px] h-[24px]'/>
            <div className='flex gap-3'>
            <CiHeart  className=' w-[24px] h-[24px]'/>
            <CiShoppingBasket className=' w-[24px] h-[24px]'/>
            </div>
        </div>
    </header>
  )
}

export default Header