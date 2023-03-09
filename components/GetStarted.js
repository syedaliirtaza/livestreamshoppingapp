import React from "react";
import { AiFillApple } from "react-icons/ai";
import Image from "next/Image";
const GetStarted = () => {
  return (
    <div id="seller" className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center bg-black  py-5 lg:py-10 lg:mt-[100px]">
        <div className="flex flex-col gap-4 pl-4 lg:pl-20 text-center">
          <p className="text-4xl font-bold text-white">Get Early Access</p>
          <p className="text-white">
            Our early seller access program has just opened <br />
            Apply Now
          </p>
          <div className="flex items-start flex-col gap-2">
            <form
              action="https://send.pageclip.co/QL4zR6QGILiCb55sRChBydgPTNBNSXq1/seller-list"
              class="pageclip-form"
              method="post"
            >
              <input
                type="text"
                className="px-3 py-3 bg-white lg:w-full mt-2 mb-2"
                placeholder="Enter your name"
                name="name"
                required
              />
              <br />
              <input
                type="email"
                className="px-3 py-3 bg-white lg:w-[300px] mt-2 mb-2"
                name="email"
                placeholder="Enter your email"
                required
              />
              <br />
              <input
                type="number"
                name="Number"
                className="px-3 py-3 lg:w-[300px] bg-white mt-2 mb-2"
                placeholder="Enter your phone number"
                required
              />
              <br />
              <button
                type="submit"
                className="pageclip-form__submit bg-white mt-[20px] w-[50%] text-black btn border-none flex gap-2 items-center capitalize hover:bg-primary"
              >
                Become a Seller
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
