"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Clique sur la barre du menue pour ouvrier
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
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
      link: '/Bootik'
    },
    {
      id: 5,
      name: 'Identitez-vous',
      link: '/identitez-vous'
    }
  ]

  return (
    <nav className='w-full flex bg-[#14148a] justify-between items-center gap-1 lg:px-16
      px-6 py-4 sticky top-0 z-1'>
      <div className='w-[80%]'>

        {/* Liste des onglets */}
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
            isMenuOpen ? <FaXmark className='text-white text-3xl cursor-pointer'/>
            : <FaBars className='text-white text-3xl cursor-pointer'/>
          }
        </div>
      </div>

      {/* affiche du menu format telephone */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} `}>

        <div className="fixed top-18.5 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30" onClick={closeMenu}>
          <ul className='flex flex-col justify-start items-start gap-2 w-[80%] h-screen bg-[#14148a]
      p-4 absolute right-0'>
          {
            menuNav.map(( {link, name} ) => (
              <Link key={name} className='text-white uppercase font-semibold cursor-pointer p-2
              w-full text-start' href={link}
              >{name}</Link>
            ))
          }
          </ul>

        </div>

      </div>
      

    </nav>
  )
}

export default Header