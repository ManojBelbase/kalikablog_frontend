import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ show, setShow }) => {
  return (
    <div>
      <nav className="h-20 grid grid-cols-3 border-b-2 place-content-center ">
        <div className="left place-content-center grid relative">
          <BiSearch className="absolute left-28 top-3 text-xl" />
          <input
            type="search"
            placeholder="search.."
            className="border-2 border-gray-800 rounded-3xl h-10 outline-none pl-12 pr-2"
          />
        </div>
        <div className="left text-xl font-bold text-center m-auto">
          MAGDESIGN
        </div>
        <div className="left grid grid-cols-2 place-content-center">
          <div className="socials flex justify-around items-center px-9">
            <AiOutlineTwitter />
            <FaFacebookF />
            <AiOutlineInstagram />
          </div>
          <div className="hamberger flex justify-around">
            <GiHamburgerMenu
              className="text-3xl"
              onClick={() => {
                setShow(true);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
