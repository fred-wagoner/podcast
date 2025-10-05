import React, { useState} from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import TPHeader from '../assets/images/TPHeader.jpeg' 

const header = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false)

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen)
}

const closeMenu = () => {
  setIsMenuOpen(false);
}

const navItems = [
  {link: 'Home', path: 'home' },
  {link: 'About', path: 'about' },
  {link: 'Episodes', path: 'episodes' },
  {link: 'Gallery', path: 'gallery' },
  {link: 'Testimonial', path: 'testimonial' },
  {link: 'Contact', path: 'contact' },
]

  return (
    <nav className='flex justify-between items-center gap-4 bg-black lg:px-4
       py-2 sticky top-0 z-30 border-[2px] border-[#e43c2c]'>
         <div id='logo'>
          <img src= {TPHeader} alt="" className='h-20 w-30'/> 
           {/* <h1 className='font-alexbrush text-4xl text-white'>Terry Price</h1> */}
         </div>
   
         <ul className='lg:flex justify-center items-center gap-2 hidden'>
           {navItems.map(({ link, path }) => (
             <Link key={path} className='text-white uppercase font-semibold
             cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black'
             to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
           ))}
         </ul>
   
         {/* mobile menu start here*/}
         <div className='flex flex-col justify-end-safe pl-[200px] lg:hidden' 
         onClick={toggleMenu}>
           <div>
             {isMenuOpen ? <FaXmark className='text-white text-2xl 
             cursor-pointer' /> : <FaBars className='text-white text-2xl 
             cursor-pointer'  />}
           </div>
         </div>
   
         <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800
           p-4 absolute top-[80px] left-0`}>
           <ul className='flex flex-col justify-center items-center gap-2 w-full'>
           {navItems.map(({ link, path }) => (
             <Link key={path} className='text-white uppercase font-semibold
             cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black
             w-full text-center' to={path} spy={true} offset={-100} smooth={true} onClick={closeMenu}>
             {link}
             </Link>
           ))}
           </ul>
         </div>
         <Link to='contact' spy={true} offset={-100} smooth={true}>
           <button className='bg-red-700 px-8 py-3 rounded-full hover:bg-gray-300
           hover:text-red-600 font-bold mt-3 hidden lg:flex transform hover:scale-110
           transition-transform duration-300 cursor-pointer'>BOOKING REQUEST</button>
       </Link>
       </nav>
  )
} 

export default header