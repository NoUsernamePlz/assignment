import Image from 'next/image'
import React from 'react'
import { PiStarFourLight } from "react-icons/pi";
import { TbHexagon3D } from "react-icons/tb";
import { PiCubeTransparent } from "react-icons/pi";
const Features = () => {
  return (
    <div className='w-full md:flex items-center justify-between md:my-20  mt-[150%] relative'>
        
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

        <div className=' absolute right-0 bottom-0'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div>  
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
      <div className='md:w-[50%] relative'>
        <div className='absolute -right-5 top-4 z-0'>
        <div className='relative h-[600px] w-[400px] z-0'>
            <Image
            src="/home/spot.png"
            alt="spot"
            fill
            className='object-contain z-0 md:block hidden'
            />
        </div>
        </div>
        
        <span className='text-[18px] font-medium text-[#FF5555]'>Features</span>
        <h3 className='text-[48px] font-bold'>uifry premium</h3>
        <div className='md:w-[80%] mr-auto mt-6'>
            <div className='w-full pr-10 mb-6'>
            <h3 className='flex items-center gap-4 font-semibold text-[18px] py-3'><PiStarFourLight  className='h-5 w-5 text-[#FF5555] animate-bounce'/> budgeting intervals</h3>
        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

            </div>
            <div className='w-full pr-10 mb-6 z-20'>
            <h3 className='flex items-center gap-4 font-semibold text-[18px] py-3'><TbHexagon3D  className='h-5 w-5 text-[#FF5555] animate-bounce'/> budgeting intervals</h3>
        <p className=''>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

            </div>
            <div className='w-full pr-10 mb-6'>
            <h3 className='flex items-center gap-4 font-semibold text-[18px] py-3'><PiCubeTransparent className='h-5 w-5 text-[#FF5555] animate-bounce'/> budgeting intervals</h3>
        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
