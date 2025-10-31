"use client"
import React, { useEffect} from 'react';
import Hero from './components/Hero/Hero';
import ChiffreCard from './components/chiffreCard/ChiffreCard';
import Event from './components/Event/Event';
import Actu from './components/Actu/Actu';
import Agir from './components/Agir/Agir';
import AOS from "aos";
import "aos/dist/aos.css"

export default function Home() {

  // Chargement de l'animation
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    )
  })

  return (
    <div>
      {/* Image background */}
      <Hero />

      {/* Les chiffres de l'ASCCI */}
      <ChiffreCard />

      {/* Event */}
      <Event />

      {/* Actualité */}
      <Actu />

      {/* Agir */}
      <Agir />
       
    </div>
  );
}
