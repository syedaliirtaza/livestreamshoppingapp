import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div id="early" className="bg-[#fdfdfd] lg:mt[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10">
        <div className="flex flex-col gap-4 items-start">
          <p className="h-10 text-3xl font-bold">baskett.</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold">Legal</p>
          <p className="text-xl font-medium">Terms Of Use</p>
          <p className="text-xl font-medium">Privacy Policy</p>
          <p className="text-xl font-medium">Cookie Policy</p>
          <p className="text-xl font-medium">Blog</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold">Early Access</p>
          <p className="text-xl font-medium w-[10em]">Stay Up To Date</p>
          <div className="flex items-start flex-col gap-2">
            <form
              action="https://send.pageclip.co/QL4zR6QGILiCb55sRChBydgPTNBNSXq1/mailinglist"
              class="pageclip-form"
              method="post"
            >
              <input
                type="text"
                className="px-3 py-3 bg-white"
                placeholder="Your email"
                name="email"
                required
              />
              <button className=" pageclip-form__submit bg-black mt-2 w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <div className="flex flex-col gap-4 items-start">
//           <p className="text-4xl font-semibold">Links</p>
//           <p className="text-xl font-medium">Home</p>
//           <p className="text-xl font-medium">About</p>
//           <p className="text-xl font-medium">Booking</p>
//           <p className="text-xl font-medium">Blog</p>
//         </div>
//         <div className="flex flex-col gap-4 items-start">
//           <p className="text-4xl font-semibold">Legal</p>
//           <p className="text-xl font-medium">Terms Of Use</p>
//           <p className="text-xl font-medium">Privacy Policy</p>
//           <p className="text-xl font-medium">Cookie Policy</p>
//           <p className="text-xl font-medium">Blog</p>
//         </div>
//         <div className="flex flex-col gap-4 items-start">
//           <p className="text-4xl font-semibold">Product</p>
//           <p className="text-xl font-medium">Take Tour</p>
//           <p className="text-xl font-medium">Live Chat </p>
//           <p className="text-xl font-medium">Reviews</p>
//         </div>
