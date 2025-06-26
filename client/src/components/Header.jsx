import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'

function Header() {

  const {removeBg} = useContext(AppContext)

  return (
<div className="flex max-sm:flex-col-reverse justify-between items-start gap-y-10 px-3 mt-10 lg:px-44 sm:mt-20 lg:mt-32">
  {/* Left Side */}
  <div className="w-full lg:w-1/2 pr-4">
    <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
      Remove The <br className="max-md:hidden" />
      <span className="bg-gradient-to-l from-pink-700 to-fuchsia-500 bg-clip-text text-transparent">
        BackGround
      </span>{" "}
      From the <br className="max-md:hidden" />
      Images For Free
    </h1>

    <p className="my-6 text-[15px] text-gray-500">
      dasjgdvbashd as dbasdbasdjvadavs <br className="max-sm:hidden" />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
      Esse quos voluptas fuga blanditiis sapiente. Amet ex <br />
      doloremque reiciendis ipsa incidunt dicta aspernatur
    </p>

    <div>
      <input onChange={e => removeBg(e.target.files[0])} type="file" accept='image/*' id="upload1" hidden />
      <label
        className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-pink-700 to-fuchsia-500 hover:scale-105 transition-all duration-700"
        htmlFor="upload1"
      >
        <img className="w-5" src={assets.upload_btn_icon} alt="" />
        <p className="text-white text-sm">Upload Your Image</p>
      </label>
    </div>
  </div>

{/* Right Side */}
<div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-6">
  <img
    src={assets.header_img}
    alt=""
    className="w-full max-w-md object-contain animate-pulse transition-all duration-1 hover:scale-105"
  />
</div>

</div>

  )
}

export default Header
