import React from "react";
import Image from "next/image";
import Dash from "./Dash";
import DashedLine from "./DashedLine";
const Hero = () => {
  return (
    <section className="mt-32">
      {/*buraya scaling için flex-col gerekli*/}

      <div className="flex max-w-5xl sm:flex-col-reverse justify-between mx-auto gap-y-5">
        <div className=" flex notsm:w-1/2 flex-col justify-evenly text-3xl notsm:gap-y-5">
          <p className="sm:text-xl">
            Lat48 is a geographically distributed team of finance consultants
            and crypto vets skilled at building and scaling teams, and
            transforming legacy processes and systems.
          </p>

          <br />
          <a
            href="https://calendly.com/berker-lat48"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:mt-10 px-3 border rounded-lg p-1 ml-auto justify-end hover:text-lat-bg hover:bg-lat-prim"
          >
            <button className="">book a call</button>
          </a>
        </div>

        <div className="notsm:w-1/2 flex justify-end">
          <Image
            src="/hero.png"
            alt="An Image"
            width="400"
            height="400"
          ></Image>
        </div>
      </div>
      <DashedLine orientation="vertical" className="mt-20 mx-auto" />
      <div className=" justify-center max-w-3xl mx-auto">
        {/* <Image
          src="/latlog3.png"
          alt="Lat48 Logo"
          width={800}
          height={1000}
          priority
          className="mt-3 mx-auto"
        /> */}

        {/* <h2 className="text-3xl text-center  text-teal-200  border-b-2 w-fit mx-auto">
          Bespoke solutions bıdıbıdı
        </h2> */}
        <br />
        <h1 className=" text-4xl sm:text-2xl text-center">
          <br />
          Powering the disruptors, visionaries, and game-changing technologies
          bringing digital assets to the masses.
        </h1>
        <br />
        <DashedLine orientation="vertical" className="mt-20 mx-auto" />
        <br />
      </div>
    </section>
  );
};

export default Hero;
