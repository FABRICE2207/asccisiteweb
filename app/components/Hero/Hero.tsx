import React from 'react';
import Menu from '../Menu/Menu';

const Hero = () => {

  return (
     // Image d'Arrière plan
     <div className='bg-black w-full lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[50px]
     px-[20px] lg:flex-row flex-col lg:gap-5 gap-[20px] bg-hero
   '
   >
    
    {/* Menu sur l'image */}
    <Menu />

    </div>
  )
}

export default Hero