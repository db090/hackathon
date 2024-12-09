import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='w-full h-[331px] mt-[60px] bg-black grid grid-rows-[231px,62px] gap-[10px] py-3 '>
        <div className='w-[1372px] mx-auto grid grid-cols-[245.25px,242.25px,242.25px,1fr] font-normal text-[11px] text-white'>
            <ul className=' font-semibold text-[11px] flex flex-col justify-around'>
                <li>Find A Store</li>
                <li>Become A Member</li>
                <li>Sign Up for Email</li>
                <li>Send Us Feedback</li>
                <li>Student Discounts</li>
            </ul>
            <ul className='flex flex-col justify-around'>
                <li className='font-semibold text-[11px] '>Get Help</li>
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us On Nike.com Inquiries</li>
                <li>Contact Us On All Other Inquiries</li>
            </ul>
            <ul className='flex flex-col justify-around'>
                <li className='font-semibold text-[11px]'>About Nike</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
            </ul>
            <div className='flex justify-end gap-3 '>
                <div className='w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center'>
                <FaTwitter className='text-black w-[20px] h-[20px]' />
                </div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center'>
                <FaFacebook className='text-black w-[20px] h-[20px]' />
                </div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center'>
                <FaYoutube className='text-black w-[20px] h-[20px]' />
                </div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center'>
                <FaInstagram className='text-black w-[20px] h-[20px]' />
                </div>
            </div>

        </div>
        <div className='w-[1372px] mx-auto grid grid-cols-2 pt-8'>
            <div className=' flex items-end gap-4'>
                <div className='flex gap-2 items-center'>
                <MdLocationOn className='text-white' />
                <p className='font-medium text-[12px] text-white'>India</p>
                </div>
                <p className='text-white font-medium text-[11px]'>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className='flex items-end justify-end'>
                <ul className='flex text-[12px] font-medium gap-6 text-white '>
                    <li>Guides</li>
                    <li>Term Of Sales</li>
                    <li>Terms Of Use</li>
                    <li>Nike Privacy Policy</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer