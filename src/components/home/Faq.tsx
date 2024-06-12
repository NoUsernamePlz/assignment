import Image from 'next/image'
import React from 'react'
const data = [
    {
        title:"the best financial accounting app ever!",
        desc:"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    },
    {
        title:"the best financial accounting app ever!",
        desc:"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    },
    {
        title:"the best financial accounting app ever!",
        desc:"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    },
    {
        title:"the best financial accounting app ever!",
        desc:"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    },
    {
        title:"the best financial accounting app ever!",
        desc:"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    },
    {
        title:"the best financial accounting app ever!",
        desc:"“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
    },
]

const Faq = () => {
  return (
    <div className='md:mb-[10%] relative max-md:my-[10%]'>
       <div className=' absolute right-[50%] top-0'>
        <div className='relative h-[50px] w-[50px] animate-[ping_2s_linear_infinite]'>
            <Image
            src="/home/smallstar.png"
            alt="star"
            fill
            className='object-contain'
            />
        </div>
        </div> 
     <span className='text-[18px] font-myfontMedium text-[#FF5555]'>FAQ</span>
     <h3 className='text-[48px] font-myfontBold capitalize'>Frequently asked <br/>questions</h3> 
     <div className='grid md:grid-cols-2  grid-cols-1 gap-10 my-10'>
       {
        data.map((el,i)=>(
            <div className={`p-8 ${i== 0 || i==3 || i==4?"bg-[#FF5555] text-white" :"bg-white dark:bg-black"} rounded-md flex flex-col gap-4`} key={i}>
             <h3 className='text-[28px] font-myfontsemiBold'>{el.title}</h3>
              <p className='text-[18px] font-myfontMedium'>{el.desc}</p>
            </div>
        ))
       }  
     </div>
    </div>
  )
}

export default Faq

