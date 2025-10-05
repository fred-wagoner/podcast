import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const footer = () => {
 return (
     <>
     <section className='bg-black w-full md:px-20 px-10 md:py-20 py-10 flex
     flex-col justify-center items-center gap-6 border-[5px] border-red-600'>
       <h1 className='text-white font-bold text-5xl'>Terry Price <span className='text-red-600 italic'>Podcast</span></h1>
         {/* <p className='text-lg text-center font-semibold text-slate-600'> How old-school merged with the NEW barbering for the Fort Worth gentleman 
         who is particular about his appearance and takes pride in how he conducts himself at work, life and with the world. 
         Come visit the experience.
         </p> */}
          <div id='icons' className='flex justify-center items-center gap-4'>
           <div id="icon-box" className='bg-gray-500 p-4 rounded-full
           cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
           transition-transform duration-300'>
             <FaFacebook className='size-7 fill-white' />
           </div>
               <div id="icon-box" className='bg-gray-500 p-4 rounded-full
           cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
           transition-transform duration-300'>
             <FaYoutube className='size-7 fill-white' />
           </div>
               <div id="icon-box" className='bg-gray-500 p-4 rounded-full
           cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
           transition-transform duration-300'>
             <FaInstagram className='size-7 fill-white' />
           </div>
               <div id="icon-box" className='bg-gray-500 p-4 rounded-full
           cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
           transition-transform duration-300'>
             <FaTwitter className='size-7 fill-white' />
           </div>
          </div>
     </section>
     
     <div dta-aos="slide-right" data-aos-delay="200" id='icon-box'
     className='bg-gray-400 p-4 rounded-full hover:bg-black hover:text-white
     cursor-pointer fixed lg:bottom-12 bottom-6 right-9 lg:right-9'>
       <Link to='home' spy={true} offset={-100} smooth={true}>
       <FaArrowUp className='size-4' />
       </Link>
     </div>
     
     </>
   )
 }

export default footer