import Advantages from "@/components/home/Advantages";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl w-full mx-auto  max-lg:p-4 font-myfont">
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonials/>
      <Faq/>
      <div className="w-full h-[400px] relative my-[15%]">
      <div className=' absolute right-0 -bottom-[20%]'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div> 

        <div className=' absolute left-[30%] -top-[10%]'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div> 
        <div className="absolute -left-60 -top-16">
        <div className='relative w-[600px] h-[300px] z-0'>
            <Image
            src="/home/spotyr.png"
            alt="spot"
            fill
            className='object-conatain absolute bottom-0 z-0'
            
            />
        </div>
        </div>
      
        <Image
        src="/home/Footer.png"
        alt="footer"
        fill
        quality={100}
        className="object-cover"
        />
      </div>
    </div>
  );
}
