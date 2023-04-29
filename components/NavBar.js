import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className=" ">
      <div className="container mx-auto py-2 flex flex-row justify-between items-center">
        <div className="flex items-center gap-10">
          <p className="text-3xl font-bold">baskett</p>
        </div>
        <button className="btn btn-active rounded-none hover:bg-primary border-none capitalize">
          <Link href="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
};
export default NavBar;
