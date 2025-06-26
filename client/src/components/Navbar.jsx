import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/Appcontext.jsx';

function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const {credit , loadCreditData } = useContext(AppContext);
  useEffect(() => {
    if(isSignedIn)
    {
    loadCreditData()
    }
  },[isSignedIn]) 

  return (
    <div className='flex justify-between items-center mx-4 py-3 lg:mx-44'>
      <Link to='/'>
        <img className='w-32 sm:w-44' src={assets.logo} alt='Logo' />
      </Link>

      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button className='flex item-center gap-2 bg-blue-100 sm:px-5 py-1.5 sm:py-2 rounded-full hover:scale-105 transition-all duration-700'>
            <img className='w-8' src={assets.credit_icon} alt="" />
            <p className='text-xs sm:text-sm font-bold text-gray-600 py-1'>Credits : {credit}</p>
          </button>
          <p className='text-black max-sm:hidden '> Hi, {user.firstName}</p>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({ afterSignInUrl: '/' })}
          className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full hover:bg-zinc-700 transition-all duration-300'
        >
          Get Started
          <img className='w-3 sm:w-4' src={assets.arrow_icon} alt='Arrow' />
        </button>
      )}
    </div>
  );
}

export default Navbar;
