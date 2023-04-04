import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const data = [
  {
    icons: <FaFacebookF />,
  },
  {
    icons: <FaTwitter />,
  },
  {
    icons: <FaLinkedinIn />,
  },
  {
    icons: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <div>
      <div className="footer my-10">
        {/* News letter */}
        <div className="newsletter bg-[#f8f9fb] w-full py-10 shadow-lg">
          <p className="font-bold text-2xl mb-4 ml-10">
            Subscribe to newsletter
          </p>
          <div className="flex gap-10 justify-between mx-10">
            <input
              type="text"
              className="border-2 h-12 w-full pl-5 outline-none"
              placeholder="Enter your email"
            />
            <button className="bg-[#F9A618] rounded-full w-72 font-bold text-xs text-white hover:text-[#f9a618] hover:bg-white shadow-2xl">
              SUBSCRIBE
            </button>
          </div>
        </div>
        {/* footer icons */}
        <div className="mainfooter ml-10 flex flex-col justify-center items-center mt-24">
          <div className="socials flex gap-3 items-center p-3">
            {data.map((val, i) => {
              return (
                <div className="bg-gray-400 rounded-xl p-3 text-sm hover:bg-[#F9A618] hover:text-white cursor-pointer">
                  {val.icons}
                </div>
              );
            })}
          </div>
          <div className="copyright mt-5">
            <p className="text-gray-500">
              Copyright &#169; 2023 All rights reserved | This template is made
              with by Colorlib
            </p>
          </div>
          <div className="terms flex mt-5 text-gray-500 gap-3 cursor-pointer">
            <a href="#">
              <p className="hover:border-b-4 hover:border-[#f9a618] translate-x-0 ease-in-out duration-300">
                Terms & Conditions
              </p>
            </a>
            /
            <a href="#">
              <p className="hover:border-b-4 hover:border-[#f9a618]  translate-x-0 ease-in-out duration-300">
                Privacy Policy
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
