import React from 'react'
import { assets } from '../assets/assets';


function Result() {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-44 min-h-[75vh]">

      <div className="">
        {/* Image Container */}
      
          <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
            {/* leftt */}
            <div>
              <p className='font-semibold text-gray-600 mb-2'>Original</p>
              <img src={assets.image_w_bg} className='rounded-md border' alt="" />
            </div>

            {/* right */}
            <div className='flex flex-col '>
              <p className='font-semibold text-gray-600 mb-2'>Result</p>
              <div className='ronuded-md border border-gray-300 h-full bg-layer relative overflow-hidden'>
                {/* <img src={assets.image_wo_bg} alt="" /> */}
                <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                  <div className='border-4 border-voilet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Buttons for redo or download */}
      <div className='flex justify-center sm:justify-end items-center gap-4 mt-8'>
        <button className='px-8 py-2.5 text-voilet-600 text-sm border border-voilet-600 rounded-full hover:scale-105 transition-all duration-700'>Try Another Image</button>
        <a href="" className='px-8 py-2.5 text-white text-sm border bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'>Dowload Image</a>
      </div>
     
    </div>
  )
}

export default Result
