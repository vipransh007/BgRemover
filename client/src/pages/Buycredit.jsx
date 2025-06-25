import React from 'react'
import { assets, plans } from '../assets/assets'

function Buycredit() {
  return (
    <div className='min-h-[80vh] text-center py-14 mb-10'>
     <button className='border border-gray-400 px-10 py-2 rounded-full animate-pulse'>Our Plans</button>
     <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 mb-6 sm:mb-10'>Choose The Right Plans For you</h1>
     <div className='flex flex-wrap justify-center items-center gap-8 mx-4 lg:mx-44'>
      {plans.map((item, index) => (
        <div className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 hover:scale-105 transition-all duration-500 mb-6 sm:mb-10' key={index}>
          <img widht='30' src={assets.logo_icon} alt="" />
          <p className='mt-3 font-bold'>{item.id}</p>
          <p className='text-sm'>{item.desc}</p>
          <p className='mt-6'>
            <span className='text-3xl font-bold'>
              ${item.price}
            </span> / {item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8  text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
        </div>
      ))
        }
     </div>

    </div>
  )
}
// completed and finished and done 8=====D

// completed and finished and done 8=====D

export default Buycredit
