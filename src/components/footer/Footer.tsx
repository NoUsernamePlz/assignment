import Image from "next/image";
import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
const Links = [
  {
    label: "Home",
  },
  {
    label: "About Us",
  },
  {
    label: "Bookings",
  },
  {
    label: "Blog",
  },
];

const Legal = [
  {
    label: "Terms Of Use",
  },
  {
    label: "Privacy Policy",
  },
  {
    label: "Cookie Policy",
  },
];

const product = [
  {
    label: "Take Tour",
  },
  {
    label: "Live Chat",
  },
  {
    label: "Reviews",
  },
];

const Footer = () => {
  return (
    <div className=" max-w-7xl mx-auto max-lg:p-4 max-md:gap-8 w-full">
      <div className="flex md:flex-row flex-col items-start justify-between max-w-7xl mx-auto max-lg:p-4 max-md:gap-8">
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="relative w-[117px] h-[34px]">
            <Image
              src="/home/logo.png"
              fill
              alt="logo"
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-4 pt-4">
            <TbMailFilled className="text-[#FF5555]" />
            help@frybix.com
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#FF5555]" />
            +1 234 456 678 89
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="text-[32px] font-medium pb-4">Link</h1>
          {Links.map((el, i) => (
            <div key={i}>{el.label}</div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="text-[32px] font-medium pb-4">Legal</h1>
          {Legal.map((el, i) => (
            <div key={i}>{el.label}</div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="text-[32px] font-medium pb-4">Product</h1>
          {product.map((el, i) => (
            <div key={i}>{el.label}</div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-3 max-lg:w-[20%]">
          <h1 className="text-[32px] font-medium pb-4">Newsletter</h1>
          <span>Stay up to date</span>
          <div className="flex  px-1">
            <input
              type="text"
              className="focus:border-0 border-none placeholder:text-[#81848A] h-[60px] p-1"
              placeholder="your email"
            ></input>
            <button className="lg:w-[160px] w-[100px] h-[60px] bg-black text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="h-[1.5px] bg-gradient-to-r from-transparent via-black to-transparent w-full my-10" />
      <h5 className="py-6 mx-auto font-medium text-center w-full">
        Copyright 2022 uifry.com all rights reserved
      </h5>
    </div>
  );
};

export default Footer;
