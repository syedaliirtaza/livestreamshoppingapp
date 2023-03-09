import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";

const Features = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[100px] mb-[100px]">
        <img src="/assets/buyerr.svg" alt="" />
        <div className="flex flex-col gap-5 items-start lg:w-[50%]">
          <p className="text-primary font-medium text-lg items-start">
            Features
          </p>
          <p className="text-4xl font-bold items-start">For Buyers</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/budget.svg" alt="" />
              <p className="text-2xl font-semibold">Live Shopping</p>
            </div>

            <p>
              Shop in real-time and get personalized product recommendations
              with our live video streaming feature.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/b2.svg" alt="" />
              <p className="text-2xl font-semibold">
                Interactive Product Display
              </p>
            </div>

            <p>
              Get a 360-degree view of your favorite products and shop with ease
              on our app.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/b3.svg" alt="" />
              <p className="text-2xl font-semibold">Easy Checkout</p>
            </div>
            <p>
              Shop with ease and convenience with our easy checkout options and
              get your products delivered in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
