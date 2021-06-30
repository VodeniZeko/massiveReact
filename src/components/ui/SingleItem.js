import React from "react";

const SingleSection = ({ item }) => {
  console.log(item);
  return (
    <div class="justify-center ml-1 text-center bg-left bg-no-repeat md:py-20 md:flex md:flex-row md:bg-contain bg-abstract">
      <div class="flex mt-6 md:w-1/3 h-60">
        <img
          class="object-cover w-full sm:object-contain md:object-cover"
          src={item.image.src}
          alt={item.image.alt}
        />
      </div>

      <div class="container lg:text-left md:w-1/3">
        <p class="pb-2 text-xl font-semibold text-blue-800 md:text-3xl opacity-80">
          {item.title}
        </p>
        <p class="m-3 text-xs leading-6 lg:m-0 lg:w-10/12 lg:text-gray-500 md:text-md">
          {item.text}
        </p>
        <button
          class="w-20 py-1 text-xs font-bold text-white bg-yellow-600 rounded shadow lg:w-32 lg:mt-4 md:text-sm lg:text-md xl:text-xl hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
          type="button"
        >
          Find Plans
        </button>
      </div>
    </div>
  );
};

export default SingleSection;
