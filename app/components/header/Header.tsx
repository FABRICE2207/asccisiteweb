"use client";

import Link from 'next/link';
import React from 'react'
import Hero from '../Hero/Hero';

// Menu
const menuNav = [
  {
    id: 1,
    name: 'Accueil',
    link: '/'
  },
  {
    id: 2,
    name: 'Event',
    link: '/event'
  },
  {
    id: 3,
    name: 'Bootik',
    link: '/Bootik'
  },
  {
    id: 4,
    name: 'Identitez-vous',
    link: '/identitez-vous'
  }
]

const Header = () => {
  return (
    <div>
      <nav className='w-full flex bg-[#14148a] justify-between items-center gap-1 lg:px-16
    px-6 py-4 sticky top-0 z-50'>
      <div className='w-[80%]'>

        {/* Liste des onglets */}
        <ul className='lg:flex justify-end items-end gap-20 hidden'>
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

      {/* Image background */}
      <Hero />
    </div>
  )
}

export default Header