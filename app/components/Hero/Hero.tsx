import React from 'react'
import logoascci from '../../assets/logo_ascci.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {

  // Les trois lien en bas
  const menuBas = [
    {
      id: 1,
      name: 'Qui sommes-nous ?',
      link: '/qui-sommes-nous',
      icon: '../../assetst/logo_ascci.png'
    },
    {
      id: 2,
      name: 'Que faisons-nous ?',
      link: '/que-faisons-nous',
      icon: '../../assetst/logo_ascci.png'
    },
    {
      id: 3,
      name: 'Où nous touvez ?',
      link: '/ou-nous-touvez',
      icon: '../../assetst/logo_ascci.png'
    },
  ]


  return (
     // Image d'Arrière plan
     <div className='bg-black w-full lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[50px]
     px-[20px] lg:flex-row flex-col lg:gap-5 gap-[50px] bg-hero
   '
   >
    
    <div className='w-full flex flex-col lg:justify-start lg:items-start lg:text-start lg:py-[50px] lg:gap-3 md:flex-row
    sm:w-full sm:flex sm:justify-center sm:items-center sm:text-center sm:gap-[5px]'>
      <div>
      <Image
        src={logoascci}
        width={180}
        height={180}
        alt="Logo de l'ASCCI"
        className='py-15'
      />
      </div>

      {/* Texte principale */}
      <div className='text-white'>
        <h1 className='text-6xl font-bold'>AGIR <br /> POUR UNE <br /> GÉNÉRATION <br /> INNOVANTE  <br /> ET RÉSILIENTE</h1>

        <div className='lg:justify-start my-5 lg:items-start lg:text-start sm:flex sm:justify-center sm:items-center sm:text-center'>
          {/* Bouton direction sur le site d'adhésion */}
          <Link href="https://adhesion.scoutascci.org/" target="_blank"
            className='bg-gradient-to-l from-orange-500 to-orange-700 w-[200px] h-[50px] rounded-2xl text-2xl flex justify-center 
            items-center hover:bg-[#14148a] font-semibold sm:flex sm:justify-center sm:items-center sm:text-center'>
            Inscrivez-vous
          </Link>
        </div>
      </div>

    </div>

    {/* Les trois liens en bas */}
    <div className='w-[16%] border-r-2 border-white  mt-[-50px] hidden lg:block'>
      <ul className='lg:flex lg:flex-col'>
      {
           menuBas.map(( {name, link} ) => (
              <div key={link} className="flex items-center gap-1">
                <Link className='text-white font-bold cursor-pointer p-1' href={link}
                >{name}</Link>
              </div>
            ))
          }
      </ul>
    </div>



    </div>
  )
}

export default Hero