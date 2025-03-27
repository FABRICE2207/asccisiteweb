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
      name: 'Où nous trouvez ?',
      link: '/ou-nous-trouvez',
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
      <div className='flex justify-center items-start' data-aos="zoom-in-down" data-aos-delay="300">
      <Image
        src={logoascci}
        width={180}
        height={180}
        alt="Logo de l'ASCCI"
        className='py-15'
      />
      </div>

      {/* Texte principale */}
      <div className='text-white text-prin'>
        <h1 className='text-6xl font-bold titre-prin' data-aos="fade-up" data-aos-delay="600">AGIR <br /> POUR UNE <br /> GÉNÉRATION <br /> INNOVANTE  <br /> ET RÉSILIENTE</h1>

        <div className='lg:justify-start my-5 lg:items-start lg:text-start sm:flex 
        sm:justify-center sm:items-center sm:text-center' data-aos="fade-up" data-aos-delay="800">
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
                <Link className='text-white font-bold cursor-pointer p-1 hover:border-orange-600
                hover:border-b-4 focus:border-orange-600 focus:border-b-4' 
                href=""
                onClick={() => togglePopup(id)}
                >
                  {name}
                </Link>

                {/* Popup unique pour chaque lien l'id est égale 1 */}
                
                {
                  visiblePopup === id && id === 1 && (
                <div>
                  
                  <div className='fixed top-10 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30' onClick={() => togglePopup(id)}>
                      <div className='scroll-auto bg-white py-10 mt-48'>
                      <div className='flex justify-evenly items-start'>
                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Scout ASCCI</h1>
                          <div className='flex flex-col justify-start items-start mt-5 gap-2 text-[#14148a] text-semibold'>
                            <Link href="">Le Mouvement Scout</Link>
                            <Link href="">Projet pédagogique</Link>
                            <Link href="">Méthode scoute</Link>
                            <Link href="">Promesse et loi scoutes</Link>
                            <Link href="">Histoire du scoutisme</Link>
                            <Link href="">Formation</Link>
                          </div>
                        </div>

                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Organisation ASCCI</h1>
                          <div className='flex flex-col justify-start items-start mt-5 gap-2 text-[#14148a] text-semibold'>
                            <Link href="">Organigramme</Link>
                            <Link href="">Equipe nationale</Link>
                            <Link href="">CND</Link>
                            <Link href="">Conseil des ainés</Link>
                            <Link href="">Commissaire au compte</Link>
                            <Link href="">Jeunes Conseillers</Link>
                          </div>
                        </div>
                  </div>
                      </div>
                  </div>
                  
                </div>
                  )
                }

                {/* Popup unique pour chaque lien l'id est égale 2 */}
                {
                  visiblePopup === id && id === 2 && (
                  
                  <div>
                    <div className='fixed top-10 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30' onClick={() => togglePopup(id)}>
                      <div className='bg-white py-10 mt-48'>
                      <div className='flex justify-evenly items-start mt-2'>
                        <div>
                          <div>
                            <h1 className='text-[#14148a] text-2xl font-black'>Jeunes</h1>
                          </div>
                          <div className='flex flex-col justify-start items-start mt-5 gap-2 text-[#14148a] text-semibold'>
                            <Link href="">Environnement</Link>
                            <Link href="">Education</Link>
                            <Link href="">Paix</Link>
                            <Link href="">Diversité et inclusion</Link>
                            <Link href="">Action humanitaire</Link>
                            <Link href="">Culture et tradition</Link>
                          </div>
                        </div>

                        <div>
                          <div>
                            <h1 className='text-[#14148a] text-2xl font-black'>Adultes</h1>
                          </div>
                          <div className='flex flex-col justify-start items-start mt-5 gap-2 text-[#14148a] text-semibold'>

                            <Link href="">Badge de bois</Link>
                            <Link href="">Gnékpa</Link>
                            <Link href="">Stappro</Link>
                            <Link href="">Camp formation en région</Link>
                          </div>
                        </div>

                        <div>
                          <h1 className='text-[#14148a] text-2xl font-black'>Programmes Internationaux</h1>
                          <div className='flex flex-col justify-start items-start mt-5 gap-2 text-[#14148a] text-semibold'>
                            <Link href="">Projet planete</Link>
                            <Link href="">Messager de la paix</Link>
                          </div>
                        </div>
                     </div>
                      </div>
                    </div>
                  </div>

                  )
                }

                {/* Popup unique pour chaque lien l'id est égale 3 */}
                {
                  visiblePopup === id && id === 3 && (

                    <div>
                    <div className='fixed top-10 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30' onClick={() => togglePopup(id)}>
                      <div className='bg-white py-10 mt-48'>
                        <div className='flex justify-evenly items-start mt-2'>
                          <div>
                            <h1 className='text-[#14148a] text-2xl font-black'>Trouvez nous ici ?</h1>

                            <div className='flex flex-col justify-start items-start gap-2 text-[#14148a] text-semibold'>
                              <Link href="">Région</Link>
                              <Link href="">District</Link>
                              <Link href="">Groupe</Link>
                              <Link href="">Dans le monde</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  )
                }

              </div>

            ))
          }
      </ul>
    </div>

    </div>
  )
}

export default Hero