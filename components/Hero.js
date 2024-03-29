import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import Link from "next/link";
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
            easier or more enjoyable
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center hover:bg-primary border-none">
              <Link href="/signup">Signup Now</Link>
            </button>
            <div className="flex ml-[10px] cursor-pointer items-center">
              <MdSlowMotionVideo className="text-3xl mr-[10px]" />
              <p className="text-xl font-medium">Launching Soon</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/hhhhero.svg" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
