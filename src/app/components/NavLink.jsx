'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const links=[
    {url:'/',title:"Home"},
    {url:'/about',title:"About"},
    {url:'/contact',title:"Contact"},
    {url:'/portfolio',title:"Portfilo"}
  ]
const NavLink = () => {
    const pathName=usePathname()
  return (
        links.map((links)=>(
            <Link  href={links.url} className={`rounded p-1 ${pathName === links.url && "bg-black text-white"}`} key={links.index}>{links.title}</Link>
        ))
  )
}

export default NavLink