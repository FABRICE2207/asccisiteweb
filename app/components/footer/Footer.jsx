import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-[#14148a] lg:px-16
    px-6 py-10 text-white'>
      <div>
        <div className='flex justify-center items-center gap-5'>
          <div className='border-2 border-white w-8 h-8 rounded-full'></div>
          <div className='border-2 border-white w-8 h-8 rounded-full'></div>
          <div className='border-2 border-white w-8 h-8 rounded-full'></div>
        </div>
        <div className='text-center'>
          <h5>Lorem ipsum dolor sit amet, consectetuer <br />
          adipiscing elit, sed diam nonummy nibh</h5>
        </div>
      </div>
      <div className='flex lg:flex-row lg:px-10 md:w-full flex-col justify-between items-center
      md:flex md:flex-row md:justify-between md:items-center mt-5'>
        <h3 className='mt-2'>Lorem ipsum</h3>
        <h3 className='mt-2'>Lorem ipsum</h3>
        <h3 className='mt-2'>Lorem ipsum</h3>
        <h3 className='mt-2'>Lorem ipsum</h3>
        <h3 className='mt-2'>Lorem ipsum</h3>
      </div>
    </footer>
  )
}

export default Footer