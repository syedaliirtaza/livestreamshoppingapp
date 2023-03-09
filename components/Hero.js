import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="flex flex-col mt-[50px] mb-[50px] lg:w-[50%] lg:mt-[100px] lg:mb-[100px]">
          <p className="text-6xl font-bold">
            Shop <span className="text-red-500">Live</span> <br />
            Feel ALive
          </p>
          <p className="mt-[20px] mb-[20px]">
            baskett enables users to buy their favourite products by watching
            and interacting with live stream. Shopping online has never been
            easier or more enjoyable!
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 hover:bg-primary border-none">
              <Link to="seller" smooth="true">
                Become a Seller
              </Link>
            </button>
            <div className="flex gap-3 cursor-pointer items-center">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl font-medium">Watch</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/hhhhero.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <img className="h-[350px]" src="/assets/downhero.svg" alt="" />
