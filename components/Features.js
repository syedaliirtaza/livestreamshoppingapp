import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center mt-[100px] mb-[100px]">
        <img src="/assets/buyerr.svg" alt="" />
        <div className="flex flex-col mt-[50px] items-start lg:w-[50%]">
          <p className="text-primary font-medium text-lg items-start">
            Features
          </p>
          <p className="text-4xl font-bold items-start">For Buyers</p>
          <div className="flex flex-col mt-[20px]">
            <div className="flex items-center">
              <img src="/assets/budget.svg" alt="" />
              <p className="text-2xl font-semibold ml-[20px]">Live Shopping</p>
            </div>

            <p>
              Shop in real-time and get personalized product recommendations
              with our live video streaming feature.
            </p>
          </div>
          <div className="flex flex-col mt-[20px]">
            <div className="flex items-center">
              <img src="/assets/b2.svg" alt="" />
              <p className="text-2xl font-semibold ml-[20px]">
                Interactive Product Display
              </p>
            </div>

            <p>
              Get a 360-degree view of your favorite products and shop with ease
              on our app.
            </p>
          </div>
          <div className="flex flex-col mt-[20px]">
            <div className="flex items-center ">
              <img src="/assets/b3.svg" alt="" />
              <p className="text-2xl font-semibold ml-[20px]">Easy Checkout</p>
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
