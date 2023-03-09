import React from "react";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="container mx-auto">
      <p className="text-center font-bold text-4xl mt-10">Why choose us?</p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <img src="/assets/testimonial.png" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-3xl font-semibold">
            The Best Live Shopping <br /> App Ever!
          </p>
          <p className="text-base text-gray-600">
            Experience the future of shopping with our live stream shopping app.
            With 360 degree product views and live streaming features, <br />
            you can see exactly what you&apos;re buying and get all your
            questions answered in real time. <br />
            Try Now for the ultimate live stream shopping experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
