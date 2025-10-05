import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import HomePic from '../assets/images/HomePic.jpeg' 
import AOS from 'aos';
import 'aos/dist/aos.css'

function Hero() {

  useEffect(() => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
}, [])

  return (
    <>
      <section id='home' className='w-full bg-black md:px-[120] px-10  flex flex-col md:flex-row
      justify-center items-center gap-10'>
      <div id='content-box' className='flex flex-col display:grid justify-center items-start gap-10'>
        <h1 data-aos="zoom-in" className='text-2xl p-3 text-white
        font-semibolds'>WELCOME TO</h1>
    <div class="relative w-full h-20 bg-black flex items-center justify-center pt-8">
      <h1 class="font-serif text-white font-bolds text-7xl lg:pr-6">TERRY PRICE</h1>
      <h1 class="absolute italic right-[-7] top-5/6 translate-y-1/2 text-red-700 font-bold text-[80px] md:text-6xl md:pl-60 pt-3">Podcast</h1>
    </div>
        <Link to='contact' spy={true} offset={-100} smooth={true} className='pt-20'>
           <button data-aos="zoom-in" className='px-10 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-gray-400
           hover:text-red-600'>BOOKING REQUEST</button>
        </Link>
    </div>
    <div data-aos="zoom-in" id='image-box' className='md:w-[50%] w-full pt-8'>
      <img src= {HomePic} alt="" className='w-screen flex flex-col justify-center items-center
       md:h-[600px] h-[500px]'/> 
    </div>
 </section>
 {/* <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start 
 w-full md:px-[120px] px-10 py-10 gap-10' >
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={sissor} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={menshair} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={trimmer} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={womenhair} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
 </section> */}
    </>
  )
}

export default Hero