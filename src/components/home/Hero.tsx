import Image from "next/image";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full min-h-screen md:h-max-[1000px]  md:h-full h-auto md:flex items-center relative">
        <div className=' absolute left-0 top-[10%]'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div> 
      <div className="md:w-[50%] flex flex-col gap-5 mt-10">
        <h3 className="md:text-[64px] text-5xl font-bold leading-tight z-10 mt-16">
          make the best financial decisions
        </h3>
        <div className="absolute top-16 left-[20%]  z-0">
           <div className="relative w-[300px] h-[230px]">
            <Image
            src="/home/spot.png"
            fill
            alt="color"
            className="object-cover"
            />
          </div>
            </div>
        <p className="text-[18px] font-medium text-[]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>

        <div className="flex gap-10">
          <button className="w-[150px] h-[50px] bg-black text-white hover:scale-110 hover:bg-[#FF5555] ease-in-out duration-300 flex items-center justify-center">
            Get started <IoIosArrowRoundForward className="text-white w-4 h-4 "/>
          </button>
          <div className="flex items-center gap-2 text-[18px] font-medium">
            {" "}
            watch video <IoPlayCircleOutline className="w-6 h-6 hover:scale-125 cursor-pointer" />
          </div>
        </div>
        <div className="relative w-[80%] h-[300px]">
         <Image
         src="/home/lace.png"
         fill
         alt="lace"
         className="object-contain "
         />
        </div>
      </div>
      <div className=' absolute left-20 bottom-[30%]'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div> 

      <div className="md:w-[50%] relative md:h-screen mt-16">
        <div className="bg-gradient-radial from-[#FF5555] via-transparent  to-transparent w-full h-[300px] absolute bottom-3  right-0 left-0 hidden md:block"></div>
    <div className="absolute top-0 w-full h-screen right-0">
    <div className="relative w-full md:h-screen h-[500px]">
    <Image
      src="/home/lastphone.png"
      alt="lastphone"
      fill
      className="object-contain"
    />
  </div>
        </div>    
 
  <div className="absolute -top-8 md:right-20 z-10 w-full right-16">
    <div className="relative w-full md:h-[650px]  h-[500px]">
      <Image
        src="/home/firstPhone.png"
        alt="firstphone"
        fill
        className="object-contain"
      />
    </div>
  </div>
  <div className="absolute top-5 right-0 z-20 w-full ">
    <div className="relative w-full md:h-[650px] h-[500px]">
      <Image
        src="/home/phone2.png"
        alt="firstphone"
        fill
        className="object-contain"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;
