"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";



const Homepage = () => {

  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}} >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain " />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold">
          Front-End Developer | React.js | Next.js | JavaScript | UI Design
          .
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Front-end developer specializing in React.js and Next.js, with a passion for creating intuitive, user-friendly web applications. Skilled in JavaScript,  and responsive design, I focus on delivering optimized, high-performance solutions..
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
             <Link href='/portfolio'>View More</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
             <Link href='/contact'>Contact Me</Link>
              
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
