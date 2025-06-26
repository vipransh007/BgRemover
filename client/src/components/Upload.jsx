import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/Appcontext';

function Upload() {

  const {removeBg} = useContext(AppContext);

  return (
    <div className="pb-20 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-all duration-500">
        See The Magic. Try Now <br />For FREE !!
      </h1>

      {/* Upload Button */}
      <div className="mt-8">
        <input onChange={e => removeBg(e.target.files[0])} type="file"  accept='image/*' id="upload2" hidden />
        <label
          htmlFor="upload1"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-pink-700 to-fuchsia-500 hover:scale-105 transition-all duration-700"
        >
          <img className="w-5" src={assets.upload_btn_icon} alt="upload" />
          <p className="text-white text-sm">Upload Your Image</p>
        </label>
      </div>
    </div>
  );
}

export default Upload;
