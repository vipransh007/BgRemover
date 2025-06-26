import React from 'react'
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

function Result() {
  const { resultImage, image, setImage, SetResultImage } = useContext(AppContext);
  const navigate = useNavigate();

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'bg-removed.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tryAnother = () => {
    setImage(false);
    SetResultImage(false);
    navigate('/');
  };

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-44 min-h-[75vh]">
      <div className="">
        {/* Image Container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* left */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img src={image ? URL.createObjectURL(image) : ''} className='rounded-md border' alt="" />
          </div>

          {/* right */}
          <div className='flex flex-col '>
            <p className='font-semibold text-gray-600 mb-2'>Result</p>
            <div className='rounded-md border border-gray-300 h-full bg-layer relative overflow-hidden'>
              <img src={resultImage ? resultImage : ''} alt="" />
              {
                !resultImage && image && (
                  <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                    <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>

      {/* Buttons for redo or download */}
      { resultImage && <div className='flex justify-center sm:justify-end items-center gap-4 mt-8'>
        <button onClick={tryAnother} className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try Another Image</button>
        <button onClick={downloadImage} className='px-8 py-2.5 text-white text-sm border bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'>Download Image</button>
      </div>
}
    </div>
  )
}

export default Result;
