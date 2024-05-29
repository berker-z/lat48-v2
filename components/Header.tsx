import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="mt-5 h-24 flex items-center justify-center relative">
      <Dash className="absolute top-1/2 left-0 w-full " />

      <div className="flex w-full max-w-7xl justify-between items-end">
        <Image
          src="/rect2.svg"
          alt="Lat48 Logo"
          width={180}
          height={180}
          priority
          className="mt-3"
        />
        <p className="align-self-end mb-3 text-4xl text-lat-prim font-ubuntu">
          /home
        </p>
      </div>
    </nav>
  );
};

export default Header;
