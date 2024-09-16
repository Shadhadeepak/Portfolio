"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import shadha from '../image/shadha1.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import NavLink from './NavLink'
import { delay, motion, stagger } from 'framer-motion'
const links = [
  { url: '/', title: "Home" },
  { url: '/about', title: "About" },
  { url: '/contact', title: "Contact" },
  { url: '/portfolio', title: "Portfilo" }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  function change() {
    setOpen(!open)
  }

  const pathName = usePathname()
  const TopVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const centreVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0
    }
  }
  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)'
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };











  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* logo */}
      <div className="hidden md:flex gap-4 text-xl  ">
        <NavLink />
      </div>
      <div className="px-0 item-center justify-center  ">
        <Image src={shadha} alt="" className='' width={250} height={250} />
      </div>
      <div className="hidden md:flex ld:flex gap-4 ">
        <Link href='' className=''>
          <Image src='/github.png' alt="github png" width={25} height={25} />
        </Link>
        <Link href='https://www.linkedin.com/in/shadhadeepak07/' className=''>
          <Image src='/linkedin.png' alt="github png" width={25} height={25} />
        </Link>
        <Link href='' className=''>
          <Image src='/facebook.png' alt="github png" width={25} height={25} />
        </Link>
        <Link href='https://www.instagram.com/shadhadeepak7?igsh=MTIyazRwZDExbGZvaw==' className=''>
          <Image src='/instagram.png' alt="github png" width={25} height={25} />
        </Link>
      </div>
      {/* Togglemenu */}
      <div className="md:hidden ">
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative  ' onClick={change}>
          <motion.div variants={TopVariant} animate={open ? 'opened' : 'closed'} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centreVariant} animate={open ? 'opened' : 'closed'} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariant} animate={open ? 'opened' : 'closed'} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* MenuList */}
        {open && < motion.div
          variants={listVariants}
          initial='closed'
          animate='opened'
          className="flex  flex-col justify-center items-center gap-8 text-4xl absolute top-0 left-0 w-screen h-screen bg-black text-white z-40 " >
          {links.map(links => (
            <motion.div variants={listItemVariants} key={links.url} className="">
              <Link href={links.url} >{links.title}</Link>
            </motion.div>

          ))}

        </motion.div>}
      </div>

    </div>
  )
}

export default Navbar