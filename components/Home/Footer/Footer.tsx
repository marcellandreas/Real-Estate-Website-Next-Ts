import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaHouse, FaX } from "react-icons/fa6";

function Footer() {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-4/5 mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* 1 */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
              <FaHouse />
            </div>
            <h1 className=" text-white font-bold text-sm sm:text-base md:text-xl">
              Homehub
            </h1>
          </div>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            minima ea ipsam.
          </p>
          <p className=" text-gray-300 mt-4 font-semibold">example@gmai.com</p>
          <p className=" text-gray-300 mt-2 font-semibold">+123</p>
          {/* sosila media */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebook className="w-6 h-6 text-blue-600" />
            <FaX className="w-6 h-6 text-white" />
            <FaYoutube className="w-6 h-6 text-red-600" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        {/* 2 */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Popular Search</h1>
          <p className="footer__link">Appartment Low to High</p>
          <p className="footer__link">Appartment For Rent</p>
          <p className="footer__link">Offices For Buy</p>
          <p className="footer__link">Offices For Rent</p>
        </div>
        {/* 3 */}
        <div className="lg:mx-auto">
          <h1 className="footer__heading">Quick Link</h1>
          <p className="footer__link">Terms of use</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Pricing Plan</p>
          <p className="footer__link">Our Services</p>
          <p className="footer__link">Contact Support</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">Faq</p>
        </div>
        {/* 4 */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Discover</h1>
          <p className="footer__link">Miami</p>
          <p className="footer__link">Los Angeles</p>
          <p className="footer__link">Chicago</p>
          <p className="footer__link">New York</p>
          <p className="footer__link">London</p>
        </div>
      </div>
      <p className="text-center mt-4 text-base text-white opacity-70">
        @copyright 2024 by - Marcell
      </p>
    </div>
  );
}

export default Footer;
