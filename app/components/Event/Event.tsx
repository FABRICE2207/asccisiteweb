"use client"

import React from 'react'
import imagefille from '../../assets/fille.png'
import Image from 'next/image'

const Event = () => {
  return (
     <section>
          <h1 className='text-5xl text-[#1bb606] text-center' style={{ fontFamily: 'ChunkFiveEx' }} >Event</h1>

          <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
            py-10 gap-5 p-8'>
            {/* Image 1 */}
            <div className='flex flex-col mt-12 w-full bg-gradient-to-l from-orange-500 to-orange-700
            '
            data-aos="fade-up"
            data-aos-delay="600"
            >
              {/* Animation :  data-aos="fade-up" data-aos-delay="700" */}
              <div className=''>
                <Image
                  src={imagefille}
                  width={300}
                  height={180}
                  alt="Logo de l'ASCCI"
                  className='w-full'
                />
              </div>
              <div>
                <div className='p-8 text-white'>
                  <h1 className='text-center' style={{ fontFamily: 'ChunkFiveEx' }}>CAMP DE REGION</h1>
                  <p >Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Sit cumque excepturi beatae at dicta est fuga 
                    perferendis provident quidem amet quam ex ad quas odio, 
                    </p>
                </div>
              </div>
             
            </div>

            {/* Image 2 */}
            <div className='flex flex-col mt-12 w-full bg-gradient-to-l from-orange-500 to-orange-700
            '
            data-aos="fade-up"
            data-aos-delay="1000"
            >
              <div className=''>
                <Image
                  src={imagefille}
                  width={300}
                  height={180}
                  alt="Logo de l'ASCCI"
                  className='w-full'
                />
              </div>
              <div>
                <div className='p-8 text-white'>
                  <h1 className='text-center' style={{ fontFamily: 'ChunkFiveEx' }}>CAMP DE REGION</h1>
                  <p >Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Sit cumque excepturi beatae at dicta est fuga 
                    perferendis provident quidem amet quam ex ad quas odio, 
                    </p>
                </div>
              </div>
             
            </div>
            
            {/* Image 3 */}
            <div className='flex flex-col mt-12 w-full bg-gradient-to-l from-orange-500 to-orange-700
            ' data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className=''>
                <Image
                  src={imagefille}
                  width={300}
                  height={180}
                  alt="Logo de l'ASCCI"
                  className='w-full'
                />
              </div>
              <div>
                <div className='p-8 text-white'>
                  <h1 className='text-center' style={{ fontFamily: 'ChunkFiveEx' }}>CAMP DE REGION</h1>
                  <p >Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Sit cumque excepturi beatae at dicta est fuga 
                    perferendis provident quidem amet quam ex ad quas odio, 
                    </p>
                </div>
              </div>
             
            </div>
 
          </div>
    
     </section>
  )
}

export default Event