import React from "react";
import Image from "next/image";
import Dash from "./Dash";
const Hero = () => {
  return (
    <section className="mt-12">
      {/*buraya scaling için flex-col gerekli*/}
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col justify-evenly text-2xl">
          <h1>TEXT BURAYA</h1>
          <p>
            Consulting services for developing complex and/or technical
            projects, providing actionable recommendations and strategy across
            verticals, facilitating connections to high impact service providers
            or subject experts that create long-term strategic and ecosystem
            partners.
          </p>
          <Dash />
          <br />
          <button className="border rounded-lg p-1 ml-auto justify-end">
            book a call
          </button>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image
            src="/hero.png"
            alt="An Image"
            width="400"
            height="400"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
