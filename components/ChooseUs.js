import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const ChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-[100px] gap-[100px] mb-[100px]">
        <div className="flex flex-col gap-5 items-start lg:w-[50%]">
          <p className="text-primary font-medium text-lg items-start">
            Features
          </p>
          <p className="text-4xl font-bold items-start">For Sellers</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/budget.svg" alt="" />
              <p className="text-2xl font-semibold">Easy Product Listing</p>
            </div>

            <p>
              Sell your products hassle-free and reach a wider audience with our
              live stream selling feature.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/b2.svg" alt="" />
              <p className="text-2xl font-semibold">Order Management</p>
            </div>

            <p>
              Manage your orders like a pro with our order management feature
              and provide a seamless shopping experience to your customers.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/b3.svg" alt="" />
              <p className="text-2xl font-semibold">Analytics and Insights</p>
            </div>

            <p>
              Make data-driven decisions and grow your business with our
              powerful analytics and insights feature.
            </p>
          </div>
        </div>
        <img src="/assets/seller.svg" alt="" />
      </div>
    </div>
  );
};

export default ChooseUs;

// <div className="flex flex-col gap-5 items-start">
//           <p className="text-primary font-medium text-lg items-start">
//             Advantage
//           </p>
//           <p className="text-4xl font-bold items-start">Order Management</p>
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-3">
//               <img src="/assets/bell.svg" alt="" />
//               <p className="text-2xl font-semibold">Clever Notifications</p>
//             </div>

//             <p>
//               Receive and process orders seamlessly, <br />
//               track order fulfillment status, and manage customer returns and
//               refunds <br />
//               Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
//               Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
//               Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
//             </p>
//           </div>
//         </div>
