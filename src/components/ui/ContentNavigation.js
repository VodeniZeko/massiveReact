import React from "react";

const ContentNavigation = ({ text }) => {
  return (
    <>
      {
        <div class="flex w-full pt-20 text-center text-white ">
          <div class="flex-grow w-16 h-16 py-2 bg-blue-500 md:h-20 md:py-3 ">
            <p class="text-xs font-semibold sm:text-sm md:text-xl">{text}</p>
            <a
              href="www.google.com"
              class="text-xs underline cursor-pointer font-extralight md:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      }
    </>
  );
};

export default ContentNavigation;
