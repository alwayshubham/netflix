"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const MobileMenu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
        <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="flex items-center gap-x-2"
        >
            <span className="text-sm">Browse</span>
            {/* <chavronDown 
            className={`h-4 transition ${showMobileMenu ? "rotate-180" : " "}`}
            /> */}
        </button>
        {showMobileMenu && (
            <div className="fixed left-0 top-20 x-40 w-full overflow-scroll bg-[#141414] p-12">
                <button 
                className="absolute right-5 top-5"
                onClick={() => setShowMobileMenu(false)}
                >
                    <x className= " h-6 w-6" />
                </button>
                 <ul className="flex flex-col gap-4">
            <li className="border-b border-gray-700 py-4">
              <Link href="/" onClick={() => setShowMobileMenu(false)}>
                Home
              </Link>
            </li>
            <li className="border-b border-gray-700 py-4">
              <Link href="/tv-shows" onClick={() => setShowMobileMenu(false)}>
                TV Shows
              </Link>
            </li>
            <li className="border-b border-gray-700 py-4">
              <Link href="/movies" onClick={() => setShowMobileMenu(false)}>
                Movies
              </Link>
            </li>
            <li className="border-b border-gray-700 py-4">
              <Link href="/new-popular" onClick={() => setShowMobileMenu(false)}>
                New & Popular
              </Link>
            </li>
            <li className="border-b border-gray-700 py-4">
              <Link href="/my-list" onClick={() => setShowMobileMenu(false)}>
                My List
              </Link>
            </li>
          </ul>
            </div>
        )}
    </div>
  )
}

export default MobileMenu