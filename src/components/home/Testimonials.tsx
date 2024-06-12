import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full md:my-[10%] text-center relative'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
      <span className='font-medium text-[18px] md:pb-8 max-md:mt-[40%]'>Testimonial</span>
      <h3 className='font-bold text-[48px] max-w-xl mx-auto w-full leading-snug'>What our users say about us?</h3>
      <div className='w-full md:flex items-center md:my-16'>
        <div className='md:w-[50%] w-full h-[500px] relative'>
       
          <Image
            src="/home/testimonial.png"
            fill
            className='object-contain z-30'
            alt="testimonial"
          />
          <div className='relative w-full h-[500px]'>
            <Image
            src="/home/rings.png"
            alt="ring"
            fill
            className='object-contain animate-[spin_8s_linear_infinite] absolute  z-10'
            />
             <div className='relative md:w-[600px] h-[300px] z-0'>
            <Image
            src="/home/spotyr.png"
            alt="spot"
            fill
            className='object-conatain absolute bottom-0 z-0'
            
            />
        </div>
          </div>
        </div>
        <div className='md:w-[50%] flex flex-col items-start justify-start gap-4 text-left px-10 p-4 h-[500px]'>
          <h3 className='font-semibold text-[28px] capitalize'>the best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
           <Image src="/home/testimonialavatars.png" width={150} height={80} alt="avatars" quality={100} />
           <span className='font-semibold text-[18px] capitalize '>nick jonas</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials