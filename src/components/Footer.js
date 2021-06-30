import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex flex-col-reverse justify-between pb-4 bg-blue-800 sm:p-0 sm:flex sm:flex-row w-100">
          <div className="flex flex-col justify-center text-center text-white sm:w-6/12 ">
            <div className="w-10/12 mx-auto sm:mr-2">
              <p className="pb-4 text-2xl font-semibold">
                Talk directly to a licensed Insurance agency in oyur area!
              </p>
              <span className="">
                We're dedicated to helping you find the right Medicare
                Supplement Insurance. If you're looking to lower your
                out-of-pocket expenses or expand you current Medicare coverage,
                we have Licensed Insurance Agents available to provide expert
                advice and guidance. Let us walk you through the process!
              </span>
            </div>
          </div>

          <div className="w-full mb-4 bg-center bg-no-repeat sm:m-0 sm:w-5/12 lg:bg-cover spa h-96 g-red-400 bg-couple"></div>
        </div>

        <div className="flex justify-around px-1 py-5 text-xs text-center text-white bg-gray-500 sm:w-full ">
          <span className="">
            Copyright &copy; 2021 SimpleMedicareCoverage. All rights reserved
          </span>
          <span className="">
            Disclaimer | Terms & Conditions | Contact us | Privacy Policy
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
