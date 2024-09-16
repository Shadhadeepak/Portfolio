'use client'
import React from 'react'
import {delay, motion} from 'framer-motion'
const testPage = () => {
  return (
    <div className='flex h-full items-center justify-center '>
        <motion.div className="w-96 h-96 bg-red-400 rounded" initial={{x:-100}} 
        animate={{x:500, y:230, opacity:0.5}}
        transition={{delay:2,duration:4}}
        >

        </motion.div>
    </div>
  )
}

export default testPage