import React from 'react'
// import backgroungImage from '../../assets/image_background.jpg'
import logoascci from '../../assets/logo_ascci.png'
import Image from 'next/image'

const Hero = () => {
  return (
     // Image d'Arrière plan
     <div className='bg-black w-full lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[80px]
     px-[20px] lg:flex-row flex-col lg:gap-5 gap-[50px] bg-hero
   '
   >
    
    <div className='flex lg:justify-start items-start pt-30 gap-5 sm:flex sm:flex-row'>
      <div>
      <Image
        src={logoascci}
        width={200}
        height={200}
        alt="Picture of the author"
        className='py-15'
      />
      </div>
      <div className='text-white font-bold text-6xl'>AGIR <br /> POUR UNE <br /> GÉNÉRATION <br /> INNOVANTE ET <br />RÉSILIENTE</div>
    </div>

    </div>
  )
}

export default Hero