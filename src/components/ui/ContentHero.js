import React, { useState } from "react";
import classNames from "classnames";

import seniorHippster from "../../assets/senior.jpg";
import doctor from "../../assets/young-doctor.jpg";

const ContentHero = () => {
  const [zip, setZip] = useState(" ");

  const handleInput = (event) => {
    setZip(event.target.value);
  };

  const submit = () => {
    setZip("");
  };
  return (
    <>
      <div className="w-full max-w-screen-xl ml-1 lg:flex lg:flex-row ">
        <div>
          <img
            className="bg-center bg-cover"
            src={seniorHippster}
            alt="senior hippster"
          />
        </div>

        <div className="flex justify-end -mt-8 md:m-0 sm:w-screen lg:w-11/12 lg:mr-10 max-w-10/12">
          <div className="container z-40 w-3/5 mx-auto lg:mt-14 lg:w-11/12">
            <form className="text-white bg-blue-700 rounded-lg shadow-md ">
              <div className="flex justify-center bg-blue-500 rounded-t-lg h-14 sm:h-28">
                <span className="self-center font-semibold text-md sm:text-2xl xl:text-4xl">
                  Find Medicare Coverage
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center py-4 text-sm sm:text-lg xl:text-2xl">
                  <p>
                    Compare <span className="font-bold">Medicare Plans</span>
                  </p>
                  <p>in one minute!</p>
                </div>

                <div className="flex flex-col items-center w-10/12 pt-3 pb-4 mb-6 bg-white rounded-lg sm:pt-6 sm:pb-8 sm:mb-12">
                  <label
                    for="something"
                    className="block mb-2 text-xs font-medium text-blue-700 sm:text-sm xl:text-md"
                  >
                    Enter Your Zip Code
                  </label>
                  <input
                    maxLength={5}
                    onChange={handleInput}
                    type="text"
                    value={zip}
                    placeholder={isNaN(zip) && "number only"}
                    className={classNames(
                      "w-11/12 h-10 py-2 text-xl text-center text-gray-700 border-2 border-black rounded appearance-none xl:h-14 focus:outline-none focus:bg-white",
                      {
                        "text-red-600 font-bold": isNaN(zip),
                      }
                    )}
                  />

                  <button
                    onClick={submit}
                    className="w-3/5 py-3 mt-4 text-xs font-bold text-white bg-yellow-600 rounded shadow sm:text-sm sm:w-9/12 lg:text-lg xl:text-3xl hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-screen-xl ml-1 -m-20 bg-blue-100 h-36 md:h-72">
        <img
          alt="doctor"
          className="inset-0 z-0 w-full bg-center bg-cover h-36 md:h-72 opacity-40"
          src={doctor}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex w-full px-24 md:flex-col">
            <p className="mb-4 text-sm font-semibold text-blue-800 opacity-0 md:text-4xl md:opacity-80 ">
              Find & Compare Your Local <br /> Plans and Providers Fast
            </p>
            <p className="text-gray-500 opacity-0 text-md md:opacity-100">
              {" "}
              Let us help you find the right Medicare Supplement Coverage plan
              for you. In less than <br /> 1 minute you could be saving your
              deductibles, co-pays and Medicare bills
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHero;
