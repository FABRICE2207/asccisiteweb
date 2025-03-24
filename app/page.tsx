"use client"
import Hero from './components/Hero/Hero';
import ChiffreCard from './components/chiffreCard/ChiffreCard';
import Event from './components/Event/Event';
import Actu from './components/Actu/Actu';
import Agir from './components/Agir/Agir';


export default function Home() {

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

      {/* Les pages : les routes */}
      <main>
        
      </main>
    </div>
  );
}
