import React from "react";

export function App() {
  return (
    <div class="container max-w-screen-xl px-10 mx-auto ">
      <div class="flex px-10 mt-10 h-28">
        <div class="hidden w-3/6 ml-20 sm:flex">
          <div class="flex flex-col ">
            <div class="h-2 text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mt-1.5 ml-5 opacity-70 md:w-9 md:h-9 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <i class="text-5xl text-green-600 las la-hand-holding md:text-6xl"></i>
          </div>
          <div class="pt-1 font-bold ">
            <p class="text-2xl md:text-3xl">SIMPLE</p>
            <p class="text-xl leading-3 md:leading-4 md:text-2xl">
              mediacoverage
            </p>
          </div>
        </div>

        <div class="flex pt-2 mx-auto sm:justify-end sm:w-3/6 item-center">
          <div class="flex flex-col p-2">
            <i class="text-5xl text-blue-900 las la-phone-volume"></i>
          </div>
          <div class="pt-1 font-bold text-indigo-900">
            <p class="text-1xl md:text-2xl">866-368-7202</p>
            <p class="text-xs ">
              <span class="text-xl leading-3 text-blue-900">•</span> Live Agents
              Available Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
