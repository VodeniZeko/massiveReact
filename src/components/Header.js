import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container w-full max-w-screen-xl px-10 mx-auto ">
        <div className="flex px-10 mt-10 h-28">
          <div className="hidden w-3/6 ml-20 sm:flex">
            <div className="flex flex-col ">
              <div className="h-2 text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1.5 ml-5 opacity-70 md:w-9 md:h-9 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <i className="text-5xl text-green-600 las la-hand-holding md:text-6xl"></i>
            </div>
            <div className="pt-1 font-bold ">
              <p className="text-2xl md:text-3xl">SIMPLE</p>
              <p className="text-xl leading-3 md:leading-4 md:text-2xl">
                mediacoverage
              </p>
            </div>
          </div>

          <div className="flex pt-2 mx-auto sm:justify-end sm:w-3/6 item-center">
            <div className="flex flex-col p-2">
              <i className="text-5xl text-blue-900 las la-phone-volume"></i>
            </div>
            <div className="pt-1 font-bold text-indigo-900">
              <p className="text-1xl md:text-2xl">866-368-7202</p>
              <p className="text-xs ">
                <span className="text-xl leading-3 text-blue-900">•</span> Live
                Agents Available Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
