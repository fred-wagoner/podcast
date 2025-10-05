import React,{ useEffect } from 'react'
import justice from '../assets/images/justice.jpg'
import photo from '../assets/images/Photo1.jpg'
import tpside from '../assets/images/TPSide.jpg'
import tpfull from '../assets/images/TPFull.jpg'
import juctice from '../assets/images/justice.jpg'
import group from '../assets/images/group.jpg'
import gigi from '../assets/images/gigi.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Gallery = () => {

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
    <section id='gallery' className='w-full flex flex-col md:px-20 px-10 py-20
    justify-center items-center gap-4 bg-black'>
      <h1 className='text-6xl text-white font-bold text-center'>Experince and Live the Podcast Lifestyle</h1>
    </section>
    <div className='w-full m-auto bg-black p-10 flex flex-col justify-center items-center'>
      <div className='lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 
      justify-center justify-items-center items-center gap-10'>
        <img data-aos="zoom-out" data-aos-delay="200" src={tpfull} alt=""
        className='rounded-xl w-[300px] h-[300px]' />
        <img data-aos="zoom-out" data-aos-delay="200" src={gigi} alt=""
        className='rounded-xl w-[300px] h-[300px]' />
        <img data-aos="zoom-out" data-aos-delay="200" src={group} alt=""
        className='rounded-xl w-[300px] h-[300px]' />
        <img data-aos="zoom-out" data-aos-delay="200" src={photo} alt=""
        className='rounded-xl w-[300px] h-[300px]' />
        <img data-aos="zoom-out" data-aos-delay="200" src={tpside} alt=""
        className='rounded-xl w-[300pxpx] h-[300px]' />
        <img data-aos="zoom-out" data-aos-delay="200" src={justice} alt=""
        className='rounded-xl w-[300px] h-[300px]' />
      </div>

    </div>
    </>
  )
}

export default Gallery