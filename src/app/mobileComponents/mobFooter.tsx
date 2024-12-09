import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const MobFooter = () => {
  return (
    <footer className="w-full h-auto bg-black grid gap-[10px] py-6 text-white text-[11px]">
  {/* Top Section */}
  <div className="w-full max-w-[1372px] mx-auto grid grid-cols-1 sm:grid-cols-[245.25px,242.25px,242.25px,1fr] gap-6 sm:gap-0 px-4 sm:px-0 font-normal">
    {/* Column 1 */}
    <ul className="flex flex-col justify-around font-semibold">
      <li>Find A Store</li>
      <li>Become A Member</li>
      <li>Sign Up for Email</li>
      <li>Send Us Feedback</li>
      <li>Student Discounts</li>
    </ul>
    {/* Column 2 */}
    <ul className="flex flex-col justify-around">
      <li className="font-semibold">Get Help</li>
      <li>Order Status</li>
      <li>Delivery</li>
      <li>Returns</li>
      <li>Payment Options</li>
      <li>Contact Us On Nike.com Inquiries</li>
      <li>Contact Us On All Other Inquiries</li>
    </ul>
    {/* Column 3 */}
    <ul className="flex flex-col justify-around">
      <li className="font-semibold">About Nike</li>
      <li>News</li>
      <li>Careers</li>
      <li>Investors</li>
      <li>Sustainability</li>
    </ul>
    {/* Social Icons */}
    <div className="flex justify-start sm:justify-end gap-3">
      <div className="w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
        <FaTwitter className="text-black w-[20px] h-[20px]" />
      </div>
      <div className="w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
        <FaFacebook className="text-black w-[20px] h-[20px]" />
      </div>
      <div className="w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
        <FaYoutube className="text-black w-[20px] h-[20px]" />
      </div>
      <div className="w-[30px] h-[30px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
        <FaInstagram className="text-black w-[20px] h-[20px]" />
      </div>
    </div>
  </div>
  {/* Bottom Section */}
  <div className="w-full max-w-[1372px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0 pt-6">
    {/* Left Section */}
    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
      <div className="flex items-center gap-2">
        <MdLocationOn className="text-white" />
        <p className="font-medium text-[12px]">India</p>
      </div>
      <p className="text-[11px] font-medium">© 2023 Nike, Inc. All Rights Reserved</p>
    </div>
    {/* Right Section */}
    <div className="flex justify-start sm:justify-end">
      <ul className="flex flex-wrap gap-4 sm:gap-6 text-[12px] font-medium">
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

export default MobFooter