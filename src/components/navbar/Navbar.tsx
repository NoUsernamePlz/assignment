"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoPlayCircleOutline } from "react-icons/io5";
import { ModeToggle } from "../Toogle";
const NavLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/",
  },
  {
    label: "Pricing",
    link: "/",
  },
  {
    label: "Features",
    link: "/",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" h-[80px]  top-0 left-0 w-full fixed z-50">
      <div className="max-w-7xl w-full mx-auto md:flex items-center justify-between max-md:px-10 z-50 bg-white dark:bg-transparent py-2">
        <div className=" flex items-center gap-8">
          <div className="relative h-[53px] w-[170px]">
            <Image
              src="/home/logo.png"
              fill
              alt="logo"
              quality={100}
              className="object-contain mr-8"
            />
          </div>

          {show == false ? (
            <IoMenu
              className="h-6 w-6 absolute top-5 right-5 md:hidden z-50"
              onClick={() => setShow(!show)}
            />
          ) : (
            <RxCross2
              className="h-6 w-6 absolute top-5 right-5 md:hidden z-50"
              onClick={() => setShow(!show)}
            />
          )}

          {NavLinks.map((el, i) => (
            <Link href={el.link} key={i} className="hidden md:block hover:text-[#FF5555]">
              {el.label}
            </Link>
          ))}
        </div>

        <button className="w-[180px] h-[60px] bg-[#000000] text-white hidden md:block hover:bg-[#FF5555] hover:scale-110 ease-in-out duration-300">
          Download
        </button>

        {show && (
          <div className="h-[400px] w-full bg-white  flex flex-col gap-5 px-16 absolute top-[80px] z-50 left-0 ">
            {NavLinks.map((el, i) => (
              <Link href={el.link} key={i} className=" md:hidden">
                {el.label}
              </Link>
            ))}

            <button className="w-[180px] h-[60px] bg-[#000000] text-white  md:hidden hover:scale-110 hover:bg-[#FF5555] ease-in-out duration-300">
              Download
            </button>
            
          </div>
        )}
        <div className="absolute md:top-4 top-20 right-5">
        <ModeToggle/>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
