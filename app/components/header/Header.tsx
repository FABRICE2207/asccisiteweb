"use client";

import Link from 'next/link';
import React from 'react'

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

const Header = () => {
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
      </nav>
  )
}

export default Header