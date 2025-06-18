import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import MobileMenu from './mobile-menu'

const Navbar = () => {
  return (
    <header className="text-black flex item-center justify-center fixed top-0 z-50 ">
        <div className="flex items-center space-x-2 md: space-x-10">
            <Link href={"/"} className="text-white text-lg font-bold">
            <img 
            src="/logo.jpg"
            width={120}
            height={120}
            alt="logo"
            className="cursor-pointer object-contain"
            />
            </Link>

            <div className="md:hidden"><MobileMenu/></div>

            <ul className="hidden md:flex space-x-4">
                <li className="header-link">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="header-link">
                    <Link href={"/movies"}> Movies</Link>
                </li>
                <li className="header-link">
                    <Link href={"/tvshows"}>TV Shows</Link>
                </li>
                <li className="hearder-link">
                    <Link href={"/latest"}>Latest</Link>
                </li>
            </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
            {/* <Search /> */}
            <p className="hidden lg:inline cursor-pointer">Kids</p>
            {/* <Bell/> */}
            <Link href={"/account"}>
            <div className="flex items-center space-x-2">
               <UserButton/>
                {/* <ChevronDown className="h-6 w-6 cursor-pointer" /> */}
            </div>
            </Link>
        </div>
    </header>
  )
}

export default Navbar