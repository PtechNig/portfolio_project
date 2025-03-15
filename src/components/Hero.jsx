import React from 'react'

const Hero = () => {
  return (
    <div className='container flex-wrap mb-20 mx-auto px-10 gap-20 flex justify-between h-screen items-center text-white'>
      <div className='flex '>
        <div className='flex items-center'>
        <img src="/assets/image-1.svg" alt="image" />
        </div>
        <div>
          <div>
          <h1 className='flex flex-col font-bold text-5xl'>
          SOFTWARE <span className='text-[#00ADB5]'>ENGINEER</span>
          </h1>
          </div >
          <div className='mt-22 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5'>
          <button className='bg-[#00ADB5] rounded-2xl hover:bg-[#c9eff1] hover:text-[#222831] cursor-pointer duration-500 drop-shadow-md px-4'>Hire me</button>
          <button className='bg-[#393E46BF] px-4 rounded-2xl cursor-pointer hover:bg-transparent hover:text-[#00ADB5] duration-500'>Download cv</button>
          <img src="/assets/image-4.svg" alt="image" className='mt-30 w-12 absolute left-74' />
          </div>

          

        </div>
      </div>
      <div className='relative'>
        <img src="/assets/image-2.svg" alt="image" className='w-fit  ' />
        <img src="/assets/image-3.svg" alt="image" className='absolute bottom-0 ' />

      </div>
    </div>
  )
}

export default Hero
