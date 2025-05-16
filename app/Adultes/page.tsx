"use client"

import React from 'react'
import Menu from '../components/Menu/Menu'
import CardAdules from '../components/CardAdules/CardAdultes'


const page = () => {

  return (
    <div>
      {/* // Image d'Arrière plan mouvement scout */}
         <div className='bg-black w-full lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[50px]
         px-[20px] lg:flex-row flex-col lg:gap-5 gap-[20px] bg-hero
       '
       >
        
        {/* Menu sur l'image - seulement si on est sur /Scout-Ascci */}
        
          <Menu />
      
      </div>
      <CardAdules/>
    </div>
  )
}

export default page