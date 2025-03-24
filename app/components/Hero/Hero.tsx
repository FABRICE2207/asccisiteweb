import React, { useState } from 'react';
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

    // État pour gérer la visibilité des popups
    const [visiblePopup, setVisiblePopup] = useState<number | null>(null);

    const togglePopup = (id: number) => {
      setVisiblePopup(visiblePopup === id ? null : id);
    };


  return (
     // Image d'Arrière plan
     <div className='bg-black w-full lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[50px]
     px-[20px] lg:flex-row flex-col lg:gap-5 gap-[20px] bg-hero
   '
   >
    
    <div className='w-full flex flex-col lg:justify-start lg:items-start lg:text-start lg:py-[40px] lg:gap-3 md:flex-row
    md:w-full md:flex md:justify-center md:items-center md:text-center md:gap-[5px]
    sm:flex sm:justify-center sm:items-center sm:text-center sm:flex-col justify-center items-center
    '>
      <div className='flex justify-center items-center'>
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
            items-center font-semibold sm:flex sm:justify-center sm:items-center sm:text-center
            md:flex md:justify-center md:items-center md:text-center
            '>
            Inscrivez-vous
          </Link>
        </div>
      </div>

    </div>

    {/* Les trois liens en bas */}
    <div className='w-[15%] border-r-2 border-white  mt-[-50px] hidden lg:block'>
      <ul className='lg:flex lg:flex-col'>
      {
           menuBas.map(( {id, name} ) => (
              <div key={id} className="flex items-center gap-1">
                <Link className='text-white font-bold cursor-pointer p-1' href=""
                onClick={() => togglePopup(id)}
                >
                  {name}
                </Link>



                {/* Popup unique pour chaque lien */}
                {visiblePopup === id && (
                <div className='absolute bg-white text-black p-4 shadow-lg z-50 
                w-[90%] mt-[30%]'>

                  {/* l'id est égale 1 */}
                  {
                    id === 1 && (
                      <div className='flex justify-evenly items-center mt-2'>
                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Scout ASCCI</h1>
                        </div>
                        <div className='text-[#14148a] text-2xl font-black'>Organisation ASCCI</div>
                      </div>
                    )
                  }

                   {/* l'id est égale 2 */}
                  {
                    id === 2 && (
                      <div className='flex justify-evenly items-center mt-2'>
                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Jeunes</h1>
                        </div>

                        <div className=''>
                          <h1 className='text-[#14148a] text-2xl font-black'>Adultes</h1>
                        </div>

                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Programmes Internationnaux</h1>
                        </div>
                      </div>
                    )
                  }


                   {/* l'id est égale 3 */}
                  {
                    id === 3 && (
                      <div className='flex justify-center items-center mt-2'>

                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Touvez-nous ici ?</h1>

                          <div className='flex flex-col justify-center items-center gap-2 text-[#14148a] text-semibold'>
                            <Link href="">Région</Link>
                            <Link href="">District</Link>
                            <Link href="">Groupe</Link>
                            <Link href="">Dans le monde</Link>
                          </div>
                        </div>

                      </div>
                    )
                  }

                  {/* <Link
                    href={link}
                    className='text-blue-500 hover:underline mt-2 block'
                  >
                    Aller à {name}
                  </Link> */}
                  <button
                    onClick={() => togglePopup(id)}
                    className='mt-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded'
                  >
                    Fermer
                  </button>
                </div>
              )}

              </div>

            ))
          }
      </ul>
    </div>

    </div>
  )
}

export default Hero