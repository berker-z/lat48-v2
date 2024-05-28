import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="">
      <div>
        <div className="mt-10 h-24 flex items-center justify-center relative border">
          <Dash className="absolute top-1/2 left-0 w-full " />

          <div className=" flex flex-grow p-20 ">
            <Image
              src="/rect.svg"
              alt="Lat48 Logo"
              width={100}
              height={24}
              priority
            />
            lat47847474
          </div>
        </div>

        <p>lat484</p>
      </div>
    </nav>
  );
};

export default Header;
