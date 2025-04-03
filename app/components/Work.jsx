'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import ToolList from './ToolList'; // Import the ToolList component

const Work = () => {
  return (
    <div id='work' className='w-full px-[20%] py-6 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
       <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of 
        projects showcasing my expertise in front-end development.
       </p>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-15 my-12'>
        {workData.map((project, index) => (
          <div 
            key={index} 
            className='relative group'
          >
            {/* ToolList outside of the project */}
            <ToolList tools={project.tools} />

            {/* Project Card */}
            <div className='relative aspect-square bg-cover bg-center rounded-lg cursor-pointer overflow-hidden' style={{ backgroundImage: `url(${project.bgImage})` }}>
              <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-85 transition-opacity duration-500'>
                <div className='text-center text-white px-5'>
                  <h2 className='font-semibold text-lg'>{project.title}</h2>
                  <p className='text-sm mt-2'>{project.description}</p>
                </div>
              </div>

              <motion.div 
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className='absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-3 px-5 flex flex-col items-start justify-center'
              >
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition-all duration-300 mt-3'>
                  <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}

export default Work;
