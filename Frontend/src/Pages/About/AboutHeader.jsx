import React from 'react'
import AboutHeaderImg from "../../assets/About/AboutHeader.png";

const AboutHeader = () => {
  return (
    <>
    <section className='bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-white shadow-lg p-4'>
      <div className='container mx-auto flex flex-col lg:flex-row md:flex-row justify-center items-center h-auto lg:pr-20 lg:pl-32 md:pr-14 md:pl-14'>
        <h3 className='lg:text-5xl md:text-5xl text-3xl mt-8 lg:mt-0 md:mt-0'>Building Digital Solutions <br /> that Drive Real Results</h3>
      <img src={AboutHeaderImg} alt="" className='w-48' />
      </div>
      <h2 className='text-center'>At Devmitra Solutions, We help indivisuals, startups and businesses grow with <br /> powerful website, mobile apps, and digital strategy -- delivered by passionate <br /> tech professionals.</h2>
    </section>
    </>
  )
}

export default AboutHeader
