import React from 'react'

const FooterBefore = () => {
  return (
    <div className='bg-black w-full bg-footer-avant'>
      
      <div className='px-10 py-10 flex lg:flex-row lg:px-20 md:w-full flex-col justify-between
       gap-10 md:flex md:flex-row text-white'>
        <div className='w-full'>
          <h1 className='font-black text-2xl'>Lorem ipsum <br />dolor sit amet,</h1>
          <p className='mt-5'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Est omnis 
            perspiciatis mollitia nobis minus magnam 
            exercitationem laboriosam commodi quisquam, 
            obcaecati explicabo neque. Aut esse rerum quod 
            omnis odit? A, voluptatum? Aliquid fugit 
            voluptates mollitia veritatis exercitationem 
            incidunt doloremque? Dolores voluptate ad sunt 
            illum suscipit pariatur tempora labore nam modi sit!</p>
        </div>

        <div className='w-full'>
          <h1 className='font-black text-2xl'>Lorem ipsum <br /> dolor sit amet,</h1>
          <p className='mt-5'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Est omnis 
            perspiciatis mollitia nobis minus magnam 
            exercitationem laboriosam commodi quisquam, 
            obcaecati explicabo neque. Aut esse rerum quod 
            omnis odit? A, voluptatum? Aliquid fugit 
            voluptates mollitia veritatis exercitationem 
            incidunt doloremque? Dolores voluptate ad sunt 
            illum suscipit pariatur tempora labore nam modi sit!</p>
        </div>

        <div className='w-full'>
          <div className='flex justify-start items-start gap-5'>
            <div className='border-2 border-white w-15 h-15 rounded-full'></div>
            <div className='border-2 border-white w-15 h-15 rounded-full'></div>
            <div className='border-2 border-white w-15 h-15 rounded-full'></div>
          </div>

          <div className='flex justify-start items-start gap-10'>
            <div className='mt-5'>
              <h1 className='font-black text-2xl'>Lorem ipsum dolor
              sit amet, Lorem ipsum dolor sit amet,</h1>
            </div>
            <div className='border-2 border-white w-50 h-20 rounded-3xl mt-10 justify-end items-end'>

            </div>
          </div>

          <div className='w-full mt-10 text-right text-[12px]'>
            <span>Lorem ipsum dolor sit amet, consectetuer
            <br />adipiscing elit, sed diam nonummy nibh</span>
          </div>


        </div>
      </div>

    </div>
  )
}

export default FooterBefore