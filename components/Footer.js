import React from "react";
const Footer = () => {
  return (
    <div id="early" className="bg-[#fdfdfd]">
      <div className="flex flex-col items-center mt-[50px]">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-3xl font-semibold">Stay Up To Date</p>
          <div className="flex items-start flex-col gap-4">
            <form
              action="https://send.pageclip.co/QL4zR6QGILiCb55sRChBydgPTNBNSXq1/mailinglist"
              class="pageclip-form"
              method="post"
            >
              <input
                type="text"
                className="px-3 py-3 bg-white border-gray-400"
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
        <div className="flex flex-col gap-4 lg:items-start items-center mt-[50px]">
          <p className="h-10 text-sm font-bold">
            All rights reserved © baskett
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
