"use client"

import React from 'react'
import imagefille from '../../assets/filleagir.png'
import Image from 'next/image'
import Link from 'next/link'

const Agir = () => {
  return (
    <section className='p-20'>
      {/* Texte AGIR */}
    <h1 className='text-5xl mb-5 font-bold text-orange-500 text-center'>AGIR</h1>

    <div className='flex lg:flex-row lg:px-15 md:w-full flex-col justify-between items-center 
      py-10 gap-5 bg-gray-200'>

      <div className='flex flex-col w-full gap-10'>
        <div className='flex flex-row justify-between items-start bg-white'>
          <div className='bg-amber-500 w-full'>
            <Image
              src={imagefille}
              width={300}
              alt="Logo de l'ASCCI"
              className='w-full'
            />
          </div>
          <div className='p-10 w-full'>
            <h1 className='font-black text-3xl text-[#14148a]'>AGIR POUR UN SCOUTISME DE QUALITE</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad Lorem ipsum dolor sit
            </p>
            {/* Bouton en savoir plus */}
            <div className='flex justify-start items-start mt-5'>
              <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
              font-semibold rounded-full'>
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-start bg-white'>
          <div className='bg-amber-500 w-full'>
            <Image
              src={imagefille}
              width={300}
              alt="Logo de l'ASCCI"
              className='w-full'
            />
          </div>

          <div className='p-10 w-full'>
            <h1 className='font-black text-3xl text-[#14148a]'>AGIR POUR RENFORCER NOS ACQUIS</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad Lorem ipsum dolor sit
            </p>
            {/* Bouton en savoir plus */}
            <div className='flex justify-start items-start mt-5'>
              <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
              font-semibold rounded-full'>
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-between items-start bg-white'>
          <div className='bg-amber-500 w-full'>
            <Image
              src={imagefille}
              width={300}
              alt="Logo de l'ASCCI"
              className='w-full'
            />
          </div>
          <div className='p-10 w-full'>
            <h1 className='font-black text-3xl text-[#14148a]'>AGIR POUR LE DEVELOPPEMENT DURABLE DE NOTRE ASSOCIATION</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad Lorem ipsum dolor sit
            </p>
            {/* Bouton en savoir plus */}
            <div className='flex justify-start items-start mt-5'>
              <Link href="" className='bg-gradient-to-l from-orange-500 to-orange-700 px-5 py-2 text-white
              font-semibold rounded-full'>
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-col mt-12 w-full bg-gradient-to-l from-orange-500 to-orange-700
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
        <div>
          <div className='p-8 text-white'>
            <h1 className='font-black text-center'>CAMP DE REGION</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Sit cumque excepturi beatae at dicta est fuga 
              perferendis provident quidem amet quam ex ad quas odio, 
              </p>
          </div>
        </div>
       
      </div>

      <div className='flex flex-col mt-12 w-full bg-gradient-to-l from-orange-500 to-orange-700
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
        <div>
          <div className='p-8 text-white'>
            <h1 className='font-black text-center'>CAMP DE REGION</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Sit cumque excepturi beatae at dicta est fuga 
              perferendis provident quidem amet quam ex ad quas odio, 
              </p>
          </div>
        </div>
       
      </div>
      
      <div className='flex flex-col mt-12 w-full bg-gradient-to-l from-orange-500 to-orange-700
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
        <div>
          <div className='p-8 text-white'>
            <h1 className='font-black text-center'>CAMP DE REGION</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Sit cumque excepturi beatae at dicta est fuga 
              perferendis provident quidem amet quam ex ad quas odio, 
              </p>
          </div>
        </div>
       
      </div> */}

    </div>

</section>
  )
}

export default Agir