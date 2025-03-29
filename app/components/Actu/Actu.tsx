"use client"

import React from 'react'
import imagefille from '../../assets/fille.png'
import Image from 'next/image'
import Link from 'next/link'

const Actu = () => {
  return (
    <section>
    <h1 className='text-5xl font-bold text-[#14148a] text-center'>Actu</h1>

    <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
      py-10 gap-5 p-8'>

      <div className='flex flex-col w-full
      '>
        <div className=''>
          <Image
            src={imagefille}
            width={300}
            height={180}
            alt="Logo de l'ASCCI"
            className='w-full'
          />
        </div>
        <div className='mx-3 mt-[-25px]'>
          <div className='p-8 bg-white'>
            <h1 className='font-black text-[#1bb606] text-3xl'>Lorem ipsum
            dolor sit amet,</h1>
            <p className="mt-5 text-[#14148a]">Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Sit cumque excepturi beatae at dicta est fuga 
              perferendis provident quidem amet quam ex ad quas odio, 
              </p>
          </div>
        </div>
        {/* Bouton en savoir plus */}
        <div className='flex justify-center items-center'>
          <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
          font-semibold rounded-full'>
            EN SAVOIR PLUS
          </Link>
        </div>
       
      </div>

      <div className='flex flex-col w-full
      '>
        <div className=''>
          <Image
            src={imagefille}
            width={300}
            height={180}
            alt="Logo de l'ASCCI"
            className='w-full'
          />
        </div>
        <div className='mx-3 mt-[-25px]'>
          <div className='p-8 bg-white'>
            <h1 className='font-black text-[#1bb606] text-3xl'>Lorem ipsum
            dolor sit amet,</h1>
            <p className="mt-5 text-[#14148a]">Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Sit cumque excepturi beatae at dicta est fuga 
              perferendis provident quidem amet quam ex ad quas odio, 
              </p>
          </div>
        </div>

         {/* Bouton en savoir plus */}
         <div className='flex justify-center items-center'>
            <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
            font-semibold rounded-full'>
              EN SAVOIR PLUS
            </Link>
          </div>
       
      </div>
      
      <div className='flex flex-col w-full
      '>
        <div className=''>
          <Image
            src={imagefille}
            width={300}
            height={180}
            alt="Logo de l'ASCCI"
            className='w-full'
          />
        </div>
        <div className='mx-3 mt-[-25px]'>
          <div className='p-8 bg-white'>
            <h1 className='font-black text-[#1bb606] text-3xl'>Lorem ipsum
            dolor sit amet,</h1>
            <p className="mt-5 text-[#14148a]">Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Sit cumque excepturi beatae at dicta est fuga 
              perferendis provident quidem amet quam ex ad quas odio, 
              </p>
          </div>
        </div>

         {/* Bouton en savoir plus */}
         <div className='flex justify-center items-center'>
            <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
            font-semibold rounded-full'>
              EN SAVOIR PLUS
            </Link>
          </div>
       
      </div>

    </div>

    <div className='flex justify-center items-center mb-10'>
      <Link href="/Actualite" className='bg-[#14148a] px-5 py-1 text-white rounded-full'>Voir toutes l’actualité</Link>
    </div>

</section>
  )
}

export default Actu