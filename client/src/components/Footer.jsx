import React from 'react';
import { assets } from '../assets/assets'; // If you have a logo or icons here

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-10 flex flex-col items-center justify-center px-4">
      {/* Logo or Brand */}
      <div className="mb-4">
        <img src={assets.logo} alt="Logo" className="w-24" />
      </div>

      {/* Links */}

      <p>Follow Us at</p>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-4">
        <a href="#" className="hover:text-fuchsia-500 transition"><img src={assets.google_plus_icon} alt="" /></a>
        <a href="#" className="hover:text-fuchsia-500 transition"><img src={assets.facebook_icon} alt="" /></a>
        <a href="#" className="hover:text-fuchsia-500 transition"><img src={assets.twitter_icon} alt="" /></a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
