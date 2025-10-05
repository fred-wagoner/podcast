import React from 'react'
import group from '../assets/images/group.jpg'

const Episodes = () => {
  return (
    <>
      <section id='episodes' className='w-full bg-black pt-20 mb-50 md:px-[120] px-10  flex flex-col md:flex-row
         justify-center items-center gap-10'>
      <div id='content-box' className='w-full font-thin italic md:px-[120px] flex flex-col justify-center items-center gap-10'>
       <div className="relative w-screen h-64 bg-cover bg-center" style={{backgroundImage: `url(${group})`}}>
         <div className="absolute inset-0 bg-black opacity-50"></div> 
         <div className="relative z-10 flex items-center justify-center h-full">
         <h1 className='font-serif italic font-thin text-3xl p-3 text-white
           font-bolds md:text-[80px]'>EPISODES</h1>
         </div>
         </div>
      </div>
    </section>
    <div className='bg-black p-8 lg:w-[100%] w-full grid md:grid-cols-3 grid-cols-1 
      justify-center justify-items-center items-center gap-10'>
      <div>
        <iframe data-testid="embed-iframe"
        style={{ borderRadius:'12px' }} 
        src={`https://open.spotify.com/embed/episode/1B67DZyj8i8IWTD6tmRUko?utm_source=generator`} 
        width="100%" 
        height="352" frameBorder="0" 
        allowfullscreen="" allow="autoplay; 
        clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className='rounded-xl w-full max-w-lg'></iframe>
      </div>
       <div>
        <iframe data-testid="embed-iframe" 
        style={{ borderRadius: '12px' }} 
        src={`https://open.spotify.com/embed/episode/4qtKHWa2akLb9uwBxtuFRp?utm_source=generator`}
        width="100%" 
        height="352" frameBorder="0" 
        allowfullscreen="" allow="autoplay; 
        clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className='rounded-xl w-full max-w-lg'></iframe>
      </div>
       <div>
      <iframe data-testid="embed-iframe" 
      style={{ borderRadius: '12px' }} 
      src={`https://open.spotify.com/embed/episode/3JJgNwEiN3C25ZbMbkfVD3?utm_source=generator`}
      width="100%" 
      height="352" frameBorder="0" 
      allowfullscreen="" allow="autoplay; 
       clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      className='rounded-xl w-full max-w-lg'></iframe>
      </div>
    </div>
    </>
  )
}

export default Episodes