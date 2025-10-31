"use client"

import React from 'react'
import CardOrganisationAscci from '../components/CardOrganisationAscci/CardOrganisationAscci'
import MenuOnglet from '../components/Menu/MenuOnglet'


const page = () => {

  return (
    <div>
      {/* // Image d'Arrière plan mouvement scout */}
         <div className='bg-black w-full lg:h-[300px] m-auto pt-[60px] lg:pt-[10px] lg:px-[50px]
         px-[20px] lg:flex-row flex-col lg:gap-5 gap-[20px] bg-orga-assci
       '
       >
        {/* Menu sur l'image - seulement si on est sur /Scout-Ascci */}
          <MenuOnglet />
      
      </div>
      <CardOrganisationAscci/>
    </div>
  )
}

export default page