import React, { useEffect } from 'react'
import HomePic from '../assets/images/HomePic.jpeg' 
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

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
     <h1 className='bg-black  pt-[20px] text-6xl text-white font-bold text-center md:pt-20'>CONTACT US</h1>
    <section id='contact' className='w-full bg-black grid lg:grid-cols-2
    grid-cols-1 justify-center items=center lg:px-36 py-16 gap-10'>
    <div className='w-[95%] h-fit m-auto bg-white p-10 flex flex-col
    justify-center items-start gap-4 rounded-xl' >
    <h1 className='text-2xl text-black font-semibold'>Send your booking information today</h1>
      <input type='text' placeholder='Enter your full name here' 
      className='w-full px-6 py-3 boarder-4 border-gray-600 text-black font-semibold
      rounded-xl focus:outline-2' />
      <input type='email' placeholder='Enter your valid email address' className='w-full p-3
      text-black font-semibold' />
      <textarea name='' id='' cols="30" rows="5" placeholder='Enter your Message here...'
      className='w-full p-3 rounded-xl'></textarea>
      <input type="submit" value='SEND EMAIL' className='bg-red-600 w-full text-lg px-8 py-3 hover:bg-
      text-white font-semibold rounded-xl hover:bg-black hover:text-red-600 cursor-pointer'/>
    </div>
    <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
      <h1 data-aos="zoom-in" data-aos-delay="200" 
      className='text-red-600 text-2xl font-bold'>REACH US</h1>
    <h1 data-aos="zoom-in" data-aos-delay="400" 
      className='text-white text-[40px] font-semibold leading-10'>Staying in touch with the 
      community and our team will assist in booking you</h1>
      <button className='bg-red-600 text-md px-8 py-3 text-white font-semibold
      rouned-xl hover:bg-red-600cursor-pointer'>BOOKING REQUEST</button>
    </div>
    </section>
    </>
  )
}

export default Contact