"use client"

import React from 'react'
import imagefille from '../../assets/filleagir.png'
import Image from 'next/image'
import Link from 'next/link'

const Agir = () => {
  return (
    <section className='lg:p-20 md:p-8 sm:p-8'>
      {/* Texte AGIR */}
    <h1 className='text-5xl mb-5 text-orange-500 text-center' style={{ fontFamily: 'ChunkFiveEx' }}>AGIR</h1>

    <div className='flex lg:flex-row lg:px-15 md:w-full flex-col justify-between items-center 
      py-10 gap-5 bg-gray-200'>

      <div className='flex flex-col w-full gap-10 agir'>
        <div className='lg:flex lg:flex-row lg:justify-between lg:items-start md:flex md:flex-col bg-white
        sm:flex sm:flex-col'
         data-aos="zoom-in-down"
         data-aos-delay="400"
        >
          <div className='w-full'>
            <Image
              src={imagefille}
              width={300}
              alt="Logo de l'ASCCI"
              className='w-full'
            />
          </div>

          <div className='p-10 w-full'>
            <h1 className='text-3xl text-[#14148a]' style={{ fontFamily: 'ChunkFiveEx' }}>AGIR POUR UN SCOUTISME DE QUALITE</h1>
            <p className='mt-5' >Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad Lorem ipsum dolor sit
            </p>
            {/* Bouton en savoir plus */}
            <div className='flex justify-start items-start mt-5'>
              <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
              rounded-full' >
             EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>

        <div className='lg:flex lg:flex-row lg:justify-between lg:items-start md:flex md:flex-col bg-white
        sm:flex sm:flex-col' data-aos="zoom-in-down"
         data-aos-delay="800">
          <div className='w-full'>
            <Image
              src={imagefille}
              width={300}
              alt="Logo de l'ASCCI"
              className='w-full'
            />
          </div>

          <div className='p-10 w-full'>
            <h1 className='text-3xl text-[#14148a]' style={{ fontFamily: 'ChunkFiveEx' }}>AGIR POUR RENFORCER NOS ACQUIS</h1>
            <p className='mt-5' >Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad Lorem ipsum dolor sit
            </p>
            {/* Bouton en savoir plus */}
            <div className='flex justify-start items-start mt-5'>
              <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
               rounded-full' >
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>

        <div className='lg:flex lg:flex-row lg:justify-between lg:items-start md:flex md:flex-col bg-white
        sm:flex sm:flex-col' 
         data-aos="zoom-in-down"
         data-aos-delay="1200">
          <div className='w-full'>
            <Image
              src={imagefille}
              width={300}
              alt="Logo de l'ASCCI"
              className='w-full'
            />
          </div>
          <div className='p-10 w-full'>
            <h1 className='text-3xl text-[#14148a]' style={{ fontFamily: 'ChunkFiveEx' }}>AGIR POUR LE DEVELOPPEMENT DURABLE DE NOTRE ASSOCIATION</h1>
            <p className='mt-5' >Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad Lorem ipsum dolor sit
            </p>
            {/* Bouton en savoir plus */}
            <div className='flex justify-start items-start mt-5'>
              <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
               rounded-full' >
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>

</section>
  )
}

export default Agir