"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logoascci from "../../assets/logo_ascci.png";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenOne, setIsMenuOpenOne] = useState(false);
  const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false);
  const [isMenuOpenThree, setIsMenuOpenThree] = useState(false);

  // Clique sur la barre du menue pour ouvrier
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMenuOpenOne(false);
    setIsMenuOpenTwo(false);
    setIsMenuOpenThree(false);
  };

  // Clique sur la barre du menu one pour ouvrier
  const toggleMenuOne = () => {
    setIsMenuOpenOne(!isMenuOpenOne);
  };

  // Pour fermer le menu one
  const closeMenuOne = () => {
    setIsMenuOpenOne(false);
  };

  // Clique sur la barre du menu two pour ouvrier
  const toggleMenuTwo = () => {
    setIsMenuOpenTwo(!isMenuOpenTwo);
  };

  // Pour fermer le menu two
  const closeMenuTwo = () => {
    setIsMenuOpenTwo(false);
  };

  // Clique sur la barre du menu three pour ouvrier
  const toggleMenuThree = () => {
    setIsMenuOpenThree(!isMenuOpenThree);
  };

  // Pour fermer le menu two
  const closeMenuThree = () => {
    setIsMenuOpenThree(false);
  };

  // Menu
  const menuNav = [
    {
      id: 1,
      name: "Accueil",
      link: "/",
    },
    {
      id: 1,
      name: "Actu",
      link: "/actu",
    },
    {
      id: 3,
      name: "Event",
      link: "/event",
    },
    {
      id: 4,
      name: "Bootik",
      link: "https://www.facebook.com/profile.php?id=100057136269345",
    },
    {
      id: 5,
      name: "Identitez-vous",
      link: "/identitez-vous",
    },
  ];

  // Les trois lien en bas
  // const menuBas = [
  //   {
  //     id: 1,
  //     name: 'Qui sommes-nous ?',
  //     link: '/qui-sommes-nous',
  //     icon: '../../assetst/logo_ascci.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Que faisons-nous ?',
  //     link: '/que-faisons-nous',
  //     icon: '../../assetst/logo_ascci.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'Où nous trouvez ?',
  //     link: '/ou-nous-trouvez',
  //     icon: '../../assetst/logo_ascci.png'
  //   },
  // ]

  return (
    <nav
      className="w-full flex bg-[#14148a] justify-between items-center gap-1 lg:px-16
      px-6 py-4 sticky top-0 z-1"
    >
      <div className="w-[80%]">
        {/* Liste des menus header */}
        <ul className="lg:flex justify-end items-end gap-18 hidden">
          {menuNav.map(({ name, link, id }) => (
            <Link
              key={id}
              className="text-white font-semibold cursor-pointer p-1
                hover:border-[#090674]  text-[15px]"
              href={link}
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Icône pour ouvrir/fermer le menu en mode téléphone */}
      <div
        className="w-full ml-[-90px] flex justify-start items-start lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div className="items-start">
          {
            // Si le menu est ouvert, affiche Icon FaXmark sinon FarBars
            isMenuOpen ? null : (
              <FaBars className="text-white text-3xl cursor-pointer" />
            )
          }
        </div>
      </div>

      {/* Recherche */}
      <div>
        <div className="bg-gray-200 px-10 rounded-full">
          <h3>Recherche</h3>
        </div>
      </div>

      {/* affiche du menu format telephone */}
      <div className={`${isMenuOpen ? "flex" : "hidden"} `}>
        <div
          className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
          
        >
          <ul
            className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#14148a]
              py-4 absolute left-0"
          >
            {/* Logo  */}
            <div className="w-full">
              <div className="flex justify-center items-center">
              <Image
                src={logoascci}
                width={80}
                height={80}
                alt="Logo de l'ASCCI"
              />
              </div>
            </div>
            
            <div
              className="justify-start items-start 
            text-white font-semibold cursor-pointer w-full text-start"
            >
              <div className="flex flex-col gap-5 mx-2" onClick={closeMenu}>
                <div className="flex justify-between py-2 border-b border-white" >
                  <h4>Fermer</h4>
                  <FaXmark className="text-2xl text-white mt-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mt-4 gap-5 mt-10px cursor-pointer">
              {menuNav.map(({ link, name, id }) => (
                <div className="mx-2 border-b border-white py-1.5 px-1">
                  <Link
                  key={id}
                  className="text-white font-semibold cursor-pointer
                  w-full text-start"
                  href={link}
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Menu bas */}
            <div
              className="justify-start items-start 
          text-white  font-semibold cursor-pointer w-full text-start"
            >
              <div className="flex flex-col gap-5 mx-2">
                <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuOne}>
                  <h4>Qui sommes-nous ?</h4>
                  <FaArrowRight className="text-white mt-1" />
                </div>
                <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuTwo}>
                  <h4>Que faisons-nous ?</h4>
                  <FaArrowRight className="text-white mt-1" />
                </div>
                <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuThree}>
                  <h4>Où nous trouvez ? </h4>
                  <FaArrowRight className="text-white mt-1" />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/* affiche du menu one format telephone */}
      <div className={`${isMenuOpenOne ? "flex" : "hidden"} `}>
        <div
            className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
            
          >
            <ul
              className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#14148a]
                py-4 absolute left-0"
            >
              {/* Logo  */}
              <div className="w-full">
                <div className="flex justify-center items-center">
                <Image
                  src={logoascci}
                  width={80}
                  height={80}
                  alt="Logo de l'ASCCI"
                />
                </div>
              </div>
              
              <div
                className="justify-start items-start 
              text-white font-semibold cursor-pointer w-full text-start"
              >
                <div className="flex flex-col gap-5 mx-2"  onClick={closeMenu}>
                  <div className="flex justify-between py-2 border-b border-white" >
                    <h4>Fermer</h4>
                    <FaXmark className="text-2xl text-white mt-1" />
                  </div>
                </div>

                <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuOne}>
                  <div className="flex justify-between py-2 border-b border-white" >
                    <h4>Précédent</h4>
                    <FaArrowLeft className="text-2xl text-white mt-" />
                  </div>
                </div>
              </div>

              {/* Menu bas */}
              <div
                className="justify-start items-start 
            text-white  font-semibold cursor-pointer w-full text-start"
              >
                <div className="flex flex-col gap-5 mx-2">
                  <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuOne}>
                    <h4>Scout ASCCI</h4>
                    <FaArrowRight className="text-white mt-1" />
                  </div>
                  <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuTwo}>
                    <h4>Organisation ASCCI</h4>
                    <FaArrowRight className="text-white mt-1" />
                  </div>

                </div>
              </div>
            </ul>
        </div>
        
      </div>

      {/* affiche du menu Two format telephone */}
      <div className={`${isMenuOpenTwo ? "flex" : "hidden"} `}>
        <div
              className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
              
            >
              <ul
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#14148a]
                  py-4 absolute left-0"
              >
                {/* Logo  */}
                <div className="w-full">
                  <div className="flex justify-center items-center">
                  <Image
                    src={logoascci}
                    width={80}
                    height={80}
                    alt="Logo de l'ASCCI"
                  />
                  </div>
                </div>
                
                <div
                  className="justify-start items-start 
                text-white font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2"  onClick={closeMenu}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Fermer</h4>
                      <FaXmark className="text-2xl text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuTwo}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft className="text-2xl text-white mt-" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>Jeunes</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>Adultes</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>Programmes internationaux</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>

                  </div>
                </div>
              </ul>
        </div>
      </div>

      {/* affiche du menu Three format telephone */}
      <div className={`${isMenuOpenThree ? "flex" : "hidden"} `}>
      <div
              className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
              
            >
              <ul
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#14148a]
                  py-4 absolute left-0"
              >
                {/* Logo  */}
                <div className="w-full">
                  <div className="flex justify-center items-center">
                  <Image
                    src={logoascci}
                    width={80}
                    height={80}
                    alt="Logo de l'ASCCI"
                  />
                  </div>
                </div>
                
                <div
                  className="justify-start items-start 
                text-white font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2"  onClick={closeMenu}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Fermer</h4>
                      <FaXmark className="text-2xl text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuThree}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft className="text-2xl text-white mt-" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>Région</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>District</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>Groupe</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>
                    <div className="flex justify-between py-2 border-b border-white">
                      <h4>Dans le monde</h4>
                      <FaArrowRight className="text-white mt-1" />
                    </div>

                  </div>
                </div>
              </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
