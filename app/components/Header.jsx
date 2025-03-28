import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:'spring', stiffness:100}}
      >
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </motion.div>
      <motion.h3 
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.6, delay: 0.3}}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Neluni Wijayasekara
        <Image src={assets.hand_icon} alt="Hand Wave" className="w-6" />
      </motion.h3>
      <motion.h1
       initial={{y:-30 , opacity:0}}
       whileInView={{y:0 , opacity:1}}
       transition={{duration:0.8, delay: 0.5}}
      className="text-3xl sm:text-6xl lg:text-[66px] font-serif">
        Frontend Web Developer
      </motion.h1>
      
      <motion.p 
      initial={{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6, delay: 0.7}}
      className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from Gampaha, Sri Lanka.
      </motion.p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* GitHub, LinkedIn, and Email Icons */}
        <motion.a
         initial={{y:30 , opacity:0}}
         whileInView={{y:0 , opacity:1}}
         transition={{duration:0.6, delay: 0.9}}
          href="https://github.com/NeluniWijayasekara"
          target="_blank"
          className="w-8 h-8 text-black"
        >
          <FaGithub size={32} />
        </motion.a>
        
        <motion.a
         initial={{y:30 , opacity:0}}
         whileInView={{y:0 , opacity:1}}
         transition={{duration:0.6, delay: 0.9}}
          href="https://www.linkedin.com/in/neluni-wijayasekara/"
          target="_blank"
          className="w-8 h-8"
        >
          <FaLinkedin size={32} />
        </motion.a>
        
        <motion.a
         initial={{y:30 , opacity:0}}
         whileInView={{y:0 , opacity:1}}
         transition={{duration:0.6, delay: 0.9}}
          href="neluni09@gmail.com"
           target="_blank"
          className="w-8 h-8"
        >
          <MdEmail size={32} />
        </motion.a>
        
        <motion.a
         initial={{y:30 , opacity:0}}
         whileInView={{y:0 , opacity:1}}
         transition={{duration:0.6, delay: 1}}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header