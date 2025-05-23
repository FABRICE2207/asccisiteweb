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
  const [isMenuOpenScoutAscci, setIsMenuOpenScoutAscci] = useState(false);
  const [isMenuOpenTrouvezNous, setIsMenuOpenTrouvezNous] = useState(false);
  const [isMenuOpenJeunes, setIsMenuOpenJeunes] = useState(false);
  const [isMenuOpenAdultes, setIsMenuOpenAdultes] = useState(false);
  const [isMenuOpenProgammesInter, setIsMenuOpenProgammesInter] = useState(false);


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
    setIsMenuOpenScoutAscci(false);
    setIsMenuOpenTrouvezNous(false);
    setIsMenuOpenJeunes(false);
    setIsMenuOpenAdultes(false);
    setIsMenuOpenProgammesInter(false);
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


  // Clique sur la barre du menu three pour ouvrier
  const toggleMenuScoutAsci = () => {
    setIsMenuOpenScoutAscci(!isMenuOpenScoutAscci);
  };

  // Pour fermer le menu two
  const closeMenuScoutAsci = () => {
    setIsMenuOpenScoutAscci(false);
  };

    // Clique sur la barre du menu Trouver Nous
  const toggleMenuTrouvezNous = () => {
    setIsMenuOpenTrouvezNous(!isMenuOpenTrouvezNous);
  };

  // Pour fermer le menu Touvez Nous
  const closeMenuTrouvezNous = () => {
    setIsMenuOpenTrouvezNous(false);
  };

    // Clique sur la barre du menu Jeunes
  const toggleMenuJeunes = () => {
    setIsMenuOpenJeunes(!isMenuOpenJeunes);
  };

  // Pour fermer le menu Touvez Nous
  const closeMenuJeunes = () => {
    setIsMenuOpenJeunes(false);
  };

    // Clique sur la barre du menu Adultes
  const toggleMenuAdultes = () => {
    setIsMenuOpenAdultes(!isMenuOpenAdultes);
  };

  // Pour fermer le menu Touvez Nous
  const closeMenuAdultes = () => {
    setIsMenuOpenJeunes(false);
  };

    // Clique sur la barre du menu Programmes Internationaux
  const toggleMenuProgrammesInter = () => {
    setIsMenuOpenProgammesInter(!isMenuOpenProgammesInter);
  };

  // Pour fermer le menu Programmes Internationaux
  const closeMenuProgrammesInter = () => {
    setIsMenuOpenProgammesInter(false);
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
      link: "/Actualite",
    },
    {
      id: 3,
      name: "Event",
      link: "/Evenements",
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


  return (
    <nav
      className="w-full flex bg-[#000080] justify-between items-center gap-1 lg:px-16
      px-6 py-4 sticky top-0 z-1"
    >
      <div className="w-[80%]">
        {/* Liste des menus header */}
        <ul className="lg:flex justify-end items-end gap-18 hidden">
          {menuNav.map(({ name, link}) => (
            <Link
              key={link}
              className="text-white cursor-pointer p-1 
                hover:border-[#090674] text-[15px]"
                style={{ fontFamily: 'Montserrat', fontWeight: 600 }}
              // className=""
              href={link}
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Icône pour ouvrir/fermer le menu en mode téléphone */}
      <div
  className="w-full flex justify-end items-start lg:hidden mt-3"

>
  <div className="items-end w-full">
    {!isMenuOpen && (
      <FaBars className="text-white text-3xl cursor-pointer ml-[-80%]" 
        onClick={toggleMenu}
      />
    )}
  </div>
</div>

      {/* Recherche */}
      <div>
        <div className="bg-gray-200 px-10 rounded-full">
          <h3>Recherche</h3>
        </div>
      </div>

      {/* affiche du menu format telephone */}
      <div className={`${isMenuOpen ? "flex" : "hidden"}`}>
        <div
          className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
        >
          <ul
            className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
              py-4 absolute left-0 "
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
                  <FaXmark size={20} className="text-2xl text-white mt-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mt-4 gap-5 mt-10px cursor-pointer">
              {menuNav.map(({ link, name }) => (
                <Link key={link}
                  className="text-white font-semibold cursor-pointer
                  w-full text-start"
                  href={link}
                  >
                  <div className="mx-2 border-b border-white py-1.5 px-1" onClick={closeMenu}>
                    {name}
                  </div>
                  </Link>
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
                <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuTrouvezNous}>
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
              className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                    <FaXmark  size={20} className="text-2xl text-white mt-1" />
                  </div>
                </div>

                <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuOne}>
                  <div className="flex justify-between py-2 border-b border-white" >
                    <h4>Précédent</h4>
                    <FaArrowLeft size={20} className="text-2xl text-white mt-" />
                  </div>
                </div>
              </div>

              {/* Menu bas */}
              <div
                className="justify-start items-start 
            text-white  font-semibold cursor-pointer w-full text-start"
              >
                <div className="flex flex-col gap-5 mx-2">
                  <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuScoutAsci}>
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
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                      <FaXmark  size={20} className="text-2xl text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuTwo}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft size={20} className="text-2xl text-white mt-" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <a 
                      onClick={closeMenu}
                      href="/Organisation-Ascci#Organisation" 
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Organigramme</h4>
                    </a>
                    <a
                      onClick={closeMenu}
                      href="/Organisation-Ascci#Equipe-nationale" 
                       className="flex justify-between py-2 border-b border-white">
                      <h4>Equipe nationale</h4>
                    </a>
                    <a 
                      onClick={closeMenu} 
                      href="/Organisation-Ascci#Conseil-national-direction" 
                      className="flex justify-between py-2 border-b border-white">
                      <h4>CND</h4>
                    </a>
                    <a
                      onClick={closeMenu} 
                      href="/Organisation-Ascci#Conseil-des-ainés" 
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Coneil des ainés</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                       href="/Organisation-Ascci#Commissaire-aux-comptes"  
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Commissaire aux comptes</h4>
                    </a>
                    <a
                      onClick={closeMenu}
                      href="/Organisation-Ascci#Jeunes-conseillers" 
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Jeunes Conseillers</h4>
                    </a>

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
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                      <FaXmark  size={20} className="text-2xl text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuThree}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft size={20} className="text-2xl text-white mt-" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <a href="/Trouvez-nous-ici#Région" className="flex justify-between py-2 border-b border-white"
                      onClick={closeMenu}
                    >
                      <h4>Région</h4>
                    </a>
                    <a href="/Trouvez-nous-ici#District" className="flex justify-between py-2 border-b border-white"
                       onClick={closeMenu}
                    >
                      <h4>District</h4>
                    </a>
                    <a href="/Trouvez-nous-ici#Groupe" className="flex justify-between py-2 border-b border-white"
                       onClick={closeMenu}
                    >
                      <h4>Groupe</h4>
                    </a>
                    <a href="/Trouvez-nous-ici#Dans-le-monde"
                      onClick={closeMenu}
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Dans le monde</h4>
                    </a>

                  </div>
                </div>
              </ul>
        </div>
      </div>

      {/* affiche du menu Scout Ascci format telephone */}
      <div className={`${isMenuOpenScoutAscci ? "flex" : "hidden"} `}>
      <div
              className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
              
            >
              <ul
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                      <FaXmark size={20} className="text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuScoutAsci}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft size={20} className="text-white mt-1" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <a
                    onClick={closeMenu}
                    href="/Scout-Ascci#Le-Mouvement-Scout" 
                    className="flex justify-between py-2 border-b border-white">
                      <h4>Le Mouvement Scout</h4>
    
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Scout-Ascci#Projet-pédagogique"
                      className="flex justify-between py-2 border-b border-white"
                    >
                      <h4>Projet pédagogique</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Scout-Ascci#Méthode-scoute"
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Méthode scoute</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Scout-Ascci#Promesse-et-loi-scoutes"
                       className="flex justify-between py-2 border-b border-white">
                      <h4>Promesse et loi scoutes</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Scout-Ascci#Histoire-du-scoutisme" 
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Histoire du scoutisme</h4>
    
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Scout-Ascci#Formation"
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Formation</h4>
                    </a>

                  </div>
                </div>
              </ul>
        </div>
      </div>
      
       {/* affiche du menu trouvez-nous format telephone */}
      <div className={`${isMenuOpenTrouvezNous ? "flex" : "hidden"} `}>
        <div
            className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
            
          >
            <ul
              className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                    <FaXmark  size={20} className="text-2xl text-white mt-1" />
                  </div>
                </div>

                <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuTrouvezNous}>
                  <div className="flex justify-between py-2 border-b border-white" >
                    <h4>Précédent</h4>
                    <FaArrowLeft size={20} className="text-2xl text-white mt-" />
                  </div>
                </div>
              </div>

              {/* Menu bas */}
              <div
                className="justify-start items-start 
            text-white  font-semibold cursor-pointer w-full text-start"
              >
                <div className="flex flex-col gap-5 mx-2">
                  <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuJeunes}>
                    <h4>Jeunes</h4>
                    <FaArrowRight className="text-white mt-1" />
                  </div>
                  <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuAdultes}>
                    <h4>Adules</h4>
                    <FaArrowRight className="text-white mt-1" />
                  </div>
                  <div className="flex justify-between py-2 border-b border-white" onClick={toggleMenuProgrammesInter}>
                    <h4>Programmes Internationnaux</h4>
                    <FaArrowRight className="text-white mt-1" />
                  </div>

                </div>
              </div>
            </ul>
        </div>
        
      </div>

      {/* affiche du menu Que faisons-nous -- Adultes telephone */}
      <div className={`${isMenuOpenAdultes ? "flex" : "hidden"} `}>
      <div
              className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
              
            >
              <ul
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                      <FaXmark size={20} className="text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuAdultes}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft size={20} className="text-white mt-1" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <a
                    onClick={closeMenu}
                    href="/Adultes#Badge-de-bois" 
                    className="flex justify-between py-2 border-b border-white">
                      <h4>Badge de bois</h4>
    
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Adultes#Gnépka"
                      className="flex justify-between py-2 border-b border-white"
                    >
                      <h4>Gnépka</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Adultes#Stappro"
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Stappro</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Adultes#Camp-formation-en-region"
                       className="flex justify-between py-2 border-b border-white">
                      <h4>Camp de formation en région</h4>
                    </a>

                  </div>
                </div>
              </ul>
        </div>
      </div>

      {/* affiche du menu Que faisons-nous -- Jeunes telephone */}
      <div className={`${isMenuOpenJeunes ? "flex" : "hidden"} `}>
      <div
              className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
              
            >
              <ul
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                      <FaXmark size={20} className="text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuJeunes}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft size={20} className="text-white mt-1" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <a
                    onClick={closeMenu}
                    href="/Jeunes#Environnement" 
                    className="flex justify-between py-2 border-b border-white">
                      <h4>Environnement</h4>
    
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Jeunes#Education"
                      className="flex justify-between py-2 border-b border-white"
                    >
                      <h4>Education</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Jeunes#Paix"
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Paix</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Jeunes#Diversité-et-inclusion"
                       className="flex justify-between py-2 border-b border-white">
                      <h4>Diversité et inclusion</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Jeunes#Action-humanitaire" 
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Action humanitaire</h4>
    
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Jeunes#Culture-et-tradition"
                      className="flex justify-between py-2 border-b border-white">
                      <h4>Culture et tradition</h4>
                    </a>

                  </div>
                </div>
              </ul>
        </div>
      </div>

      {/* affiche du menu Que faisons-nous -- Jeunes telephone */}
      <div className={`${isMenuOpenProgammesInter ? "flex" : "hidden"} `}>
      <div
              className="fixed top-14 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
              
            >
              <ul
                className="flex top-[-50px] flex-col justify-start items-start gap-2 w-full h-screen bg-[#000080]
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
                      <FaXmark size={20} className="text-white mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 mx-2 mt-2" onClick={closeMenuProgrammesInter}>
                    <div className="flex justify-between py-2 border-b border-white" >
                      <h4>Précédent</h4>
                      <FaArrowLeft size={20} className="text-white mt-1" />
                    </div>
                  </div>
                </div>

                {/* Menu bas */}
                <div
                  className="justify-start items-start 
              text-white  font-semibold cursor-pointer w-full text-start"
                >
                  <div className="flex flex-col gap-5 mx-2">
                    <a
                    onClick={closeMenu}
                    href="Programmes-Internationaux#Projet-planète" 
                    className="flex justify-between py-2 border-b border-white">
                      <h4>Projet planète</h4>
                    </a>
                    <a 
                      onClick={closeMenu}
                      href="/Programmes-Internationaux#Message-de-la-paix"
                      className="flex justify-between py-2 border-b border-white"
                    >
                      <h4>Message de la paix</h4>
                    </a>
                  </div>
                </div>
              </ul>
        </div>
      </div>

    </nav>
  );
};

export default Header;
