import React from 'react'
import SadFace from "../assets/sad-face.png"

const Error = () => {
    return (
      <div className="flex w-full h-96 min-h-lg justify-center items-center text-white-900 text-center flex-col mt-32">
        <img src={SadFace} alt="" className="w-32 sm:w-72" />
        <p className= "text-2x1 sm:text-3xl">
          Some Error has occured while fetching data make sure user really
          exists or reload page
        </p>
      </div>
    );
}

export default Error     