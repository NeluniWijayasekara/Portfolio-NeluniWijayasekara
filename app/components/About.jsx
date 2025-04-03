import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
   transition={{duration:1}}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
         
         {/* Profile Image */}
         <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user'
            className='w-full rounded-3xl'/>
        </div>
        {/* About Text */}
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl '>
            I am a B.Sc. (Hons) Computer Science undergraduate at the University of Kelaniya, 
            Sri Lanka, passionate about full-stack development and UI/UX design.
             Proficient in React, Node.js, MySQL, and MongoDB, I also have experience in data analysis using R and Excel. 
            I enjoy learning new technologies and applying my skills to real-world projects.
            </p>
           {/* Information List */}
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,title,description},index)=>(
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg hover:shadow-black'
                       key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'  />
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                       <p className=' text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>
             {/* Tools Section */}
          <h4 className='my-6 text-gray-700 font-Ovo'>Tools I used</h4>
          
          {/* Tools List with Wrap */}
          <div className='flex flex-wrap justify-start gap-4'>
            {toolsData.map((tool, index) => (
              <div 
                key={index} 
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                           rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default About;