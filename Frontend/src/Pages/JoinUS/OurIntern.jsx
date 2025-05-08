import React from 'react'

const OurIntern = () => {
  return (
    <section className=" py-11 px-4 bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-center">
      <h3 className='text-4xl text-white mb-2'>Be Our Intern</h3>
      <p className='text-gray-200 text-base '>Want real experience beyond classroom assignments?</p>
      <button className='w-48 p-2 bg-white text-pink-500 rounded-3xl font-bold cursor-pointer mt-4 duration-300 hover:bg-gray-200'>Know More</button>
      <div className='container mx-auto mt-4 bg-white lg:w-[660px] w-auto p-1 rounded-3xl shadow-lg'>
        <p className='text-gray-600 text-base text-center mt-2'>
            At Devmitra, interns work on actual client tasks, not just dummy training. You'll learn tools, <br /> communication, and delivery -- all in a startup-like environment.
            <br /> <br />
        </p>
      </div>
    </section>
  )
}

export default OurIntern
