"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenOne, setIsMenuOpenOne] = useState(false);
  const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false);
  const [isMenuOpenThree, setIsMenuOpenThree] = useState(false);

  // Clique sur la barre du menue pour ouvrier
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  }


  // Clique sur la barre du menu one pour ouvrier
  const toggleMenuOne = () => {
    setIsMenuOpenOne(!isMenuOpenOne);
  }

  // Pour fermer le menu one
  const closeMenuOne = () => {
    setIsMenuOpenOne(false);
  }

  // Clique sur la barre du menu two pour ouvrier
  const toggleMenuTwo = () => {
    setIsMenuOpenTwo(!isMenuOpenTwo);
  }

  // Pour fermer le menu two
  const closeMenuTwo = () => {
    setIsMenuOpenTwo(false);
  }

  // Clique sur la barre du menu three pour ouvrier
  const toggleMenuThree = () => {
    setIsMenuOpenThree(!isMenuOpenThree);
  }

  // Pour fermer le menu two
  const closeMenuThree = () => {
    setIsMenuOpenThree(false);
  }



  // Menu
  const menuNav = [
    {
      id: 1,
      name: 'Accueil',
      link: '/'
    },
    {
      id: 1,
      name: 'Actu',
      link: '/actu'
    },
    {
      id: 3,
      name: 'Event',
      link: '/event'
    },
    {
      id: 4,
      name: 'Bootik',
      link: 'https://www.facebook.com/profile.php?id=100057136269345'
    },
    {
      id: 5,
      name: 'Identitez-vous',
      link: '/identitez-vous'
    }
  ]

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

  return (
    <nav className='w-full flex bg-[#14148a] justify-between items-center gap-1 lg:px-16
      px-6 py-4 sticky top-0 z-1'>
      <div className='w-[80%]'>

        {/* Liste des menus header */}
        <ul className='lg:flex justify-end items-end gap-18 hidden'>
          {
            menuNav.map(( {name, link} ) => (
              <Link key={link} className='text-white font-semibold cursor-pointer p-1
                hover:border-[#090674]  text-[15px]' href={link}
               >{name}</Link>
            ))
          }
      </ul>
      </div>
      
      {/* Recherche */}
      <div>
        <div className='bg-gray-200 px-10 rounded-full'>
          <h3>Recherche</h3>
        </div>
      </div>

      {/* Icône pour ouvrir/fermer le menu en mode téléphone */}
      <div className='flex justify-betwenn items-start lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {
            // Si le menu est ouvert, affiche Icon FaXmark sinon FarBars
            isMenuOpen ? null
            : <FaBars className='text-white text-3xl cursor-pointer'/>
          }
        </div>
      </div>

      {/* affiche du menu format telephone */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} `}>

        <div className="fixed top-14 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30" onClick={closeMenu}>
          <FaXmark className='text-white ml-6 mt-[-13%] text-3xl cursor-pointer'/>
          <ul className='flex top-[-10%] flex-col justify-start items-start gap-2 w-[70%] h-screen bg-[#14148a]
      p-4 absolute right-0'>
          <div className='w-full py-4'>
            <h4 className='text-center text-white font-semibold'>Menu</h4>
          </div>
          <div className='mt-10 flex flex-col justify-start items-start gap-2'>
          {
            menuNav.map(( {link, name} ) => (
              <Link key={name} className='text-white  font-semibold cursor-pointer p-2
              w-full text-start top-10' href={link}
              >{name}</Link>
            ))
          }
          </div>

          {/* Menu bas */}
          <div className='justify-start items-start 
          text-white  font-semibold cursor-pointer p-2 w-full text-start'>
            <div className='flex flex-col gap-5'>
              <div className='flex justify-between' onClick={toggleMenuOne} >
                <h4 >Qui sommes-nous ?</h4>
                <FaArrowRight className='text-white mt-1' />
              </div>
              <div className='flex justify-between' onClick={toggleMenuTwo} >
                <h4 >Que faisons-nous ?</h4>
                <FaArrowRight className='text-white mt-1' />
              </div>
              <div className='flex justify-between' onClick={toggleMenuThree} >
                <h4>Où nous trouvez ? </h4>
                <FaArrowRight className='text-white mt-1' />
              </div>
              
            </div>
          </div>

          </ul>

        </div>

      </div>

      {/* affiche du menu one format telephone */}
      <div className={`${isMenuOpenOne ? 'flex' : 'hidden'} `}>

        <div className="fixed top-18.5 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30" onClick={closeMenuOne}>
          <div className='flex top-[-10%] flex-col justify-start items-start gap-2 w-[70%] h-screen bg-[#14148a]
          p-4 absolute right-0'>
          <div className='flex w-full py-4 gap-5 cursor-pointer' onClick={toggleMenu}>
            <FaArrowLeft className='text-white' />
            <h4 className='text-white font-semibold mt-[-5px]'>Précédent</h4>
          </div>
            <div className='justify-start items-start 
            text-white  font-semibold cursor-pointer p-2 w-full text-start'>
              <div className='flex flex-col gap-5 mt-10'>
                <div className='flex justify-between'>
                  <h4>Scout ASCCI</h4>
                  <FaArrowRight className='text-white mt-1' />
                </div>
                <div className='flex justify-between'>
                  <h4>Organisation ASCCI</h4>
                  <FaArrowRight className='text-white mt-1' />
                </div>
              </div>
            </div>        
          </div>

        </div>

      </div>


      {/* affiche du menu Two format telephone */}
      <div className={`${isMenuOpenTwo ? 'flex' : 'hidden'} `}>

        <div className="fixed top-18.5 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30" onClick={closeMenuTwo}>
          <div className='flex top-[-10%] flex-col justify-start items-start gap-2 w-[70%] h-screen bg-[#14148a]
          p-4 absolute right-0'>
          <div className='flex w-full py-4 gap-5 cursor-pointer' onClick={toggleMenu}>
            <FaArrowLeft className='text-white' />
            <h4 className='text-white font-semibold mt-[-5px]'>Précédent</h4>
          </div>

          <div className='justify-start items-start 
            text-white  font-semibold cursor-pointer p-2 w-full text-start'>
              <div className='flex flex-col gap-5 mt-10'>
                <div className='flex justify-between'>
                  <h4>Jeunes</h4>
                  <FaArrowRight className='text-white mt-1' />
                </div>
                <div className='flex justify-between'>
                  <h4>Adultes</h4>
                  <FaArrowRight className='text-white mt-1' />
                </div>
                <div className='flex justify-between'>
                  <h4>Programmes Internationaux</h4>
                  <FaArrowRight className='text-white mt-4' />
                </div>
              </div>
          </div>  

          </div>
        </div>
      </div>

      {/* affiche du menu Three format telephone */}
      <div className={`${isMenuOpenThree ? 'flex' : 'hidden'} `}>

        <div className="fixed top-18.5 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30" onClick={closeMenuThree}>
          <div className='flex top-[-10%] flex-col justify-start items-start gap-2 w-[70%] h-screen bg-[#14148a]
          p-4 absolute right-0'>
          <div className='flex w-full py-4 gap-5 cursor-pointer' onClick={toggleMenu}>
            <FaArrowLeft className='text-white' />
            <h4 className='text-white font-semibold mt-[-5px]'>Précédent</h4>
          </div>
          <div className='justify-start items-start 
            text-white  font-semibold cursor-pointer p-2 w-full text-start'>
              <div className='flex flex-col gap-5 mt-10'>
                <h4>Région</h4>
                <h4>District</h4>
                <h4>Groupe</h4>
                <h4>Dans le monde</h4>
              </div>
            </div>             
          </div>

        </div>

      </div>
    
    </nav>
  )
}

export default Header