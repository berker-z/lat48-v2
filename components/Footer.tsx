import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Footer = () => {
  return (
    <nav className="mt-5 h-24 flex items-center justify-center relative border border-red-200">
      <Dash className="absolute top-1/2 left-0 w-full " />

      <div className="flex w-full max-w-6xl justify-between items-end">
        <p className="align-self-end mb-3 text-4xl text-lat-prim font-ubuntu">
          / home
        </p>
        <div className="flex">
          <p className="self-end mb-3 text-xl text-lat-prim font-ubuntu">
            Lat48 is babadabada.
          </p>
          <Image
            src="/rect.svg"
            alt="Lat48 Logo"
            width={100}
            height={100}
            priority
            className="mt-3"
          />
        </div>
      </div>
    </nav>
  );
};
export default Footer;
