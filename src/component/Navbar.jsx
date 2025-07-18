'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Container from './Container'
import ThemeToggle from './ThemeToggle'
import {GraduationCap} from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={clsx(
        'navbar fixed top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-blue-500 text-subheading' :'bg-none  shadow-sm',
         'px-4 md:px-10 lg:px-20 '
      )}
    >

     <Container className='flex items-center' >

    
      {/* Part 1 - Logo */}
      <div className="flex-1">
        <Link href="/" className="text-xl text-white font-bold flex items-center gap-2">
          <GraduationCap size={48}/>
          <span className='hidden sm:block'>EduCorp</span> 
        </Link>
      </div>

      {/* Part 2 - Navigation */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-white text-base font-normal">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/program">Program</Link></li>
          <li><Link href="/campus">Campus</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
        </ul>
      </div>

     

      {/* Part 3 - Contact Button */}


       <button className="btn btn-md hidden md:flex bg-white text-black font-normal border-none rounded-3xl  ">
        <Link href="/contact">
          Contact Us
        </Link>
       </button>

      
       <ThemeToggle/>
     
         {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-200 rounded-box w-52 text-white"
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/program">Program</Link></li>
          <li><Link href="/campus">Campus</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/testimonials">Contact us</Link></li>
          <li> <ThemeToggle/></li>
        </ul>
      </div>


       </Container>
    </div>
  )
}

export default Navbar
