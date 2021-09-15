import React from "react";
import BadgeProps from "./Interface/BadgesProps";

import BronzeBadge from "../assets/bronze.png"
import SilverBadge from "../assets/silver.png" 
import GoldenBadge from "../assets/golden.png" 

const Badges: React.FC<BadgeProps> = ({
  bronze,
  silver,
  golden,
}): JSX.Element => {
  return (
    <React.Fragment>
      <div className="border-2 border-orange-800 bg-black-900 w-52 h-72 rounded-lg flex justify-center items-center flex-col">
        <img src={BronzeBadge} alt="" className="w-28 mb-3" />
        <p className="text-white-900 mb-3">Bronze Badge</p>
        <h1 className="text-white-900 font-extrabold text-6xl">{bronze}</h1>
      </div>
      <div className="border-2 border-gray-500 bg-black-900 w-52 h-72 rounded-lg flex justify-center items-center flex-col">
        <img src={SilverBadge} alt="" className="w-28 mb-3" />
        <p className="text-white-900 mb-3">Silver Badge</p>
        <h1 className="text-white-900 font-extrabold text-6xl">{silver}</h1>
      </div>
      <div className="border-2 border-yellow-200 bg-black-900 w-52 h-72 rounded-lg flex justify-center items-center flex-col">
        <img src={GoldenBadge} alt="" className="w-28 mb-3" />
        <p className="text-white-900 mb-3">Golden Badge</p>
        <h1 className="text-white-900 font-extrabold text-6xl">{golden}</h1>
      </div>
    </React.Fragment>
  );
};

export default Badges