import React from 'react'


const Essentials = () => {
  return (
    <div className='w-[100%] grid grid-rows-[58px,540px]'>
    <div className='w-[100%]  flex flex-col items-start justify-center'>
        <h3 className='font-medium text-[23px] ml-[85px]'>The Essentials</h3>
    </div>
    <div className='grid grid-cols-[440px,440px,440px] gap-[10px] mx-auto'>
       <div className={`bg-blue100 bg-[url('/assets/essen1.png')] bg-no-repeat bg-center flex items-end px-[45px] py-[55px] `}>
          <button className='bg-white text-black rounded-[30px] py-[7.5px] px-[21.5px]'>Men's</button>
       </div>
       <div className={`bg-blue100 bg-[url('/assets/essen2.png')] bg-no-repeat bg-center flex items-end px-[45px] py-[55px] `}>
          <button className='bg-white text-black rounded-[30px] py-[7.5px] px-[21.5px]'>Women's</button>         
       </div>
       <div className={`bg-blue100 bg-[url('/assets/essen3.png')] bg-no-repeat bg-center flex items-end px-[45px] py-[55px] `}>
          <button className='bg-white text-black rounded-[30px] py-[7.5px] px-[21.5px]'>Kid's</button>
       </div>
        

    </div>

</div>
  )
}

export default Essentials