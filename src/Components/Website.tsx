import React from "react";
import WebProp from "./Interface/WebProp";

const WebComponent: React.FC<WebProp> = ({ website }): JSX.Element => {
  return (
    <div className="w-full ">
      <h4 className="text-white-900 text-bold text-2xl">
        Personal Website:{" "}
        <a
          href={website}
          className="text-orange-200 hover:text-red-500 text-center w-full  text-sm md:text-lg md:text-left"
          target="_blank"
          rel="noreferrer"
        >
          {website}
        </a>
      </h4>
    </div>
  );
};

export default WebComponent;
