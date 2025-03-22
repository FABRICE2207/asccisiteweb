"use client"

import React from 'react'
import Image from 'next/image'
import logoascci from '../../assets/logo_ascci.png'

const ChiffreCard = () => {
  return (
    <section>
      <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-10 gap-5'>

        <div className='flex flex-col justify-center items-center mt-12 w-full'>
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
            
          />
          <h1 className='text-6xl font-black text-red-600'>+30 000</h1>
          <h3 className='text-[22px] font-black text-[#14148a]'>Scouts et bénévoles</h3>
        </div>

        <div className='flex flex-col justify-center items-center mt-12 w-full'>
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
          />
          <h1 className='text-6xl font-black text-red-600'>25 000</h1>
          <h3 className='text-[22px] font-black text-[#14148a]'>Jeunes Filles et Garçons</h3>
        </div>

        <div className='flex flex-col justify-center items-center mt-12 w-full'>
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
            
          />
          <h1 className='text-6xl font-black text-red-600'>5000</h1>
          <h3 className='text-[22px] font-black text-[#14148a]'>Bénévoles</h3>
        </div>
        
      </div>

      {/* Deuxième colonnes */}
      <div className='flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-10 gap-5'>

        <div className='flex flex-col justify-center items-center mt-12 w-full'>
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
            
          />
          <h1 className='text-6xl font-black text-red-600'>14</h1>
          <h3 className='text-[22px] font-black text-[#14148a]'>Région Scoutes</h3>
        </div>

        <div className='flex flex-col justify-center items-center mt-12 w-full'>
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
          />
          <h1 className='text-6xl font-black text-red-600'>145 </h1>
          <h3 className='text-[22px] font-black text-[#14148a]'>Districts</h3>
        </div>

        <div className='flex flex-col justify-center items-center mt-12 w-full'>
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
            
          />
          <h1 className='text-6xl font-black text-red-600'>2300</h1>
          <h3 className='text-[22px] font-black text-[#14148a]'>Groupes Scouts</h3>
        </div>
        
      </div>

    </section>
  )
}

export default ChiffreCard