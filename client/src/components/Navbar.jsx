import React from 'react';
import { assets } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <div className='flex justify-between items-center mx-4 py-3 lg:mx-44'>
      <Link to='/'>
        <img className='w-32 sm:w-44' src={assets.logo} alt='Logo' />
      </Link>

      {isSignedIn ? (
        <div className="flex items-center">
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
