import React from "react";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div className=" ">
      <div className="container mx-auto py-2 flex flex-row justify-between items-center">
        <div className="flex items-center gap-10">
          <p className="text-3xl font-bold">baskett</p>
        </div>
        <button className="btn btn-active rounded-none hover:bg-primary border-none capitalize">
          <a href="/signup">Our Waitlist</a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;

// <img src="assets/logo.svg" alt="" />
// <Link href="/" className="text-gray-800 font-medium text-lg">
// About
// </Link>
// <Link href="/" className="text-gray-800 font-medium text-lg">
// Pricing
// </Link>
// <Link href="/" className="text-gray-800 font-medium text-lg">
// Features
// </Link>
