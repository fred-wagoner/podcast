import React,{ useEffect }  from 'react'
import Photo from '../assets/images/Photo1.jpg'
import group from '../assets/images/group.jpg'
import gigi from '../assets/images/GiGi5.jpg'
import terry from '../assets/images/terry.jpg'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'

const clients = [
{
  image: terry,
  title: 'Terry Price',
  color: 'red-500',
  letter: 'C',
  para: 'Terry Price is a former Radio Show host of KVCE 1160 Salem Communication…… Terry Enjoys intellectual conversation, engaging with the audience and his passion is teaching the youth at juvenile detention center located in the heart of Dallas Texas….. Ladies and gentlemen Terry Price is your service before service… .. A voice for Everyday people.',
},
{
  image: gigi,
  title: 'GiGi',
  color: 'blue-500',
  letter: 'F',
  para: 'As a child of the Most High, my deepest desire is to see my community thrive. I am here to help cultivate a culture where wisdom is cherished, growth is nurtured, and prosperity is a reality for everyone.  I believe that by working together, we can build a legacy of strength and abundance that reflects the love and power that resides within us.',
}
]

const About = () => {

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
    <section id='about' className='w-full bg-black pt-20 mb-50 md:px-[120] px-10  flex flex-col md:flex-row
      justify-center items-center gap-10'>
    <div id='content-box' className='w-full font-thin italic md:px-[120px] flex flex-col justify-center items-center gap-10'>
      
    <div className="relative w-screen h-60 bg-cover bg-center" style={{backgroundImage: `url(${group})`}}>
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className='font-serif italic font-thin text-3xl p-3 text-white
        font-bolds md:text-[80px]'>FEATURED HOST</h1>
      </div>
      </div>
      <div id='clients' className='grid grid-cols-1 md:grid-cols-2 justify-center 
        items-center gap-6'>
          {
            clients.map((item, index) => (
              <div data-aos="slide-up" data-aos-delay="200" id='main-box' key={index}
              className='w-full bg-black p-4 flex flex-col justify-between 
              items-center gap-6 rounded-3xl'>
                <div id='top' className='flex justify-between items-center gap-8
                w-full'>
                  <div className='flex justify-center items-center gap-4 relative'>
                    <BiSolidQuoteAltLeft className='size-20 text-red-600 absolute
                    left-0 opacity-20' />
                      <h1 className='text-[30px] font-serif italic font-thin text-white md:pl-10 text-2xl'>{item.title}</h1>
                  </div>
                  <img src={item.image} alt="" className='w-[150px] h-[130px] rounded-full 
                  transform hover:scale-110 transition duration-300 cursor-pointer'/> 
                  {/* <img src= {item.image} alt="" className='w-36 h-36 object-cover flex flex-col justify-center items-center
                  rounded-full border-4 border-white'/>  */}
                </div>
                  <div id='bottom' className='w-full'>
                    <p className='whitespace-normal text-start text-lg text-white font-medium indent-8'>{item.para}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
    </section>
  </>
  )
}

export default About