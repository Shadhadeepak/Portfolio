"use client"
import Navbar from './Navbar'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransistionProvider = ({ children }) => {
    const pathName = usePathname()
    return (
        <div>
            <AnimatePresence mode='wait'>
                <div key={pathName}
                    className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                    <motion.div
                        className="h-screen w-screen fixed bg-black rounded-b-[300px] z-40"
                        animate={{ height: "0vh" }}
                        exit={{ height: "130vh" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <motion.div
                        className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {pathName.substring(1)}
                    </motion.div>
                    <motion.div
                        className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                        initial={{ height: "140vh" }}
                        animate={{ height: "0vh", transition: { delay: 0.6 } }}
                    />
                    <div className="h-24"><Navbar /></div>
                    <div className="h-[calc(100vh-96px)]"> {children}</div>

                </div>

            </AnimatePresence>

        </div>
    )
}

export default TransistionProvider