import Image from "next/image";
import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";

const Advantages = () => {
  return (
    <>
      <div className="w-full md:flex items-center  md:h-[500px] my-[10%] relative ">
      <div className=' absolute left-0 bottom-0'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div> 
        <div className="md:w-[50%] flex  flex-col items-start gap-4">
          <span className="text-[18px] font-medium text-[#FF5555]">
            Advatnages
          </span>
          <h3 className="font-bold text-[48px]">why choose Uifry?</h3>
          <div className="flex items-center gap-4 text-[28px] font-semibold">
            {" "}
            <IoNotificationsCircle className="h-8 w-8 text-[#FF5555]" /> Clever
            Notifications
          </div>
          <p className="text-[18px] font-medium w-full">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="md:w-[50%] w-full relative h-[500px]">
          <Image
            src="/home/advantagesImg.png"
            fill
            alt="advantages"
            className="object-contain z-30"
          />
           <div className='relative w-[300px] h-[300px] z-0'>
            <Image
            src="/home/spotyr.png"
            alt="spot"
            fill
            className='object-conatain absolute bottom-0'
            
            />
        </div>
        </div>
      </div>

      <div className="w-full md:flex items-center  md:h-[500px] mb-[10%]">
      <div className='relative md:w-[50%] h-[500px] '>
        <Image
        src="/home/rings.png"
        fill
        alt="featuresImg"
        className="object-contain z-40 animate-[spin_6s_linear_infinite]"
        />
        <Image
        src="/home/fone1.png"
        fill
        alt="featuresImg"
        className="object-contain z-40"
        />
        <div className='relative w-[400px] h-[500px] z-0'>
            <Image
            src="/home/spotyr.png"
            alt="spot"
            fill
            className='object-conatain'
            
            />
        </div>
      </div>
        <div className="md:w-[50%] flex  flex-col items-start gap-4">
          <div className="flex items-center gap-4 text-[28px] font-semibold">
            {" "}
            <PiStarFourLight className="h-8 w-8 bg-[#FF5555] text-white p-2 rounded-full" />{" "}
            Fully Customizable
          </div>
          <p className="text-[18px] font-medium w-full">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Advantages;
