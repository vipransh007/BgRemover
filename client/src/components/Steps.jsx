import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:px-20 xl:py-40'>
      
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-all duration-500'>Steps To Remove The BackGround <br />
       From Your Image in Seconds</h1>

       <div className='flex item-start flex-row gap-4 mt-16 xl:mt-24 justify-center '>

        <div className='flex items-start gap-4 bg-white p-4 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>

             <img className='max-w-9 ' src={assets.upload_icon} alt="" />

        <div>
            <p className='text-xl font-medium'>Upload Your Image</p>
            <p className='text-sm text-neutral-500 mt-1'>Lorem ipsum dolor is a demo textr <br />
            will be replaced with the actual text</p>
        </div>

        </div>
        <div className='flex  items-start gap-4 bg-white p-4 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>

             <img className='max-w-9 ' src={assets.remove_bg_icon} alt="" />

        <div>
            <p className='text-xl font-medium'>Remove Background</p>
            <p className='text-sm text-neutral-500 mt-1'>Lorem ipsum dolor is a demo textr <br />
            will be replaced with the actual text</p>
        </div>

        </div>
        <div className='flex items-start gap-4 bg-white p-4 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>

             <img className='max-w-9 ' src={assets.download_icon} alt="" />

        <div>
            <p className='text-xl font-medium'>Download Image</p>
            <p className='text-sm text-neutral-500 mt-1'>Lorem ipsum dolor is a demo textr <br />
            will be replaced with the actual text</p>
        </div>
        </div>

       </div>
    </div>
  )
}

export default Steps
