'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import ToolList from './ToolList'; // Import the ToolList component
import ViewProject from './ViewProject'; 

const Work = () => {

  // const [selectedProject, setSelectedProject] = useState(null);

  // const handleProjectClick = (project) => {
  //   setSelectedProject(project);
  // };

  // const handleCloseModal = () => {
  //   setSelectedProject(null);
  // };

  return (
    <div id='work' className="w-full px-[10%] py-12 scroll-mt-20">
       <h4 className='text-center mb-2 text-lg  text-[#B388EB]'>My portfolio</h4>
       <h2 className='text-center text-3xl sm:text-5xl font-Ovo'>My latest work</h2>

       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of 
        projects showcasing my expertise in front-end development.
       </p>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-19 my-12'>
        {workData.map((project, index) => (
          <div 
            key={index} 
            className='relative group  bg-white shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent rounded-lg group-hover:border-gray-500 group-hover:border-2 hover:border-4 hover:border-pink-300'
            // onClick={() => handleProjectClick(project)} // Open modal on click
          >
            {/* ToolList outside of the project */}
            <ToolList tools={project.tools} />

            {/* Project Card */}
            <div className='relative aspect-square bg-cover bg-center rounded-lg cursor-pointer overflow-hidden' style={{ backgroundImage: `url(${project.bgImage})` }}>
              <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-85 transition-opacity duration-500'>
                <div className='text-center text-white px-5'>
                  <h2 className='font-semibold text-lg'>{project.title}</h2>
                  <p className='text-sm mt-2'>{project.description}</p>

                  
                  {/* Add the Source Code Button */}
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-400 transition duration-300"
                  >
                    Source Code
                  </a>
                  
                </div>
              </div>

             
            </div>
          </div>
        ))}
       </div>
        {/* Show the modal when a project is selected */}
      {/* {selectedProject && (
        <ViewProject project={selectedProject} onClose={handleCloseModal} />
      )} */}
    </div>
  )
}

export default Work;
