import React from "react";
import UserProps from "./Interface/UserProps";

const Container: React.FC<UserProps> = ({
  username,
  reputation,
  location,
  image,
  WebComponent,
  Badges
}): JSX.Element => {
  return (
    <div className="w-full min-h-full flex justify-center items-center relative">
      <div className="bg-gray-800 w-5/6 min-h-full max-h-full rounded-lg flex relative justify-center flex-col items-center lg:flex-row md:min-h-3/4">
        <div className="w-56 h-80 flex flex-col justify-center items-center lg:w-2/3 lg:min-h-3/4 ">
          <div className="w-64 h-64 rounded-full border-black-900 border-4 relative overflow-hidden sm:w-80 sm:h-80">
            <img src={image} alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full min-h-3/4 relative">
          <div className="w-full  h-52 flex flex-col text-center justify-center items-center sm:flex-row md:text-left">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="text-4xl text-white-900 mt-5 font-extrabold italic sm:text-5xl">
                {username}
              </h1>
              <h4 className="text-2xl text-white-900 mt-5 font-semibold">
                {location}
              </h4>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="text-4xl text-orange-200 mt-5 font-extrabold italic sm:text-5xl">
                Reputations
              </h1>
              <h4 className="text-5xl text-orange-400 mt-5 font-semibold">
                {String(reputation).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h4>
            </div>
          </div>
          <div className="h-96 w-full relative text-center md:text-left mt-5 md:mt-0 text-sm sm:text-lg">
            {WebComponent}
            <div className="w-full min-h-full grid grid-cols-1 place-items-center gap-2 pt-10 md:grid-cols-3">
              {Badges}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
