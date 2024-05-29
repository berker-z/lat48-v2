import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import { MdOutlineEmail, MdMail } from "react-icons/md";

import {
  PiTelegramLogoDuotone,
  PiTelegramLogoFill,
  PiLinkedinLogo,
  PiLinkedinLogoFill,
  PiDiscordLogoFill,
  PiDiscordLogo,
  PiCalendarCheckDuotone,
  PiCalendarCheckFill,
} from "react-icons/pi";
import {
  FaTelegramPlane,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="mb-5  mt-10 h-24 flex items-center justify-center relative">
      <Dash className="absolute top-1/2 left-0 w-full " />

      <div className="flex w-full max-w-7xl justify-between items-end">
        <ul className="  items-center flex text-4xl gap-x-2">
          <li className="group relative w-min">
            <a
              href={"https://t.me/berkerz"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <PiTelegramLogoDuotone className="logo_sil" />
              <PiTelegramLogoFill className=" logo_full" />
            </a>
          </li>
          <li className="group relative w-min">
            <a
              href={"https://www.linkedin.com/in/cryptofinomic/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <PiLinkedinLogo className="logo_sil" />
              <PiLinkedinLogoFill className=" logo_full" />
            </a>
          </li>
          <li className="group relative w-min">
            <a href={"berker.zor"} className="flex items-center">
              <MdOutlineEmail className="logo_sil" />
              <MdMail className=" logo_full" />
            </a>
          </li>
          <li className="group relative w-min">
            <a href={"https://discord.com"} className="flex items-center">
              <PiDiscordLogo className="logo_sil" />
              <PiDiscordLogoFill className=" logo_full" />
            </a>
          </li>
          <li className="group relative w-min">
            <a href={"https://calendly.com"} className="flex items-center">
              <PiCalendarCheckDuotone className="logo_sil" />
              <PiCalendarCheckFill className=" logo_full" />
            </a>
          </li>
        </ul>

        <div className="flex">
          <p className="self-end  text-3xl text-lat-prim font-ubuntu sm:hidden">
            lat48 is part of Meld Collective.
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
