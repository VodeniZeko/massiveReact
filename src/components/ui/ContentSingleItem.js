import React from "react";
import classNames from "classnames";

import abstract from "../../assets/abstract.png";

const SingleSection = ({ item }) => {
  console.log(item);
  return (
    <div
      style={{ backgroundImage: "url(" + abstract + ")" }}
      className={classNames(
        "md:space-x-28 justify-center ml-1 text-center bg-left bg-no-repeat md:py-20 md:flex md:flex-row md:bg-contain ",
        {
          " flex flex-col md:flex-row-reverse bg-right bg-white":
            item.id % 2 === 0,
        },
        {
          "bg-blue-100": item.id % 2 !== 0,
        }
      )}
    >
      <div className=" flex mt-6 md:w-1/3 h-60">
        <img
          className="object-cover w-full sm:object-contain md:object-cover"
          src={item.image.src}
          alt={item.image.alt}
        />
      </div>

      <div className=" lg:text-left md:w-1/3">
        <p className="pb-2 text-xl font-semibold text-blue-800 md:text-3xl opacity-80">
          {item.title}
        </p>
        <p className="m-3 text-xs leading-6 lg:m-0 lg:w-10/12 lg:text-gray-500 md:text-md">
          {item.text}
        </p>
        <button
          className="w-20 py-1 text-xs font-bold text-white bg-yellow-600 rounded shadow lg:w-32 lg:mt-4 md:text-sm lg:text-md xl:text-xl hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
          type="button"
        >
          Find Plans
        </button>
      </div>
    </div>
  );
};

export default SingleSection;
